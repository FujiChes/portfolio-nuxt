
<template>
  <div>
    <!-- SIDEBAR NAVIGATION -->
    <nav class="sidebar fixed bottom-0 left-0 w-full h-16 lg:h-screen lg:w-20 lg:top-0 border-t lg:border-r lg:border-t-0 border-white/10 bg-[#050505] flex lg:flex-col items-center z-50 transition-all duration-300 hover:lg:w-64">

      <div class="hidden lg:block px-6 my-10 text-yellow-400 font-black text-3xl">
        CB
      </div>

      <div class="flex lg:flex-col justify-around lg:justify-start lg:space-y-4 w-full px-2">

        <NuxtLink to="/" class="nav-btn flex items-center gap-4 p-3 rounded-xl w-full text-yellow-400">
          <i class="fa-solid fa-house min-w-[20px] text-center"></i>
          <span class="sidebar-text font-medium">Home</span>
        </NuxtLink>

        <NuxtLink to="/about" class="nav-btn text-gray-500 hover:text-yellow-400 flex items-center gap-4 p-3 rounded-xl w-full">
          <i class="fa-solid fa-user min-w-[20px] text-center"></i>
          <span class="sidebar-text font-medium">About</span>
        </NuxtLink>

        <NuxtLink to="/stack" class="nav-btn text-gray-500 hover:text-yellow-400 flex items-center gap-4 p-3 rounded-xl w-full">
          <i class="fa-solid fa-code min-w-[20px] text-center"></i>
          <span class="sidebar-text font-medium">Tech Stack</span>
        </NuxtLink>

        <NuxtLink to="/certificates" class="nav-btn text-gray-500 hover:text-yellow-400 flex items-center gap-4 p-3 rounded-xl w-full">
          <i class="fa-solid fa-certificate min-w-[20px] text-center"></i>
          <span class="sidebar-text font-medium">Certificates</span>
        </NuxtLink>

        <NuxtLink to="/projects" class="nav-btn text-gray-500 hover:text-yellow-400 flex items-center gap-4 p-3 rounded-xl w-full">
          <i class="fa-solid fa-diagram-project min-w-[20px] text-center"></i>
          <span class="sidebar-text font-medium">Projects</span>
        </NuxtLink>

      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <main class="lg:ml-20 pb-16 lg:pb-0 min-h-screen">
      <NuxtPage />
    </main>

    <NuxtRouteAnnouncer />
  </div>
</template>
