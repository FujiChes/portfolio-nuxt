<script setup>
// Add or reorder pages here. `to` is the Nuxt route (the file name inside app/pages).
const items = [
  { to: '/', label: 'Home', icon: 'fa-house' },
  { to: '/about', label: 'About', icon: 'fa-user' },
  { to: '/stack', label: 'Tech Stack', icon: 'fa-code' },
  { to: '/certificates', label: 'Certificates', icon: 'fa-certificate' },
  { to: '/projects', label: 'Projects', icon: 'fa-diagram-project' }
]

const route = useRoute()

// Ignore a trailing slash so "/about/" still highlights "About"
const isActive = (to) => (route.path.replace(/\/+$/, '') || '/') === to
</script>

<template>
  <nav class="sidebar fixed bottom-0 left-0 w-full h-16 lg:h-screen lg:w-20 lg:top-0 border-t lg:border-r lg:border-t-0 border-white/10 bg-[#050505] flex lg:flex-col items-center z-50 transition-all duration-300 hover:lg:w-64">
    <div class="hidden lg:block px-6 my-10 text-yellow-400 font-black text-3xl">CB</div>
    <div class="flex lg:flex-col justify-around lg:justify-start space-y-0 lg:space-y-4 w-full px-2">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="nav-btn flex items-center gap-4 p-3 rounded-xl w-full"
        :class="isActive(item.to) ? 'active text-yellow-400 bg-white/5' : 'text-gray-500 hover:text-yellow-400'"
      >
        <i :class="['fa-solid', item.icon, 'min-w-[20px] text-center']"></i>
        <span class="sidebar-text font-medium">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>