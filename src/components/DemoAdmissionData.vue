<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">SAT Major Admission Statistics</h2>
      <p class="text-sm text-slate-600">
        Aggregated postgraduate admission data for XJTLU School of Advanced Technology (SAT) graduates.
        Data reflects recent application cycles (24/25 fall).<br>
        <span class="text-amber-600">Disclaimer:</span> This is a demonstration dataset for portfolio purposes.
      </p>
    </div>

    <!-- Overall Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-blue-600">80%</div>
        <div class="text-xs text-slate-500 mt-1">UK-bound</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-violet-600">45%</div>
        <div class="text-xs text-slate-500 mt-1">CST/AI Top 10 Rate</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-emerald-600">85%</div>
        <div class="text-xs text-slate-500 mt-1">EE Top 50 Rate</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
        <div class="text-2xl font-bold text-amber-600">7.0</div>
        <div class="text-xs text-slate-500 mt-1">Avg IELTS (G5)</div>
      </div>
    </div>

    <!-- Destination Distribution -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Destination Distribution</h3>
      <div class="space-y-3">
        <div v-for="dest in overallStats.destinations" :key="dest.region" class="flex items-center gap-4">
          <span class="text-sm w-28 font-medium text-slate-700">{{ dest.region }}</span>
          <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-[#7FA1ED] rounded-full transition-all duration-1000" :style="{ width: dest.share + '%' }"></div>
          </div>
          <span class="text-sm font-bold text-slate-800 w-10 text-right">{{ dest.share }}%</span>
          <span class="text-xs text-slate-500 hidden sm:inline">{{ dest.note }}</span>
        </div>
      </div>
    </div>

    <!-- Major Cards -->
    <div>
      <h3 class="text-lg font-bold text-slate-900 mb-4">By Major</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="major in majorStats" :key="major.id"
             class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h4 class="font-bold text-slate-900">{{ major.name }}</h4>
              <p class="text-xs text-slate-500">{{ major.fullName }}</p>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-blue-600">{{ major.top50Rate }}%</div>
              <div class="text-[10px] text-slate-400">Top 50 Rate</div>
            </div>
          </div>

          <div class="flex gap-4 mb-4">
            <div class="flex-1 bg-blue-50 rounded-lg p-2 text-center">
              <div class="text-sm font-bold text-blue-700">{{ major.top10Rate }}%</div>
              <div class="text-[10px] text-blue-600">Top 10</div>
            </div>
            <div class="flex-1 bg-slate-50 rounded-lg p-2 text-center">
              <div class="text-sm font-bold text-slate-700">{{ major.top50Rate }}%</div>
              <div class="text-[10px] text-slate-500">Top 50</div>
            </div>
          </div>

          <!-- Score Tiers -->
          <div class="space-y-2 mb-4">
            <div v-for="(tier, idx) in major.scoreTiers" :key="idx"
                 class="text-xs p-2 rounded-lg"
                 :class="idx === 0 ? 'bg-emerald-50 text-emerald-800' : idx === 1 ? 'bg-blue-50 text-blue-800' : 'bg-amber-50 text-amber-800'">
              <span class="font-bold">{{ tier.range }}</span> ({{ tier.degreeClass }}) — {{ tier.targets }}
            </div>
          </div>

          <!-- Case Study -->
          <div v-if="major.caseStudies.length > 0" class="border-t border-slate-100 pt-3">
            <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Spotlight Case</p>
            <div class="text-xs text-slate-700">
              <p class="font-medium">{{ major.caseStudies[0].gpa }} GPA · {{ major.caseStudies[0].route }} · {{ major.caseStudies[0].offers[0] }}</p>
              <p class="text-slate-500 mt-1">{{ major.caseStudies[0].highlight }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Language Requirements -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Language & Test Requirements</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-200">
              <th class="text-left py-2 px-3 font-semibold text-slate-700">Target</th>
              <th class="text-left py-2 px-3 font-semibold text-slate-700">IELTS</th>
              <th class="text-left py-2 px-3 font-semibold text-slate-700">GRE</th>
              <th class="text-left py-2 px-3 font-semibold text-slate-700">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="req in overallStats.languageReqs" :key="req.target" class="border-b border-slate-100">
              <td class="py-2 px-3 font-medium text-slate-800">{{ req.target }}</td>
              <td class="py-2 px-3 text-slate-600">{{ req.ielts }}</td>
              <td class="py-2 px-3 text-slate-600">{{ req.gre }}</td>
              <td class="py-2 px-3 text-slate-500 text-xs">{{ req.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { majorStats, overallStats } from '../data/admissionData'
</script>
