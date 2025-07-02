<script setup>
import { ref } from 'vue'

const isFullscreen = ref(false)

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

defineProps({
  src: String
})
</script>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  height: 600px;
  transition: all 0.3s ease;
}

.fullscreen {
  position: fixed !important;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999;
  background: white;
}

.fullscreen-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
  background: #007acc;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
}
</style>

<template>
  <div :class="['iframe-container', { fullscreen: isFullscreen }]">
    <button class="fullscreen-button" @click="toggleFullscreen">
      {{ isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' }}
    </button>
    <iframe 
      :src="src" 
      frameborder="0" 
      width="100%" 
      height="100%" 
      allowfullscreen>
    </iframe>
  </div>
</template>
