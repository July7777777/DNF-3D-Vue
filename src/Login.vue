<script setup >
import { ref } from "vue"
import src1 from './assets/img/base/1.jpg'
import src2 from './assets/img/base/2.jpg'
import src3 from './assets/img/base/3.jpg'
import src4 from './assets/img/base/4.jpg'
import src5 from './assets/img/base/5.jpg'
import src6 from './assets/img/base/6.jpg'
import Music from "./components/common/Music.vue"
import character from './assets/bgm/base/character.mp3'
import pursuit from './assets/bgm/base/pursuit.ogg'

// 添加背景
document.getElementById('app').setAttribute("class", "fullpage")


let is3D = ref(false)
let is2D = ref(1)
let list = ref([
  { id: 1, src: src1 },
  { id: 2, src: src2 },
  { id: 3, src: src3 },
  { id: 4, src: src4 },
  { id: 5, src: src5 },
  { id: 6, src: src6 },
])
let timer = setInterval(() => {
  is2D.value++
  is2D.value = is2D.value == 7 ? 1 : is2D.value
}, 6000);
setTimeout(() => {
  is3D.value = true
}, 36000);
// console.log(document.getElementById('app'))
defineProps({

})
</script>

<template>
  <div id="fullPage">
    <div v-if="!is3D" class="twoD">
      <img v-for="item in list" :key="item.id" v-show="is2D==item.id||is3D" :src="item.src">
    </div>
    <!--3维相册旋转 参考https://blog.csdn.net/weixin_39942474/article/details/111177986 -->
    <div v-else class="threeDBox">
      <div id="threeD" :class="is3D?'threeD':''">
        <img v-for="item in list" :key="item.id" :src="item.src">
        <img id="magic" src="/src/assets/img/base/magic.png" alt="">
        
      </div>
    </div>
  </div>
  <Music :musicSrc='is3D?character:character'/>
</template>
<style  scoped >

#threeD {
  width: 280px;
  height: 400px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.threeD {
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg);
  animation: go 45s linear infinite;
}

.twoD {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: -10vh; */

}

#threeD img {
  width: 695px;
  /* height: 350px; */
  position: absolute;
  left: 0;
  top: 0;
}
#threeD #magic{
  width: 600px;
  height: 600px;
  top: 400px;
  transform-style: preserve-3d;
  transform: rotateX(90deg) rotateY(0deg);
  border-radius: 50%;
  animation: easeInOut 30s ease 1;

  box-shadow: 0px 0px 110px 77px rgb(59, 165, 246);
}
#threeD img:nth-child(1) {
  transform: rotateY(0deg) translateZ(600px);
}

#threeD img:nth-child(2) {
  transform: rotateY(60deg) translateZ(600px);
}

#threeD img:nth-child(3) {
  transform: rotateY(120deg) translateZ(600px);
}

#threeD img:nth-child(4) {
  transform: rotateY(180deg) translateZ(600px);
}

#threeD img:nth-child(5) {
  transform: rotateY(240deg) translateZ(600px);
}

#threeD img:nth-child(6) {
  transform: rotateY(300deg) translateZ(600px);
}


@keyframes go {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  25% {
    transform: rotateX(20deg) rotateY(180deg);
  }

  50% {
    transform: rotateX(0deg) rotateY(360deg);
  }

  75% {
    transform: rotateX(-20deg) rotateY(540deg);
  }

  100% {
    transform: rotateX(0deg) rotateY(720deg);
  }
}

.twoD img {
  position: relative;
  animation: twoD 6s ease 1;
}

@keyframes twoD {
  0% {
    opacity: 0;
    scale: 0.9;
    top: 0
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    top: -20%
  }
}

.threeDBox {
  animation: easeInOut 6s ease 1;
}

@keyframes easeInOut {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>


