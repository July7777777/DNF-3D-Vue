<script setup>
import { usePreload } from "lingo3d-vue"
import { ref, watchEffect } from "vue"
import Login from "./Login.vue"





// 加载
const progress = usePreload(["fairy.glb", "idle.fbx", "person.glb", "running.fbx", "skybox.jpg"], "21.2mb")
const displayLoading = ref(true)
const LoadingTitle = ref('加载中loading...')
const reminder = ref('注意：本项目部分资源（音频，图片，3D模型等）来自互联网；仅供学习交流使用，请于下载后24h内删除，谢谢！')
// 加载

watchEffect(() => {
  if (progress.value > 99) {
    // displayLoading.value = false
  }
})

</script>

<template>
  <div>
    <Login />
  </div>
</template>

<style scoped></style>
