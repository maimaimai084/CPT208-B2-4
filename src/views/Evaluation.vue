<!--
  Evaluation.vue - Module 6: Evaluation & Results
  展示用户测试数据、量化结果和质性反馈
-->

<template>
  <div class="evaluation-page min-h-screen bg-gray-50">
    <ModuleHeader 
      title="Evaluation & Results"
      subtitle="Early evaluation and user feedback"
      icon="📊"
    />

    <main class="max-w-5xl mx-auto px-4 py-8 pb-20">
      <TableOfContents :items="tocItems" />
      
      <!-- Evaluation Methods -->
      <section id="evaluation-methods" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">🔬 Evaluation Methods</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 class="font-bold text-blue-900 mb-2">Heuristic Evaluation</h3>
            <p class="text-gray-700 text-sm">Evaluated interface usability based on human-computer interaction design principles (Nielsen's 10 heuristics) [2].</p>
          </div>
          <div class="p-6 bg-green-50 rounded-xl border border-green-100">
            <h3 class="font-bold text-green-900 mb-2">User Testing</h3>
            <p class="text-gray-700 text-sm">Pilot testing with 8 students and 2 advisors completing core game levels and providing task-based feedback.</p>
          </div>
          <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
            <h3 class="font-bold text-purple-900 mb-2">System Usability Scale (SUS)</h3>
            <p class="text-gray-700 text-sm">Standardized 10-item questionnaire measuring perceived usability of the game interface [3].</p>
          </div>
        </div>
      </section>

      <!-- User Quotes -->
      <section id="user-feedback" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">💬 User Feedback</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">👤</div>
              <div>
                <div class="font-medium text-gray-900">Year 2 Student</div>
                <div class="text-sm text-gray-500">Explorer Type</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"5 minutes per level fits perfectly into my break time. Unlocking strategies with points feels rewarding!"</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">👤</div>
              <div>
                <div class="font-medium text-gray-900">Year 3 Student</div>
                <div class="text-sm text-gray-500">Sprint Type</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"The essay writing scenarios are very practical. The tips I unlocked helped me avoid common mistakes."</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">👔</div>
              <div>
                <div class="font-medium text-gray-900">Development Advisor</div>
                <div class="text-sm text-gray-500">Secondary User</div>
              </div>
            </div>
            <p class="text-gray-700 italic">"Students can understand the basic knowledge through the system before coming to see me. I can focus on personalized guidance instead of repetitive Q&A."</p>
          </div>
        </div>

        <!-- === 👇 在这里插入新增的四张图片网格 👇 === -->
        <div class="mt-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>📸</span> User Testing Records
          </h3>
          <!-- grid-cols-2 表示一行两列，gap-4 是图片间距 -->
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <!-- 图片 1 -->
            <div class="bg-white rounded-xl p-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/docx/module6_evaluation/1.jpg" alt="Testing Record 1" class="w-full h-auto rounded-lg object-cover">
            </div>
            <!-- 图片 2 -->
            <div class="bg-white rounded-xl p-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/docx/module6_evaluation/2.jpg" alt="Testing Record 2" class="w-full h-auto rounded-lg object-cover">
            </div>
            <!-- 图片 3 -->
            <div class="bg-white rounded-xl p-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/docx/module6_evaluation/3.jpg" alt="Testing Record 3" class="w-full h-auto rounded-lg object-cover">
            </div>
            <!-- 图片 4 -->
            <div class="bg-white rounded-xl p-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/docx/module6_evaluation/4.jpg" alt="Testing Record 4" class="w-full h-auto rounded-lg object-cover">
            </div>
          </div>
        </div>
        <!-- === 👆 新增代码结束 👆 === -->

      </section>

      

      <!-- SUS Score Chart (原生 CSS 柱状图 - 英文版) -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">SUS Score Distribution</h3>
            <p class="text-sm text-gray-500 mt-1">Usability Assessment Comparison Across User Groups (Overall Average: <span class="font-bold text-[#7FA1ED]">79.0</span>)</p>
          </div>
          <div class="text-right text-xs text-gray-400">
            * Out of 100 <br> N = 18
          </div>
        </div>

        <!-- 图表主体区域 -->
        <div class="relative h-64 max-w-2xl mx-auto flex items-end justify-around border-l-2 border-b-2 border-gray-100 mb-12">
          
          <!-- 背景网格参考线 -->
          <div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-0">
            <div class="w-full border-t border-dashed border-gray-200"></div>
            <div class="w-full border-t border-dashed border-gray-200"></div>
            <div class="w-full border-t border-dashed border-gray-200"></div>
            <div class="w-full border-t border-dashed border-gray-200"></div>
            <div class="w-full"></div> <!-- 底部基线 -->
          </div>

          <!-- Y轴刻度标签 -->
          <div class="absolute -left-8 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 pb-0 translate-y-[-6px]">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>

          <!-- Bar 1: Year 3 -->
          <div class="relative h-full flex flex-col justify-end items-center group w-1/4 z-10">
            <!-- 悬浮提示框 -->
            <div class="absolute top-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-[10px] p-2 rounded-lg pointer-events-none whitespace-nowrap z-20 shadow-lg mb-2">
              Hits pain points, high system tolerance
            </div>
            
            <!-- 数值和柱子 -->
            <span class="text-sm font-bold text-[#7FA1ED] mb-1">82.5</span>
            <div class="w-full max-w-[64px] bg-[#7FA1ED] rounded-t-md transition-all duration-500 hover:opacity-80 hover:scale-y-[1.02] origin-bottom shadow-sm" style="height: 82.5%;"></div>
            
            <!-- 底部标签 -->
            <div class="absolute top-full pt-3 text-center w-full whitespace-nowrap">
              <div class="text-sm font-bold text-gray-700">Year 3</div>
              <div class="text-xs text-gray-400">Sprint Type (n=8)</div>
            </div>
          </div>

          <!-- Bar 2: Advisors -->
          <div class="relative h-full flex flex-col justify-end items-center group w-1/4 z-10">
            <div class="absolute top-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-[10px] p-2 rounded-lg pointer-events-none whitespace-nowrap z-20 shadow-lg mb-2">
              Intuitive dashboard, no training required
            </div>
            
            <span class="text-sm font-bold text-emerald-500 mb-1">81.3</span>
            <div class="w-full max-w-[64px] bg-emerald-400 rounded-t-md transition-all duration-500 hover:opacity-80 hover:scale-y-[1.02] origin-bottom shadow-sm" style="height: 81.3%;"></div>
            
            <div class="absolute top-full pt-3 text-center w-full whitespace-nowrap">
              <div class="text-sm font-bold text-gray-700">Advisors</div>
              <div class="text-xs text-gray-400">Secondary (n=2)</div>
            </div>
          </div>

          <!-- Bar 3: Year 2 -->
          <div class="relative h-full flex flex-col justify-end items-center group w-1/4 z-10">
            <div class="absolute top-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-[10px] p-2 rounded-lg pointer-events-none whitespace-nowrap z-20 shadow-lg mb-2">
              Lacks basics, higher learning curve
            </div>
            
            <span class="text-sm font-bold text-amber-500 mb-1">75.0</span>
            <div class="w-full max-w-[64px] bg-amber-400 rounded-t-md transition-all duration-500 hover:opacity-80 hover:scale-y-[1.02] origin-bottom shadow-sm" style="height: 75.0%;"></div>
            
            <div class="absolute top-full pt-3 text-center w-full whitespace-nowrap">
              <div class="text-sm font-bold text-gray-700">Year 2</div>
              <div class="text-xs text-gray-400">Confused Type (n=8)</div>
            </div>
          </div>

        </div>
      </section>

      <!-- Radar Chart: SUS Dimensions Breakdown -->
      <section class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">SUS Dimensions Breakdown</h3>
        
        <div class="grid md:grid-cols-2 gap-8 items-center">
          
          <!-- 左侧：SVG 雷达图 -->
          <div class="relative w-full flex justify-center">
            <!-- SVG viewBox 设置为 300x300，中心点在 (150, 150)，最大半径 100 -->
            <svg viewBox="0 0 300 300" class="w-full h-auto max-w-[340px] drop-shadow-sm">
              <!-- 背景蛛网网格 (20, 40, 60, 80, 100) -->
              <polygon points="150,50 250,150 150,250 50,150" fill="none" stroke="#f3f4f6" stroke-width="1.5" />
              <polygon points="150,70 230,150 150,230 70,150" fill="none" stroke="#f3f4f6" stroke-width="1.5" />
              <polygon points="150,90 210,150 150,210 90,150" fill="none" stroke="#f3f4f6" stroke-width="1.5" />
              <polygon points="150,110 190,150 150,190 110,150" fill="none" stroke="#f3f4f6" stroke-width="1.5" />
              <polygon points="150,130 170,150 150,170 130,150" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3" />

              <!-- 十字交叉坐标轴 -->
              <line x1="150" y1="50" x2="150" y2="250" stroke="#e5e7eb" stroke-width="1.5" />
              <line x1="50" y1="150" x2="250" y2="150" stroke="#e5e7eb" stroke-width="1.5" />

              <!-- 维度文字标签 -->
              <text x="150" y="35" text-anchor="middle" class="text-xs font-bold fill-gray-600">Satisfaction</text>
              <text x="260" y="154" text-anchor="start" class="text-xs font-bold fill-gray-600">Learnability</text>
              <text x="150" y="275" text-anchor="middle" class="text-xs font-bold fill-gray-600">Consistency</text>
              <text x="40" y="154" text-anchor="end" class="text-xs font-bold fill-gray-600">Efficiency</text>

              <!-- === 数据多边形 1: Year 3 (Sprint) === -->
              <!-- 数据: Sat 88, Learn 86, Cons 82, Eff 84 -->
              <!-- 坐标算法: 150±数据值 -->
              <polygon 
                points="150,62 236,150 150,232 66,150" 
                fill="rgba(127, 161, 237, 0.15)" 
                stroke="#7FA1ED" 
                stroke-width="2.5" 
                class="transition-all duration-500 hover:fill-opacity-50"
              />
              <!-- 顶点圆点 -->
              <circle cx="150" cy="62" r="4" fill="#7FA1ED" />
              <circle cx="236" cy="150" r="4" fill="#7FA1ED" />
              <circle cx="150" cy="232" r="4" fill="#7FA1ED" />
              <circle cx="66" cy="150" r="4" fill="#7FA1ED" />

              <!-- === 数据多边形 2: Year 2 (Confused) === -->
              <!-- 数据: Sat 64, Learn 84, Cons 80, Eff 78 -->
              <polygon 
                points="150,86 234,150 150,230 72,150" 
                fill="rgba(251, 191, 36, 0.2)" 
                stroke="#FBBF24" 
                stroke-width="2.5" 
                class="transition-all duration-500 hover:fill-opacity-50"
              />
              <!-- 顶点圆点 -->
              <circle cx="150" cy="86" r="4" fill="#FBBF24" />
              <circle cx="234" cy="150" r="4" fill="#FBBF24" />
              <circle cx="150" cy="230" r="4" fill="#FBBF24" />
              <circle cx="72" cy="150" r="4" fill="#FBBF24" />
            </svg>
          </div>

          <!-- 右侧：图例与深度数据洞察 -->
          <div class="space-y-6">
            <!-- 图例 -->
            <div class="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-[#7FA1ED]"></div>
                <span class="text-sm font-bold text-gray-800">Year 3 (Sprint Type)</span>
                <span class="text-xs text-gray-500 ml-auto">Highly motivated</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                <span class="text-sm font-bold text-gray-800">Year 2 (Explorer Type)</span>
                <span class="text-xs text-gray-500 ml-auto">Lack of urgency</span>
              </div>
            </div>

            <!-- 数据洞察 -->
            <div>
              <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">
                Explain 
              </h4>
              <ul class="space-y-3">
                <li class="text-sm text-gray-600 leading-relaxed">
                  <strong class="text-[#7FA1ED]">High Learnability for All:</strong> Both groups scored high on Learnability (84 & 86). This validates our UI design, proving the system is simple and intuitive even for novices.
                </li>
                <li class="text-sm text-gray-600 leading-relaxed">
                  <strong class="text-amber-500">The "Satisfaction" Drop:</strong> Notice the sharp drop in the top axis (Satisfaction: 64) for Year 2 students. Interviews revealed this isn't a usability issue, but a <span class="italic">motivation issue</span>. Without the immediate pressure of graduate applications, Year 2 students are less willing to "use the system frequently."
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- Key Findings -->
      <section id="key-findings" class="mb-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h2 class="text-2xl font-bold mb-4">🔍 Key Findings</h2>
        <p class="text-lg leading-relaxed">
          Overall, the evaluation confirms that gamification serves as a highly effective complement to traditional college guidance. The points-based story unlocking mechanism significantly enhances students' sustained motivation and knowledge retention, transforming a high-anxiety application process into a structured, rewarding journey. Furthermore, the dual-value system successfully distinguishes theoretical learning from practical execution, providing users with clear feedback loops. Data also reveals a crucial user segmentation: while Year 3 students showed exceptionally high satisfaction due to immediate relevance, Year 2 students exhibited a lack of urgency despite finding the interface highly learnable.  
        </p>
      </section>

      <!-- Reference -->
      <section id="reference" class="mb-12 bg-gray-100 rounded-2xl p-6">
        <h3 class="font-bold text-gray-700 mb-2">📚 Reference</h3>
        <p class="text-sm text-gray-600 mb-2">[2] Nielsen, J. (1994). Usability Engineering. Morgan Kaufmann Publishers.</p>
        <p class="text-sm text-gray-600">[3] Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. In P. W. Jordan et al. (Eds.), Usability Evaluation in Industry. Taylor & Francis.</p>
      </section>

    </main>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/portfolio/ModuleHeader.vue'
import TableOfContents from '../components/portfolio/TableOfContents.vue'

const tocItems = [
  { id: 'evaluation-methods', title: '🔬 Evaluation Methods' },
  { id: 'user-feedback', title: '💬 User Feedback' },
  { id: 'User Testing Records', title: '📸 User Testing Records' },
  { id: 'SUS Evaluation', title: '🔬 SUS Evaluation' },
  { id: 'key-findings', title: '🔍 Key Findings' },
  { id: 'reference', title: '📚 Reference' }
]
</script>

<style scoped>
.evaluation-page { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>
