<script setup>
import { usePreload } from "lingo3d-vue"
import { ref, watchEffect } from "vue"
import Loading from "./components/common/Loading.vue"
import Game from "./components/Game.vue"
import music from './assets/bgm/base/character.mp3'
import Login from "./Login.vue"


// 音乐 
const Music = ref()
let MusicState = ref(false)
// 点击播放事件

let play = () => {
  // 音乐状态aaa
  if(Music.value.paused){
    Music.value.play()
    MusicState.value=true
  }else{
    Music.value.pause()
    MusicState.value=false
  }
}
// 音乐 


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
    <div id="play" :class="MusicState?'run':'shake'" v-on:click="play">
      <img src="./assets/img/base/play2.png" alt="">
    </div>
    <!-- <div v-if="displayLoading" class="w-screen h-screen absolute bg-black text-white flex justify-center items-center">
      <Loading :loadingState='progress' :title='LoadingTitle' :reminder='reminder' />
    </div> -->
    <!-- <Game v-else /> -->
    <audio ref="Music" autoplay loop :src='music'></audio>
  </div>
</template>

<style scoped>
/* 傅里叶变换音频可视化_HTML5音频可视化频谱跳动https://blog.csdn.net/weixin_39938724/article/details/111730188   先码住，以后做*/
#play {
  margin: 20px;
  position: fixed;
  right: 0px;
  width: 30px;
  height: 30px;
  cursor:pointer
}

img {
  width: 100%;
  height: 100%;
}
.shake{
  animation: shake 1.5s ease infinite;
}
.run{
  animation: run 5s linear  infinite;
}
@keyframes shake {

  from,
  to {
    transform: translate3d(0, 0, 0);
  }
  0%{
    transform: translate3d(0, 0, 0);
  }
  10%,
  30% {
    transform: translate3d(-3px, 0, 0);
  }

  20%,
  40% {
    transform: translate3d(3px, 0, 0);
  }
}

@keyframes run {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
