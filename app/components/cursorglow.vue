<script setup>
const glow = ref(null)
const visible = ref(false)

function onMove(e) {
  if (!glow.value) return
  visible.value = true
  glow.value.style.left = e.clientX + 'px'
  glow.value.style.top = e.clientY + 'px'
}

onMounted(() => document.addEventListener('mousemove', onMove))
onBeforeUnmount(() => document.removeEventListener('mousemove', onMove))
</script>

<template>
  <!-- Hidden until the mouse first moves (so it never shows on touch screens) -->
  <div ref="glow" class="cursor-glow" :style="{ display: visible ? 'block' : 'none' }"></div>
</template>