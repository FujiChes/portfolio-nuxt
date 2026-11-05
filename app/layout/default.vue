<template>
  <div class="flex flex-col lg:flex-row bg-[#0a0a0a]">
    <AppSidebar />

    <main class="w-full lg:ml-20 min-h-screen">
      <slot />
    </main>

    <CursorGlow />
  </div>
</template>