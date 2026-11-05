<script setup>
useHead({ title: 'Tech Stack | Chester Besin' })

// To add a tool: add one more object here.
//   icon -> a Font Awesome class string (with its colour class), or
//   img  -> a URL to an SVG/PNG logo
const stack = [
  { name: 'HTML', desc: 'Semantic and structured markup for modern web interfaces.', icon: 'fa-brands fa-html5 text-orange-500' },
  { name: 'CSS', desc: 'Styling responsive layouts with modern animations and effects.', icon: 'fa-brands fa-css3-alt text-blue-500' },
  { name: 'JavaScript', desc: 'Creating interactive and dynamic frontend experiences.', icon: 'fa-brands fa-js text-yellow-400' },
  { name: 'Java', desc: 'Building object-oriented applications and software systems.', icon: 'fa-brands fa-java text-red-500' },
  { name: 'MySQL', desc: 'Managing relational databases and backend data structures.', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', desc: 'Rapid UI development using utility-first CSS styling.', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', desc: 'Designing modern interfaces and UI/UX prototypes.', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VS Code', desc: 'My primary development environment for coding projects.', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', desc: 'Version control and collaborative development workflows.', icon: 'fa-brands fa-git-alt text-orange-600' },
  { name: 'GitHub', desc: 'Hosting repositories and showcasing development projects.', icon: 'fa-brands fa-github text-white' }
]

useAnimateOnMount((anime) => {
  anime({ targets: '.stack-header', opacity: [0, 1], translateY: [40, 0], delay: anime.stagger(120), duration: 1000, easing: 'easeOutExpo' })
  anime({ targets: '.stack-item', opacity: [0, 1], translateY: [40, 0], scale: [0.9, 1], delay: anime.stagger(100, { start: 400 }), duration: 900, easing: 'easeOutExpo' })
}, '.stack-header, .stack-item')
</script>

<template>
  <section class="stack-section min-h-screen flex items-center px-6 lg:px-20 py-20 pb-24 lg:pb-20">
    <div class="grid-bg"></div>
    <div class="yellow-glow"></div>

    <div class="relative z-10 w-full">
      <div class="mb-16">
        <h2 class="stack-header text-yellow-400 mb-5 uppercase tracking-[0.3em] text-sm font-bold">Tech Stack</h2>
        <h1 class="stack-header text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">Languages &amp; Tools</h1>
        <p class="stack-header text-gray-400 text-lg leading-relaxed max-w-2xl">
          Technologies and tools I use for building modern, responsive, and user-friendly digital experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="tech in stack" :key="tech.name" class="stack-item stack-card">
          <div class="icon-wrap">
            <i v-if="tech.icon" :class="tech.icon"></i>
            <img v-else :src="tech.img" :alt="tech.name" />
          </div>
          <h3 class="tech-name">{{ tech.name }}</h3>
          <p class="tech-desc">{{ tech.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>