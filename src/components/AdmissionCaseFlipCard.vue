<template>
  <div class="border-t border-slate-100 pt-3">
    <div class="flex items-center justify-between gap-3 mb-2">
      <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
        Guess the Case
      </p>
      <span class="text-[10px] font-bold text-[#4D9C71] bg-[#E8F8F5] px-2 py-1 rounded-md">
        Flip Card
      </span>
    </div>

    <button
      type="button"
      class="flip-card block w-full text-left"
      :aria-pressed="isFlipped"
      @click="isFlipped = !isFlipped"
    >
      <span class="flip-card-inner block w-full aspect-[4/3]" :class="{ flipped: isFlipped }">
        <span class="flip-card-front rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <span class="block text-[11px] font-bold text-slate-500 mb-2">
            {{ major.name }} profile challenge
          </span>
          <span class="block text-sm font-semibold text-slate-800 leading-relaxed">
            A {{ caseStudy.year }} applicant used the
            <span class="known-value">{{ caseStudy.route }}</span>
            route with GPA
            <span class="known-value">{{ caseStudy.gpa }}</span>
            and received an offer from
            <span class="blank">?</span>
            .
          </span>
          <span class="block text-xs text-slate-500 mt-3 leading-relaxed">
            Guess one admitted programme before flipping.
          </span>
          <span class="block text-[11px] font-bold text-[#4D9C71] mt-3">
            Click to reveal answer
          </span>
        </span>

        <span class="flip-card-back rounded-xl border border-[#81C1C3] bg-[#F0FBFA] p-4 shadow-md">
          <span class="block text-[11px] font-bold text-[#2F7F73] mb-2">
            Answer
          </span>
          <span class="grid grid-cols-3 gap-2 mb-3">
            <span class="answer-chip">
              <span class="answer-label">Route</span>
              <span class="answer-value">{{ caseStudy.route }}</span>
            </span>
            <span class="answer-chip">
              <span class="answer-label">GPA</span>
              <span class="answer-value">{{ caseStudy.gpa }}</span>
            </span>
            <span class="answer-chip">
              <span class="answer-label">Offer</span>
              <span class="answer-value">{{ primaryOffer }}</span>
            </span>
          </span>
          <span class="block text-xs text-slate-600 leading-relaxed custom-scrollbar overflow-y-auto max-h-20">
            {{ caseStudy.highlight }}
          </span>
          <span class="block text-[11px] text-slate-500 mt-2">
            {{ offerSummary }}
          </span>
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  major: { type: Object, required: true },
  caseStudy: { type: Object, required: true }
})

const isFlipped = ref(false)

const primaryOffer = computed(() => props.caseStudy.offers?.[0] || 'Target programme')

const offerSummary = computed(() => {
  const count = props.caseStudy.offers?.length || 0
  if (count <= 1) return 'Single highlighted offer'
  return `${count} offers in this case`
})
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  perspective: 1200px;
}

.flip-card-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  display: block;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.blank {
  display: inline-flex;
  min-width: 3.25rem;
  height: 1.35rem;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  border-bottom: 2px solid #4d9c71;
  color: #4d9c71;
  font-weight: 800;
}

.known-value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.1rem;
  border-radius: 0.35rem;
  background: white;
  border: 1px solid #cbd5e1;
  color: #0f172a;
  font-weight: 800;
  padding: 0.05rem 0.35rem;
}

.answer-chip {
  min-width: 0;
  border-radius: 0.5rem;
  background: white;
  padding: 0.45rem;
  border: 1px solid rgba(129, 193, 195, 0.65);
}

.answer-label,
.answer-value {
  display: block;
}

.answer-label {
  font-size: 0.625rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}

.answer-value {
  margin-top: 0.15rem;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.15;
  overflow-wrap: anywhere;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 3px;
}
</style>
