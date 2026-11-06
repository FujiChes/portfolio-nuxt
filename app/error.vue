
<script setup>
defineProps({
  error: Object
})

useHead({
  title: '404 | Page Not Found - Chester Besin'
})

const goHome = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden px-6">

    <!-- Background grid -->
    <div class="absolute inset-0 opacity-20 pointer-events-none"
      style="background-image: linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <!-- Yellow glow -->
    <div class="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-[130px] -top-40 -left-40"></div>
    <div class="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-[130px] -bottom-40 -right-40"></div>

    <div class="relative z-10 text-center max-w-2xl">

      <p class="text-yellow-400 text-xs font-bold uppercase tracking-[0.4em] mb-8">
        CHESTER BESIN · PORTFOLIO
      </p>

      <h1 class="text-[140px] md:text-[220px] font-black leading-none tracking-tighter text-white">
        4<span class="text-yellow-400">0</span>4
      </h1>

      <h2 class="text-white text-3xl md:text-4xl font-bold mt-6 mb-5">
        Oops! Page Not Found.
      </h2>

      <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
        Looks like you've wandered into an unknown space.
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <button
        @click="goHome"
        class="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20"
      >
        <i class="fa-solid fa-house mr-2"></i>
        Back to Home
      </button>

      <div class="mt-20 border-t border-white/10 pt-7">
        <p class="text-gray-600 text-xs uppercase tracking-widest">
          © 2026 Chester Besin. All Rights Reserved.
        </p>
      </div>

    </div>
  </main>
</template>
