<script setup >
defineProps({
  loadingImg:'',
  loadingState:Number,
  title:String,//描述
  reminder:String,//提醒提示
})
</script>

<template>
  <div>
    <div  class="w-screen h-screen absolute bg-black text-white flex justify-center items-center">
      loading, please wait {{ loadingState.toFixed(2) }} %
      <div>{{title}}</div>
      <div>提示:{{reminder}}</div>
      <!-- <img :src="LoadingImg" alt=""> -->
    </div>
  </div>
</template>
