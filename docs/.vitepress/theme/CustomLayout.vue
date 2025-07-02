<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout: DefaultLayout } = DefaultTheme

import { useRouter } from 'vitepress'
import { onMounted, ref } from 'vue'

const show = ref(false)
const router = useRouter()

const NEW_LESSON_URL = "/bn/linked-list"  // Unique ID or URL for the new lesson

onMounted(() => {
  const seenLesson = localStorage.getItem('seenNewLesson')
  if (seenLesson !== NEW_LESSON_URL) {
    show.value = true
  }
})

function dismiss() {
  show.value = false
  localStorage.setItem('seenNewLesson', NEW_LESSON_URL)
}

function goToNewLesson(){
  dismiss()
  router.push(NEW_LESSON_URL)
}
</script>


<template>
  <DefaultLayout />

  <transition name="popup-fade">
    <div v-if="show" class="popup-wrapper" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div class="popup">
        <button class="close-button" @click="dismiss" aria-label="Dismiss popup">✖</button>
        <div class="popup-content">
          <h3 id="popup-title">🎉 Fresh Content Alert!</h3>
          <p>The <strong style="color: #ff5e62;">Linked List</strong> chapter is live! Click to start your journey.</p>
          <button class="cta-button" @click="goToNewLesson">👉 Explore Now</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.popup-wrapper {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 0 16px;
}

.popup {
  background: linear-gradient(135deg, #ffffff, #f0f4ff);
  color: #1a1a1a;
  padding: 24px 28px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  min-width: 320px;
  max-width: 500px;
  text-align: center;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #e0e6f0;
}

.popup h3 {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 600;
  color: #222;
}

.popup p {
  margin: 0 0 20px;
  font-size: 16px;
  color: #555;
}

.cta-button {
  background: -webkit-linear-gradient(120deg, #ff9966, #ff5e62);
  color: #fff;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.cta-button:hover {
  background-color: #3d7cd9;
  transform: translateY(-1px);
}
.cta-button:focus {
  outline: 2px solid #91c4ff;
  outline-offset: 2px;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #f2f2f2;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #444;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.close-button:hover {
  background-color: #ddd;
  transform: rotate(90deg);
}

/* Animation */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.4s ease;
}
.popup-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, 40px);
}
.popup-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 40px);
}
</style>
