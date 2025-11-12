const fs = require('fs')
const path = require('path')

// 获取docs目录下的所有markdown文件
function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      // 递归遍历子目录，但排除.vitepress目录
      if (file !== '.vitepress' && file !== 'node_modules') {
        getMarkdownFiles(filePath, fileList)
      }
    } else if (path.extname(file) === '.md') {
      // 获取文件修改时间
      const mtime = stat.mtime
      // 生成相对于docs目录的路径
      const relativePath = path.relative(path.join(__dirname, '../docs'), filePath)
      // 转换为URL路径（去除.md扩展名，处理index.md）
      let urlPath = '/' + relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
      if (urlPath.endsWith('/index')) {
        urlPath = urlPath.slice(0, -5) || '/'
      }
      
      fileList.push({
        name: path.basename(file),
        path: urlPath,
        mtime: mtime.toISOString()
      })
    }
  })
  
  return fileList
}

// 生成文件信息JSON
function generateFileInfo() {
  const docsDir = path.join(__dirname, '../docs')
  const files = getMarkdownFiles(docsDir)
  
  // 按修改时间排序
  files.sort((a, b) => new Date(b.mtime) - new Date(a.mtime))
  
  // 写入JSON文件
  const outputPath = path.join(__dirname, '../docs/.vitepress/theme/file-info.json')
  fs.writeFileSync(outputPath, JSON.stringify(files, null, 2))
  
  console.log(`生成了 ${files.length} 个文件的信息`)
  console.log('最新的5个文件:')
  files.slice(0, 5).forEach(file => {
    console.log(`- ${file.name} (${new Date(file.mtime).toLocaleDateString('zh-CN')})`)
  })
}

generateFileInfo()