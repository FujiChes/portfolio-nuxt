<script setup>
useHead({ title: 'Certificates | Chester Besin' })

const asset = useAsset()

// To add a certificate: add one more object here.
// `accent: true` shows a value in yellow bold, `small: true` shows it in small text.
const certificates = [
  {
    id: 'database',
    image: asset('Images/database-cert.jpg'),
    alt: 'Database Certificate',
    icon: 'fa-database',
    status: 'Completed',
    title: 'Introduction to Modern Database Systems',
    org: 'CS403 · Saylor University',
    link: 'https://learn.saylor.org/admin/tool/certificate/index.php',
    details: [
      { label: 'Issue Date', value: 'May 9, 2026' },
      { label: 'Grade', value: '74.00%', accent: true },
      { label: 'Hours', value: '29 hrs' },
      { label: 'CEU', value: '2.9' },
      { label: 'Certificate ID', value: '9664978293CB', small: true }
    ]
  },
  {
    id: 'software',
    image: asset('Images/Software-cert.jpg'),
    alt: 'Software Engineering Certificate',
    icon: 'fa-code',
    status: 'Completed',
    title: 'Software Engineering',
    org: 'CS302 · Saylor University',
    link: 'https://learn.saylor.org/admin/tool/certificate/index.php',
    details: [
      { label: 'Issue Date', value: 'April 7, 2026' },
      { label: 'Grade', value: '74.19%', accent: true },
      { label: 'Points', value: '46 / 62' },
      { label: 'Score', value: '7.42 / 10' },
      { label: 'Certificate ID', value: '8848302218CB', small: true }
    ]
  }
]

const modal = reactive({ open: false, image: '', alt: '', title: '', link: '' })

function openModal(cert) {
  modal.image = cert.image
  modal.alt = cert.alt
  modal.title = cert.title
  modal.link = cert.link
  modal.open = true
}

useAnimateOnMount((anime) => {
  anime({ targets: '.cert-header', opacity: [0, 1], translateY: [40, 0], delay: anime.stagger(120), duration: 900, easing: 'easeOutExpo' })
  anime({ targets: '.cert-card', opacity: [0, 1], translateY: [60, 0], delay: anime.stagger(180, { start: 400 }), duration: 900, easing: 'easeOutExpo' })
}, '.cert-header, .cert-card')
</script>

<template>
  <div>
    <section id="certificates" class="min-h-screen px-6 lg:px-20 py-20 flex items-center pb-24 lg:pb-20">
      <div class="w-full">
        <h2 class="cert-header text-yellow-400 uppercase tracking-[0.25em] text-sm font-bold mb-5">Achievements</h2>
        <h1 class="cert-header text-white text-4xl lg:text-6xl font-black font-heading mb-6 leading-tight">My Certifications</h1>
        <p class="cert-header text-gray-400 text-lg max-w-2xl mb-16 leading-relaxed">
          Certifications I've earned through continuous learning and dedication. Each certification image shows an enlarged image when clicked.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="cert in certificates"
            :key="cert.id"
            class="cert-card bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden"
            @click="openModal(cert)"
          >
            <div class="shine"></div>
            <div class="overflow-hidden bg-black flex items-center justify-center p-3">
              <img :src="cert.image" :alt="cert.alt" class="cert-image">
            </div>
            <div class="p-8 flex flex-col h-full">
              <div class="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6">
                <i :class="['fa-solid', cert.icon, 'text-yellow-400 text-xl']"></i>
              </div>
              <span class="mb-5 text-[10px] uppercase tracking-[0.25em] text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 rounded-full font-bold w-fit">{{ cert.status }}</span>
              <h3 class="text-white text-2xl font-bold mb-2">{{ cert.title }}</h3>
              <p class="text-gray-500 text-sm mb-8">{{ cert.org }}</p>
              <div class="border-t border-white/5 pt-5 space-y-3 text-sm">
                <div v-for="d in cert.details" :key="d.label" class="flex justify-between">
                  <span class="text-gray-500">{{ d.label }}</span>
                  <span
                    :class="d.accent ? 'text-yellow-400 font-bold' : d.small ? 'text-white text-xs' : 'text-white'"
                  >{{ d.value }}</span>
                </div>
              </div>
              <div class="mt-8" @click.stop>
                <a
                  :href="cert.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full block text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-widest text-xs py-3 rounded-xl transition duration-300"
                >
                  View Certificate
                </a>
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
      subtitle="Click the button below to verify the certificate."
      link-label="View Verification"
      @close="modal.open = false"
    />
  </div>
</template>