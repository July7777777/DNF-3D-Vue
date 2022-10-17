<script setup lang="ts">
import { World, Model, ThirdPersonCamera, useKeyboard, useLoop, Skybox,Dummy } from "lingo3d-vue"
import { ref } from "vue"
import Music from "../../components/common/Music.vue";

const characterRef = ref()
const key = useKeyboard()
const running = ref(false)

useLoop(() => {
  if (RegExp(/w/).test(key.value)) {
    running.value = true
    characterRef.value.moveForward(-6)
    
  } else if(RegExp(/s/).test(key.value)){
    running.value = true
    characterRef.value.moveForward(6)
  } else {
    running.value = false
  }
  
  if (RegExp(/a/).test(key.value)) {
    running.value = true
    characterRef.value.moveRight(6)
  } else if(RegExp(/d/).test(key.value)){
    running.value = true
    characterRef.value.moveRight(-6)
  }
  
})
</script> 

<template>
  <Music musicSrc='/src/assets/bgm/town/forest_town.ogg' />
  <World>
    <Model src="bbb.fbx" :scale="1" physics="map" :y="-50" :x='-1700'/>
    <Model src="fairy.glb" :scale="20" physics="map" />
    <ThirdPersonCamera active mouseControl >
      <Dummy
        ref="characterRef"
        src="person.glb"
        :y="200"
        :z="-300"
        strideMode="free"
        :animations="{ idleAnimation: 'idle.fbx', runningAnimation: 'running.fbx' }"
        physics="character"
        :animation="running ? 'runningAnimation' : 'idleAnimation'"
      />
    </ThirdPersonCamera>
    <Skybox texture="skybox.jpg" />
  </World>
</template>
