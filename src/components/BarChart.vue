<template>
  <div class="bar-chart-container">
    <div class="bar-chart" :class="{ 'horizontal': horizontal }">
      <div 
        v-for="(item, index) in data" 
        :key="index" 
        class="bar-item"
        :class="{ 'interactive': interactive }"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div v-if="!horizontal" class="bar-label">{{ item.label }}</div>
        <div class="bar-track">
          <div 
            class="bar-fill"
            :style="{ 
              width: horizontal ? `${item.value}%` : '0%',
              height: horizontal ? '100%' : `${item.value}%`,
              background: item.color || colors[index % colors.length]
            }"
          >
            <span v-if="item.value >= 16" class="bar-value">{{ item.value }}%</span>
          </div>
          <span 
            v-if="horizontal && item.value < 16" 
            class="bar-value-outside"
            :style="{ left: `calc(${item.value}% + 0.5rem)` }"
          >{{ item.value }}%</span>
        </div>
        <div v-if="horizontal" class="bar-label">{{ item.label }}</div>
      </div>
    </div>
    <div v-if="showLegend" class="chart-footer">
      <div class="footer-note" v-if="note">{{ note }}</div>
      <div class="sample-size">n={{ sampleSize }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  horizontal: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: true
  },
  note: {
    type: String,
    default: ''
  },
  sampleSize: {
    type: [Number, String],
    default: 90
  },
  interactive: {
    type: Boolean,
    default: true
  }
})

const colors = ['#3b82f6', '#f97316', '#8b5cf6', '#22c55e', '#ef4444', '#64748b']
const hoveredIndex = ref(null)
</script>

<style scoped>
.bar-chart-container {
  width: 100%;
}

.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bar-chart.horizontal {
  gap: 0.5rem;
}

.bar-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bar-chart:not(.horizontal) .bar-item {
  flex-direction: column;
  align-items: stretch;
  gap: 0.25rem;
}

.bar-item.interactive {
  cursor: pointer;
}

.bar-label {
  min-width: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  text-align: right;
}

.bar-chart:not(.horizontal) .bar-label {
  text-align: left;
}

.bar-track {
  flex: 1;
  height: 28px;
  background: #f3f4f6;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
}

.bar-chart:not(.horizontal) .bar-track {
  height: 100%;
  width: 100%;
  min-height: 28px;
}

.bar-fill {
  border-radius: 0.5rem;
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bar-item.interactive:hover .bar-fill {
  filter: brightness(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.bar-value {
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  padding-right: 0.75rem;
  white-space: nowrap;
}

.bar-value-outside {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
  white-space: nowrap;
}

.bar-chart:not(.horizontal) .bar-value {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.chart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
}

.footer-note {
  font-size: 0.75rem;
  color: #6b7280;
  font-style: italic;
}

.sample-size {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
}
</style>