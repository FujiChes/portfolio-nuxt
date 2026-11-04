<script setup>
useHead({ title: 'About | Chester Besin' })

const asset = useAsset()

const tags = ['UI/UX Design', 'Web Development', 'Creative Coding']

useAnimateOnMount((anime) => {
  anime({ targets: '.about-left', opacity: [0, 1], translateX: [-40, 0], duration: 1200, easing: 'easeOutExpo' })
  anime({ targets: '.about-right', opacity: [0, 1], translateX: [40, 0], duration: 1200, delay: 200, easing: 'easeOutExpo' })
  anime({ targets: '.about-tag', opacity: [0, 1], translateY: [20, 0], delay: anime.stagger(120, { start: 500 }), duration: 700, easing: 'easeOutExpo' })
  anime({ targets: '.info-card', opacity: [0, 1], translateY: [25, 0], delay: anime.stagger(150, { start: 700 }), duration: 800, easing: 'easeOutExpo' })
}, '.about-left, .about-right, .about-tag, .info-card')
</script>

<template>
  <section id="about" class="about-section min-h-screen flex items-center px-6 lg:px-20 py-20 pb-24 lg:pb-20">
    <div class="grid-bg"></div>
    <div class="yellow-glow"></div>

    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
      <div class="about-left max-w-3xl">
        <h2 class="text-yellow-400 mb-6 uppercase tracking-[0.3em] text-xs font-bold">Personal Profile</h2>
        <h1 class="text-5xl lg:text-7xl font-heading font-black mb-8 leading-tight text-white">
          Designing the Future,<br>
          <span class="text-white/90">Testing for Excellence</span>
        </h1>
        <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>My professional vision is centered around the digital landscape, where I find my deepest passion in the
            <span class="text-yellow-400 font-semibold">UI/UX Design</span> process. I am dedicated to creating interfaces that are not only visually striking but also deeply intuitive, ensuring that every user interaction is seamless and meaningful. I believe that thoughtful design has the power to transform how people experience technology in their everyday lives. Through continuous learning and practice, I am building the skills needed to create impactful and human-centered digital products.
          </p>
          <p>I strive to bridge the gap between aesthetics and functionality by focusing on human-centered design. I believe that a great digital product should solve real-world problems while providing a world-class visual experience. Beyond the creative side, I am also honing my expertise as a
            <span class="text-white font-semibold">software tester</span>, maintaining the philosophy that excellence is non-negotiable. My aspiration is to grow into a well-rounded professional who can both design and ensure the quality of the products I help build.
          </p>
        </div>
        <div class="tags-container mt-10 flex flex-wrap gap-3">
          <span
            v-for="tag in tags"
            :key="tag"
            class="about-tag px-5 py-3 rounded-xl border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 text-[11px] font-bold uppercase tracking-widest"
          >{{ tag }}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          <div class="info-card rounded-2xl p-5">
            <h3 class="text-yellow-400 text-2xl font-black mb-1">UI/UX</h3>
            <p class="text-gray-500 text-sm">Designing User Experiences</p>
          </div>
          <div class="info-card rounded-2xl p-5">
            <h3 class="text-yellow-400 text-2xl font-black mb-1">QA</h3>
            <p class="text-gray-500 text-sm">Software Testing Focus</p>
          </div>
        </div>
        <div class="bottom-line mt-16 flex items-center gap-4 border-t border-white/5 pt-8">
          <div class="h-[1px] w-12 bg-yellow-400"></div>
          <p class="text-xs uppercase tracking-widest text-gray-500">Imus, Cavite • Future UI/UX &amp; QA Professional</p>
        </div>
      </div>

      <div class="about-right hidden lg:block relative">
        <div class="image-wrapper">
          <div class="image-card aspect-square">
            <img
              :src="asset('Images/profile3.jpg')"
              alt="Chester Besin"
              class="w-full h-full object-cover"
              style="object-position: center 50%;"
            />
          </div>
          <div class="floating-badge">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                <i class="fa-solid fa-lightbulb text-yellow-400 text-xl"></i>
              </div>
              <div>
                <h3 class="text-white font-bold text-lg">Creative Thinker</h3>
                <p class="text-gray-500 text-sm">Building modern digital experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>