<script setup>
useHead({ title: 'Chester Besin | Home' })

const asset = useAsset()

useAnimateOnMount((anime) => {
  anime({ targets: '.profile-wrapper', opacity: [0, 1], scale: [0.8, 1], duration: 1400, easing: 'easeOutExpo' })
  anime({ targets: '.hero-text > *', opacity: [0, 1], translateY: [40, 0], delay: anime.stagger(180, { start: 300 }), duration: 1200, easing: 'easeOutExpo' })
}, '.profile-wrapper, .hero-text > *')
</script>

<template>
  <section class="section-fade min-h-screen flex items-center px-6 lg:px-20 hero-bg w-full pb-20 lg:pb-0">
    <div class="hero-overlay"></div>
    <div class="yellow-glow"></div>
    <div class="grid-bg"></div>

    <div class="hero-container relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">
      <div class="profile-wrapper">
        <div class="profile-ring"></div>
        <img
          :src="asset('Images/profile4.jpg')"
          alt="Chester Besin"
          class="profile-image w-52 h-52 lg:w-72 lg:h-72 rounded-full border-4 border-yellow-400 aspect-square object-cover"
        />
      </div>

      <div class="hero-text max-w-3xl">
        <p class="text-yellow-400 uppercase tracking-[0.35em] text-xs mb-5 font-bold">WELCOME TO MY PORTFOLIO</p>
        <h2 class="text-3xl lg:text-4xl text-gray-300 mb-5 font-light">Hi, I am</h2>
        <h1 class="font-heading text-6xl lg:text-[110px] font-black leading-none text-white mb-8">
          CHESTER<br><span class="text-yellow-400">BESIN</span>
        </h1>
        <p class="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          passionate about frontend development, UI/UX design, modern web experiences, and creating visually engaging digital projects.
        </p>

        <div class="flex flex-wrap gap-5 mb-12 justify-center lg:justify-start">
          <div class="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md">
            <h3 class="text-yellow-400 text-2xl font-black">2+</h3>
            <p class="text-gray-400 text-sm">Certificates</p>
          </div>
          <div class="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md">
            <h3 class="text-yellow-400 text-2xl font-black">UI/UX</h3>
            <p class="text-gray-400 text-sm">Design Focus</p>
          </div>
        </div>

        <div class="hero-buttons flex flex-wrap gap-5 justify-center lg:justify-start">
          <NuxtLink
            to="/about"
            class="hero-btn px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 transition duration-300 uppercase tracking-[0.2em] text-xs rounded-xl font-bold"
          >
            Read About Me
          </NuxtLink>
          <NuxtLink
            to="/stack"
            class="px-8 py-4 border border-white/10 text-white hover:border-yellow-400 hover:text-yellow-400 transition duration-300 uppercase tracking-[0.2em] text-xs rounded-xl"
          >
            View Tech Stack
          </NuxtLink>
        </div>

        <div class="socials flex gap-5 mt-12 justify-center lg:justify-start">
          <a
            href="https://www.facebook.com/chester.besin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="social-btn w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-400"
          >
            <i class="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="https://github.com/FujiChes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="social-btn w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-400"
          >
            <i class="fab fa-github text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>