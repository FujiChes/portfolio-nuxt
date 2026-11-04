// Runs anime.js animations once the page is on screen (client side only).
//
//   useAnimateOnMount((anime) => { anime({ targets: '.x', opacity: [0, 1] }) }, '.x')
//
// The second argument is a selector for the elements that start hidden in CSS.
// If animejs fails to load for any reason, those elements are revealed instead,
// so the page never stays blank (same safety net the old script.js had).
export function useAnimateOnMount(run, hiddenSelector) {
  onMounted(async () => {
    try {
      const anime = (await import('animejs/lib/anime.es.js')).default
      run(anime)
    } catch (e) {
      console.error('Animation failed to start', e)
      document.querySelectorAll(hiddenSelector).forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    }
  })
}