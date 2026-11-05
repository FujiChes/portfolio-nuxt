<script setup>
useHead({ title: 'Projects | Chester Besin' })

const asset = useAsset()

// To add a project: add one more object here.
//   image   -> picture shown on the card
//   preview -> larger picture shown when the card is clicked (falls back to `image`)
//   link    -> optional "View Project" button in the preview (leave '' for none)
const projects = [
  {
    id: 'student-handbook',
    image: asset('Images/photo1.jpg'),
    preview: asset('Images/student-handbook.png'),
    alt: 'Student Handbook Cover Design',
    icon: 'fa-paintbrush',
    tag: 'UI/UX Design',
    title: 'Student Handbook Cover Design',
    org: 'Charis Christian Institute · Design Suggestion',
    link: '',
    details: [
      { label: 'Type', value: 'Print & UI Design' },
      { label: 'Tools', value: 'Figma' },
      { label: 'Colors', value: 'Maroon & Bright Yellow' },
      { label: 'Focus', value: 'Typography & Layout' }
    ]
  }
]

const modal = reactive({ open: false, image: '', alt: '', title: '', link: '' })

function openModal(project) {
  modal.image = project.preview || project.image
  modal.alt = project.alt
  modal.title = project.title
  modal.link = project.link
  modal.open = true
}

useAnimateOnMount((anime) => {
  anime({ targets: '.proj-header', opacity: [0, 1], translateY: [40, 0], delay: anime.stagger(120), duration: 900, easing: 'easeOutExpo' })
  anime({ targets: '.proj-card', opacity: [0, 1], translateY: [60, 0], scale: [0.95, 1], delay: anime.stagger(150, { start: 400 }), duration: 900, easing: 'easeOutExpo' })
}, '.proj-header, .proj-card')
</script>

<template>
  <div>
    <section class="proj-section min-h-screen px-6 lg:px-20 py-20 pb-24 lg:pb-20 relative overflow-hidden">
      <div class="grid-bg"></div>
      <div class="yellow-glow"></div>

      <div class="relative z-10 w-full">
        <h2 class="proj-header text-yellow-400 uppercase tracking-[0.25em] text-sm font-bold mb-5">Work</h2>
        <h1 class="proj-header text-white text-4xl lg:text-6xl font-black font-heading mb-6 leading-tight">My Projects</h1>
        <p class="proj-header text-gray-400 text-lg max-w-2xl mb-16 leading-relaxed">
          A collection of projects I've designed and built. Click any card to view an enlarged preview.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="proj-card bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden cursor-pointer"
            @click="openModal(project)"
          >
            <div class="shine"></div>
            <div class="overflow-hidden bg-black flex items-center justify-center p-3">
              <img :src="project.image" :alt="project.alt" class="cert-image">
            </div>
            <div class="p-8 flex flex-col h-full">
              <div class="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6">
                <i :class="['fa-solid', project.icon, 'text-yellow-400 text-xl']"></i>
              </div>
              <span class="mb-5 text-[10px] uppercase tracking-[0.25em] text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 rounded-full font-bold w-fit">{{ project.tag }}</span>
              <h3 class="text-white text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-500 text-sm mb-8">{{ project.org }}</p>
              <div class="border-t border-white/5 pt-5 space-y-3 text-sm">
                <div v-for="d in project.details" :key="d.label" class="flex justify-between">
                  <span class="text-gray-500">{{ d.label }}</span>
                  <span class="text-white">{{ d.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ImageModal
      :open="modal.open"
      :image="modal.image"
      :alt="modal.alt"
      :title="modal.title"
      :link="modal.link"
      subtitle="Project preview."
      link-label="View Project"
      @close="modal.open = false"
    />
  </div>
</template>