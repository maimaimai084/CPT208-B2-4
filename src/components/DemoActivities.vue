<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900 mb-2">SAT Student Activities Timeline</h2>
      <p class="text-sm text-slate-600">
        A structured roadmap of activities and milestones designed to guide SAT students through their postgraduate preparation journey.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

      <div class="space-y-8">
        <!-- Year 2 -->
        <div class="relative">
          <div class="absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
          <div class="pl-14 md:pl-20">
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">YEAR 2</span>
                <h3 class="text-lg font-bold text-slate-900">Exploration & Foundation</h3>
              </div>
              <p class="text-sm text-slate-600 mb-4">Build awareness, explore interests, and lay the academic foundation for future applications.</p>

              <div class="grid sm:grid-cols-2 gap-3">
                <div v-for="act in year2Activities" :key="act.id" class="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">{{ act.month }}</span>
                    <span class="text-sm font-semibold text-slate-800">{{ act.title }}</span>
                  </div>
                  <p class="text-xs text-slate-500">{{ act.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Year 3 -->
        <div class="relative">
          <div class="absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-white shadow"></div>
          <div class="pl-14 md:pl-20">
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">YEAR 3</span>
                <h3 class="text-lg font-bold text-slate-900">Skill Building & Applications</h3>
              </div>
              <p class="text-sm text-slate-600 mb-4">Take tests, gain experience, and start crafting your application materials.</p>

              <div class="grid sm:grid-cols-2 gap-3">
                <div v-for="act in year3Activities" :key="act.id" class="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded">{{ act.month }}</span>
                    <span class="text-sm font-semibold text-slate-800">{{ act.title }}</span>
                  </div>
                  <p class="text-xs text-slate-500">{{ act.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Year 4 -->
        <div class="relative">
          <div class="absolute left-6 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></div>
          <div class="pl-14 md:pl-20">
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">YEAR 4</span>
                <h3 class="text-lg font-bold text-slate-900">Final Push & Decisions</h3>
              </div>
              <p class="text-sm text-slate-600 mb-4">Submit applications, attend interviews, and prepare for your next chapter.</p>

              <div class="grid sm:grid-cols-2 gap-3">
                <div v-for="act in year4Activities" :key="act.id" class="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">{{ act.month }}</span>
                    <span class="text-sm font-semibold text-slate-800">{{ act.title }}</span>
                  </div>
                  <p class="text-xs text-slate-500">{{ act.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const year2Activities = [
  { id: 'y2-1', month: 'Sep', title: 'Welcome Fair', description: 'Meet SAT societies, clubs, and research groups. Explore your interests early.' },
  { id: 'y2-2', month: 'Oct', title: 'SURF Lab Tour', description: 'Tour ongoing research labs. Identify potential supervisors for future SURF projects.' },
  { id: 'y2-3', month: 'Nov', title: 'Academic Writing Workshop', description: 'Learn academic writing fundamentals — critical for future PS and research proposals.' },
  { id: 'y2-4', month: 'Mar', title: 'Career Planning Seminar', description: 'Understand postgraduate pathways: research vs taught, UK vs US vs elsewhere.' },
  { id: 'y2-5', month: 'May', title: 'Summer Research Preview', description: 'Apply for summer research positions and overseas summer schools.' }
]

const year3Activities = [
  { id: 'y3-1', month: 'Sep', title: 'GRE / IELTS Bootcamp', description: 'Intensive test prep sessions. Register for exams with target deadlines.' },
  { id: 'y3-2', month: 'Oct', title: 'Research Project Fair', description: 'Pitch your research ideas. Form teams for capstone or competition projects.' },
  { id: 'y3-3', month: 'Nov', title: 'Alumni Sharing Session', description: 'Recent graduates share application experiences and offer school-specific advice.' },
  { id: 'y3-4', month: 'Jan', title: 'CV Clinic', description: 'Get your CV reviewed by career advisors and industry professionals.' },
  { id: 'y3-5', month: 'Mar', title: 'Mock Interview Day', description: 'Practice admission and scholarship interviews with faculty and alumni panels.' },
  { id: 'y3-6', month: 'May', title: 'Recommendation Letter Prep', description: 'Identify referees early. Provide them with your CV and achievement summaries.' }
]

const year4Activities = [
  { id: 'y4-1', month: 'Sep', title: 'Application Workshop', description: 'Step-by-step walkthrough of application portals. Avoid common submission errors.' },
  { id: 'y4-2', month: 'Oct', title: 'PS Review Roundtable', description: 'Peer and advisor review of personal statements. Multiple revision rounds.' },
  { id: 'y4-3', month: 'Nov', title: 'Interview Prep Camp', description: 'Intensive mock interviews for programs requiring them (e.g., Oxford, Cambridge, some US programs).' },
  { id: 'y4-4', month: 'Jan', title: 'Offer Celebration & Analysis', description: 'Compare offers considering funding, location, ranking, and career outcomes.' },
  { id: 'y4-5', month: 'Mar', title: 'Pre-Departure Briefing', description: 'Visa guidance, accommodation search, and cultural preparation sessions.' }
]
</script>
