<script setup>
import { ref } from "vue"
let src = ref()
let listID = ref(0)
const props = defineProps({
  loadingImg: '',
  musicSrc: '',
  musicList: Array,
})

// 音乐 
const Music = ref()
let MusicState = ref(false)
// 点击播放事件

let play = () => {
  // 音乐状态aaa
  if (Music.value.paused) {
    Music.value.play()
    MusicState.value = true
  } else {
    Music.value.pause()
    MusicState.value = false
  }
}
// 音乐 列表
// 生成随机数
function randomNumber(max) {
  return Math.round(Math.random() * (max || 1));
}

function audioFinished() {
  console.log(props.musicList)
  if (props.musicList && props.musicList.length > 1) {
    console.log(1111)
    src.value = props.musicList[randomNumber(props.musicList.length-1)]
  } else {
    // 这里可以加个判断 如果有值就不赋值
    src.value = props.musicSrc && props.musicSrc
  }
}

audioFinished()


</script>

<template>
  <div>
    <div id="play" :class="MusicState?'run':'shake'" v-on:click="play">
      <img src="/src/assets/img/base/play2.png" alt="">
    </div>
    <audio ref="Music" autoplay loop :src='src' @ended="audioFinished"></audio>
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
  cursor: pointer
}

img {
  width: 100%;
  height: 100%;
}

.shake {
  animation: shake 1.5s ease infinite;
}

.run {
  animation: run 5s linear infinite;
}

@keyframes shake {

  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  0% {
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
