<script setup>
const props = defineProps({
  open: { type: Boolean, default: false },
  image: { type: String, default: '' },
  alt: { type: String, default: 'Preview' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  link: { type: String, default: '' },
  linkLabel: { type: String, default: 'View' }
})
const emit = defineEmits(['close'])

const box = ref(null)

// Same pop-in animation as the old script.js
watch(() => props.open, async (isOpen) => {
  if (!isOpen) return
  await nextTick()
  try {
    const anime = (await import('animejs/lib/anime.es.js')).default
    anime({ targets: box.value, opacity: [0, 1], scale: [0.9, 1], duration: 400, easing: 'easeOutExpo' })
  } catch (e) {
    // animation is cosmetic; the modal still works without it
  }
})

function onKey(e) {
  if (e.key === 'Escape' && props.open) emit('close')
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <!-- Clicking the dark backdrop closes it, clicking inside the box does not -->
  <div id="cert-modal" :class="{ open }" @click.self="emit('close')">
    <div ref="box" class="modal-box">
      <button class="close-btn" aria-label="Close preview" @click="emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <img v-if="image" :src="image" :alt="alt">
      <div class="modal-content">
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 class="text-white text-xl font-bold">{{ title }}</h3>
            <p class="text-gray-500 text-sm mt-1">{{ subtitle }}</p>
          </div>
          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition px-4 py-2 rounded-xl text-sm"
          >
            {{ linkLabel }} <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>