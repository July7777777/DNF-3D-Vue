<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { World, Cube, Model, OrbitCamera, useLoop, ThirdPersonCamera, Skybox, useKeyboard } from "lingo3d-vue"

import { ref } from "vue"

const characterRef = ref()
const key = useKeyboard()
const running = ref(false)

useLoop(() => {
  if (key.value === "w") {
    running.value = true
    characterRef.value.moveForward(-6)
  } else {
    running.value = false
  }
})
</script>

<template>
  <div>
    <World>
      <Skybox texture='skybox.jpg' />
      <Model src='Grassland.glb' scale='280' physics='map' />
      <ThirdPersonCamera active mouseControl>
        <Model
          ref='characterRef'
          src='girl.fbx'
          :animations="{ idle:'standingIdle.fbx', walking:'Running.fbx' }"
          :animation="running ? 'walking' : 'idle'"
          physics='character'
        /> 
      </ThirdPersonCamera>
    </World>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>

</style>
