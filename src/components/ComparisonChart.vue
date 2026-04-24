<template>
  <div class="comparison-chart">
    <div class="comparison-header">
      <h3 class="comparison-title">{{ title }}</h3>
      <p class="comparison-subtitle">{{ subtitle }}</p>
    </div>
    <div class="comparison-bars">
      <div 
        v-for="(group, groupIndex) in groups" 
        :key="groupIndex" 
        class="comparison-group"
      >
        <div class="group-label">{{ group.label }}</div>
        <div class="group-bars">
          <div 
            v-for="(item, itemIndex) in group.items" 
            :key="itemIndex"
            class="group-bar-item"
            :class="{ 'interactive': interactive }"
            @mouseenter="hoveredIndex = `${groupIndex}-${itemIndex}`"
            @mouseleave="hoveredIndex = null"
          >
            <div class="bar-info">
              <span class="bar-label">{{ item.label }}</span>
              <span class="bar-value" :class="{ 'highlighted': hoveredIndex === `${groupIndex}-${itemIndex}` }">{{ item.value }}%</span>
            </div>
            <div class="bar-track">
              <div 
                class="bar-fill"
                :style="{ 
                  width: `${item.value}%`,
                  background: item.color || group.color
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showNote" class="comparison-note">
      <span>{{ note }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  groups: {
    type: Array,
    required: true
  },
  showNote: {
    type: Boolean,
    default: true
  },
  note: {
    type: String,
    default: 'Sample: Year 2 (n=40), Year 3 (n=50)'
  },
  interactive: {
    type: Boolean,
    default: true
  }
})

const hoveredIndex = ref(null)
</script>

<style scoped>
.comparison-chart {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
}

.comparison-header {
  margin-bottom: 1.5rem;
}

.comparison-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.comparison-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}

.comparison-bars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.comparison-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.group-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.group-bars {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.group-bar-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.group-bar-item.interactive {
  cursor: pointer;
}

.bar-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar-info .bar-label {
  font-size: 0.75rem;
  color: #6b7280;
  border: none;
  padding: 0;
}

.bar-info .bar-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
  transition: all 0.2s ease;
}

.bar-info .bar-value.highlighted {
  transform: scale(1.1);
  color: #2563eb;
}

.bar-track {
  height: 20px;
  background: #f3f4f6;
  border-radius: 0.375rem;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 0.375rem;
  transition: all 0.5s ease;
}

.group-bar-item.interactive:hover .bar-fill {
  filter: brightness(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.comparison-note {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.75rem;
  color: #9ca3af;
  text-align: right;
}
</style>