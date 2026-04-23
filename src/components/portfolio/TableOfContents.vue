<template>
  <nav class="toc-sidebar fixed right-6 top-32 z-40 hidden lg:block">
    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4 w-56">
      <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Contents</h4>
      <ul class="space-y-2">
        <li v-for="(item, index) in items" :key="index">
          <a 
            :href="item.href" 
            class="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1.5 rounded-lg transition-all duration-200"
            :class="{ 'text-blue-600 bg-blue-50 font-medium': activeId === item.id }"
            @click.prevent="scrollToSection(item.id)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const activeId = ref('')

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = props.items.map(item => document.getElementById(item.id)).filter(Boolean)
  
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120
    if (window.pageYOffset >= sectionTop) {
      current = section.id
    }
  })
  
  activeId.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>