
import {
  onMounted,
  onBeforeUnmount,
  nextTick
} from 'vue'

export function useAnimateOnMount(callback, selector = '') {
  let animeApi = null
  let cancelled = false

  onMounted(async () => {
    await nextTick()

    if (cancelled) return

    try {
      // Load Anime.js only in the browser.
      const module = await import('animejs/lib/anime.es.js')

      animeApi = module.default ?? module

      if (typeof animeApi !== 'function') {
        throw new TypeError('Anime.js failed to initialize.')
      }

      if (cancelled) return

      // Run the animation callback.
      callback(animeApi)

    } catch (error) {
      console.error('Animation initialization failed:', error)

      // Keep elements visible if animation fails.
      if (selector) {
        document.querySelectorAll(selector).forEach((element) => {
          element.style.opacity = '1'
          element.style.transform = 'none'
        })
      }
    }
  })

  onBeforeUnmount(() => {
    cancelled = true

    if (animeApi && selector) {
      animeApi.remove(selector)
    }
  })
}
