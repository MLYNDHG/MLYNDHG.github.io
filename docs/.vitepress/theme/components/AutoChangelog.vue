<script setup>
import { ref, onMounted } from 'vue'

// 定义文件列表
const files = ref([])

// 获取文件修改时间的函数
const getFileStats = async () => {
  try {
    // 动态导入生成的文件信息
    const fileInfo = await import('../file-info.json')
    files.value = fileInfo.default
  } catch (error) {
    console.error('获取文件信息失败:', error)
  }
}
  
onMounted(() => {
  getFileStats()
})
</script>

<template>
  <div class="auto-changelog">
    <h2>最新更新</h2>
    <div class="changelog-list">
      <div 
        v-for="(file, index) in files.slice(0, 5)" 
        :key="index" 
        class="changelog-item"
      >
        <div class="changelog-date">{{ new Date(file.mtime).toLocaleDateString('zh-CN') }}</div>
        <div class="changelog-content">
          <a :href="file.path">{{ file.name }}</a>
          <span class="changelog-description">文件已更新</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auto-changelog {
  margin: 2rem 0;
}

.changelog-list {
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 1rem;
}

.changelog-item {
  margin-bottom: 1.5rem;
  position: relative;
}

.changelog-item:before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--vp-c-brand);
}

.changelog-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.changelog-content {
  display: flex;
  flex-direction: column;
}

.changelog-content a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.changelog-content a:hover {
  text-decoration: underline;
}

.changelog-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
}
</style>