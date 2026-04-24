<template>
  <div class="data-stat-card" :class="[variant, { 'interactive': interactive }]" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="stat-value">
      <span class="value" :class="{ 'counting': animating }">{{ displayValue }}</span>
      <span v-if="showSymbol" class="symbol">%</span>
    </div>
    <div class="stat-label">{{ label }}</div>
    <div v-if="subtitle" class="stat-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'blue' // blue, orange, purple, green, red, gray
  },
  showSymbol: {
    type: Boolean,
    default: true
  },
  interactive: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 1500
  }
})

const displayValue = ref(0)
const animating = ref(false)
const hovered = ref(false)

const animateValue = () => {
  animating.value = true
  const startTime = Date.now()
  const startValue = 0
  const endValue = props.value
  const duration = props.duration
  
  const runAnimation = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(startValue + (endValue - startValue) * eased)
    
    if (progress < 1) {
      requestAnimationFrame(runAnimation)
    } else {
      animating.value = false
    }
  }
  
  requestAnimationFrame(runAnimation)
}

onMounted(() => {
  setTimeout(animateValue, 300)
})

watch(() => props.value, () => {
  animateValue()
})
</script>

<style scoped>
.data-stat-card {
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.data-stat-card.interactive {
  cursor: pointer;
}

.data-stat-card.interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.symbol {
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.7;
}

.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.9;
  line-height: 1.4;
}

.stat-subtitle {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.25rem;
}

/* Variants */
.data-stat-card.blue {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border: 1px solid #93c5fd;
}
.data-stat-card.blue .stat-value { color: #1d4ed8; }
.data-stat-card.blue .stat-label { color: #1e40af; }

.data-stat-card.orange {
  background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
  border: 1px solid #fdba74;
}
.data-stat-card.orange .stat-value { color: #c2410c; }
.data-stat-card.orange .stat-label { color: #9a3412; }

.data-stat-card.purple {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border: 1px solid #c4b5fd;
}
.data-stat-card.purple .stat-value { color: #7c3aed; }
.data-stat-card.purple .stat-label { color: #6d28d9; }

.data-stat-card.green {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border: 1px solid #86efac;
}
.data-stat-card.green .stat-value { color: #15803d; }
.data-stat-card.green .stat-label { color: #166534; }

.data-stat-card.red {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #fca5a5;
}
.data-stat-card.red .stat-value { color: #b91c1c; }
.data-stat-card.red .stat-label { color: #991b1b; }

.data-stat-card.gray {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border: 1px solid #d1d5db;
}
.data-stat-card.gray .stat-value { color: #374151; }
.data-stat-card.gray .stat-label { color: #4b5563; }
</style>