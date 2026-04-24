<template>
  <div class="chart-container">
    <div class="pie-chart" :class="{ 'donut': donut }" :style="chartStyle">
      <div class="center-label" v-if="donut && showCenter">
        <span class="center-value">{{ total }}</span>
        <span class="center-suffix">{{ unit }}</span>
      </div>
    </div>
    <div class="chart-legend">
      <div 
        v-for="(item, index) in legendData" 
        :key="index" 
        class="legend-item"
        :class="{ 'interactive': interactive }"
        @mouseenter="highlightIndex = index"
        @mouseleave="highlightIndex = null"
      >
        <span class="legend-color" :style="{ background: item.color }"></span>
        <span class="legend-label">{{ item.label }}</span>
        <span class="legend-value" :class="{ 'highlighted': highlightIndex === index }">{{ item.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  donut: {
    type: Boolean,
    default: true
  },
  unit: {
    type: String,
    default: ''
  },
  showCenter: {
    type: Boolean,
    default: true
  },
  interactive: {
    type: Boolean,
    default: true
  },
  size: {
    type: Number,
    default: 200
  },
  thickness: {
    type: Number,
    default: 0
  }
})

const highlightIndex = ref(null)

const colors = ['#3b82f6', '#f97316', '#8b5cf6', '#22c55e', '#ef4444', '#64748b', '#ec4899', '#14b8a6']

const legendData = computed(() => {
  return props.data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length]
  }))
})

const chartStyle = computed(() => {
  const gradients = legendData.value.map((item, index) => {
    const startAngle = props.data.slice(0, index).reduce((sum, d) => sum + d.value, 0) * 3.6
    const endAngle = startAngle + item.value * 3.6
    const midAngle = (startAngle + endAngle) / 2
    const color = item.color
    return `${color} ${startAngle}deg ${endAngle}deg`
  }).join(', ')
  
  const inset = props.donut 
    ? (props.thickness > 0 ? props.thickness : Math.round(props.size * 0.22))
    : 0
  
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    background: `conic-gradient(${gradients})`,
    boxShadow: props.donut ? `inset 0 0 0 ${inset}px white` : 'none'
  }
})

const total = computed(() => {
  return props.data.reduce((sum, item) => sum + item.value, 0)
})
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.pie-chart {
  border-radius: 50%;
  position: relative;
  transition: transform 0.3s ease;
}

.pie-chart:hover {
  transform: scale(1.05);
}

.center-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-value {
  font-size: 2rem;
  font-weight: 800;
  color: #374151;
  line-height: 1;
}

.center-suffix {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.chart-legend {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.legend-item.interactive {
  cursor: pointer;
}

.legend-item.interactive:hover {
  background: #f3f4f6;
}

.legend-item.interactive:hover .legend-value {
  font-weight: 700;
  transform: scale(1.1);
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  flex-shrink: 0;
}

.legend-label {
  flex: 1;
  font-size: 0.9375rem;
  color: #4b5563;
}

.legend-value {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
  transition: all 0.2s ease;
}
</style>