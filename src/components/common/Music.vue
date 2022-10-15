<script setup>
import { ref, watchEffect } from "vue"


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
// 生成随机数
//  Math.round(Math.random()*musicSrc.length);

defineProps({
  loadingImg:'',
  musicSrc:'',
  musicSrc:Array,
})
</script>

<template>
  <div>
    <div id="play" :class="MusicState?'run':'shake'" v-on:click="play">
      <img src="/src/assets/img/base/play2.png" alt="">
    </div>
    <audio ref="Music" autoplay loop :src='musicSrc'></audio>
  </div>
</template>

<style scoped>
/* 傅里叶变换音频可视化_HTML5音频可视化频谱跳动https://blog.csdn.net/weixin_39938724/article/details/111730188   先码住，以后做*/
#play {
  margin: 20px;
  border-radius: 50%;
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
  0% {
    transform: rotate(-360deg);
  }
}
</style>
