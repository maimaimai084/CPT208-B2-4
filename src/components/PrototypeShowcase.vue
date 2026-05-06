<template>
  <div class="prototype-showcase min-h-screen bg-gray-50">
    <ModuleHeader
      title="Prototype & Implementation"
      subtitle="From sketches to interactive prototype"
      icon="📱"
    />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-8 pb-20">
      <TableOfContents :items="tocItems" />

      <!-- Section 1: User Journey -->
      <section id="user-journey" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>👤</span> User Journey
        </h2>

        <img src="/images/docx/module5_prototype/11.png" alt="User Journey" class="max-w-full mx-auto mb-6 rounded-lg border border-gray-200">

        <div class="space-y-4">
          <div v-for="(step, index) in coreSteps" :key="index"
               class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
              {{ index + 1 }}
            </div>
            <div>
              <h4 class="font-bold text-gray-900">{{ step.title }}</h4>
              <p class="text-gray-600">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Role-Based Application Stages -->
      <section id="application-stages" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Dual-Path Application Stages
        </h2>
        <p class="text-gray-600 mb-6">We designed two distinct 5-stage learning paths tailored to the psychological states of our two user personas.</p>

        <div class="space-y-6">
          <!-- Explorer Path -->
          <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span class="text-xl">🧭</span> The Explorer Path (Year 2 Focus)
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div class="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                <div class="text-2xl mb-1">🧭</div><div class="text-xs text-gray-500">Stage 1</div><h4 class="font-bold text-gray-800 text-sm">Identity</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                <div class="text-2xl mb-1">🔍</div><div class="text-xs text-gray-500">Stage 2</div><h4 class="font-bold text-gray-800 text-sm">Research</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                <div class="text-2xl mb-1">✍️</div><div class="text-xs text-gray-500">Stage 3</div><h4 class="font-bold text-gray-800 text-sm">Essays</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                <div class="text-2xl mb-1">⚖️</div><div class="text-xs text-gray-500">Stage 4</div><h4 class="font-bold text-gray-800 text-sm">Decide</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
                <div class="text-2xl mb-1">🗺️</div><div class="text-xs text-gray-500">Stage 5</div><h4 class="font-bold text-gray-800 text-sm">Plan</h4>
              </div>
            </div>
          </div>

          <!-- Sprint Path -->
          <div class="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 class="font-bold text-orange-900 mb-4 flex items-center gap-2">
              <span class="text-xl">🚀</span> The Sprint Path (Year 3 Focus)
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div class="text-center p-3 bg-white rounded-lg border border-orange-200 shadow-sm">
                <div class="text-2xl mb-1">🎯</div><div class="text-xs text-gray-500">Stage 1</div><h4 class="font-bold text-gray-800 text-sm">Goals</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-orange-200 shadow-sm">
                <div class="text-2xl mb-1">📋</div><div class="text-xs text-gray-500">Stage 2</div><h4 class="font-bold text-gray-800 text-sm">Materials</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-orange-200 shadow-sm">
                <div class="text-2xl mb-1">🚀</div><div class="text-xs text-gray-500">Stage 3</div><h4 class="font-bold text-gray-800 text-sm">Submit</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-orange-200 shadow-sm">
                <div class="text-2xl mb-1">💬</div><div class="text-xs text-gray-500">Stage 4</div><h4 class="font-bold text-gray-800 text-sm">Interview</h4>
              </div>
              <div class="text-center p-3 bg-white rounded-lg border border-orange-200 shadow-sm">
                <div class="text-2xl mb-1">🏆</div><div class="text-xs text-gray-500">Stage 5</div><h4 class="font-bold text-gray-800 text-sm">Success</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Dual Value System -->
      <section id="dual-value" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📊</span> Dual Value System
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">📚</span>
              <h3 class="text-xl font-bold text-blue-900">Learning Value</h3>
            </div>
            <p class="text-gray-700 mb-4">Earned through answering quiz questions correctly. Represents theoretical knowledge about postgraduate applications.</p>
            <div class="text-sm text-blue-700 font-medium">Unlock: PS Writing Guide at 100 points</div>
          </div>

          <div class="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">✅</span>
              <h3 class="text-xl font-bold text-orange-900">Task Value</h3>
            </div>
            <p class="text-gray-700 mb-4">Earned through completing practical tasks and simulations. Represents hands-on application skills.</p>
            
          </div>
        </div>
      </section>

      <!-- Section: Advanced Gamification Loops -->
      <section id="gamification-loops" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🌳</span> Growth Visualization & Loop
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Knowledge Tree -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span class="text-green-600">🌿</span> The SVG Knowledge Tree
            </h3>
            <p class="text-sm text-gray-700 mb-4 leading-relaxed">
              To make long-term progress visually rewarding, we designed a dynamic SVG Knowledge Tree using Quadratic Bézier Curves. The tree grows "leaves" based on the user's accumulated values:
            </p>
            <ul class="space-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl">
              <li>🔵 <strong>Blue Leaves:</strong> Represent accumulated Learning Value (LV).</li>
              <li>🟠 <strong>Orange Leaves:</strong> Represent accumulated Task Value (TV).</li>
              <li>🟡 <strong>Golden Leaves:</strong> Awarded upon completing a major application stage.</li>
            </ul>
          </div>

          <!-- Gear System Loop -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span class="text-purple-600">🎒</span> Gear & Loop
            </h3>
            <p class="text-sm text-gray-700 mb-4 leading-relaxed">
              To create a sustained economic loop, we introduced a <strong>Gear System</strong>. Players can spend their theoretical Learning Value (LV) to upgrade specific gears (e.g., IELTS, GPA, Internships, Research).
            </p>
            <div class="flex items-center justify-center gap-2 bg-purple-50 p-4 rounded-xl text-sm font-medium">
              <span class="text-blue-700">Spend LV</span>
              <span>➡️</span>
              <span class="text-blue-700">Upgrade Gear</span>
              <span>➡️</span>
              <span class="text-orange-700">Get TV Bonus multiplier</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: System Architecture -->
      <section id="system-architecture" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🏗️</span> System Architecture
        </h2>

        <div class="bg-gray-50 rounded-xl p-6 mb-6">
          <img src="/images/docx/module5_prototype/image_013.png" alt="System Architecture" class="max-w-full mx-auto rounded-lg">
        </div>

        <!-- Architecture Text Content -->
        <div class="space-y-4">
          <!-- Frontend Layer -->
          <div class="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">🖥️</span>
              <h3 class="text-lg font-bold text-blue-900">Frontend Layer: Cross-Platform & Inclusive</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-1">•</span>
                <span><strong>Dual Interface:</strong> Mobile for fragmented 5-10 min learning on the go, PC for in-depth strategy reading.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-1">•</span>
                <span><strong>Bilingual Support:</strong> Seamless EN/ZH toggle across all components to ensure international accessibility.</span>
              </li>
            </ul>
          </div>

          <!-- Core System Layer  -->
          <div class="bg-orange-50 rounded-xl p-5 border-2 border-orange-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">⚙️</span>
              <h3 class="text-lg font-bold text-orange-900">Core System Layer: The Gamification Engine</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Point System:</strong> Calculates LV (theory) and TV (practice). Players can spend LV to upgrade gears for TV reward multipliers.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Question Bank:</strong> Questions tailored to both roles, with content differentiated for explorers and those preparing for a final sprint.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-1">•</span>
                <span><strong>Knowledge Tree & Story Database:</strong> Visualizes growth via SVG branches and unlocks narrative guides at specific thresholds.</span>
              </li>
            </ul>
          </div>

          <!-- Data Storage / Backend Layer -->
          <div class="bg-gray-100 rounded-xl p-5 border-2 border-gray-300 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">💾</span>
              <h3 class="text-lg font-bold text-gray-900">Backend Layer: Serverless LocalStorage</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-gray-500 mt-1">•</span>
                <span><strong>State Persistence:</strong> Automatically saves progress (role, LV/TV, combos, daily quests) directly to the browser.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-gray-500 mt-1">•</span>
                <span><strong>Privacy & Cost Efficiency:</strong> Eliminates backend server dependency, ensuring user data privacy while reducing deployment costs.</span>
              </li>
            </ul>
          </div>

          <!-- Advisor Portal Layer -->
          <div class="bg-purple-50 rounded-xl p-5 border-2 border-purple-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">👨‍💼</span>
              <h3 class="text-lg font-bold text-purple-900">Advisor Portal Layer</h3>
            </div>
            <ul class="space-y-2 ml-9 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-1">•</span>
                <span><strong>Data-Driven Dashboard:</strong> Aggregates student progress into an analytics panel, highlighting specific knowledge gaps.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-1">•</span>
                <span><strong>The Learning Loop:</strong> Successfully bridges the gap between online gamified micro-learning and offline, highly targeted human guidance.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Data Flow & Processing Logic -->
      <section id="data-flow" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🔄</span> Data Flow & Processing Logic
        </h2>
        <p class="text-gray-600 mb-4">
          The following diagram illustrates how user interactions are processed, persisted,
          and fed back in real-time, as well as how advisor analytics are generated.
        </p>
        
        <div class="flex justify-center mb-6">
          <img src="/images/Data Flow1.jpg"
               alt="Data Flow Architecture"
               class="max-w-full rounded-lg border border-gray-100">
        </div>
        
        <!-- 数据流说明 (已融入 V4.0 高级机制) -->
        <div class="space-y-4 mt-6">
          <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-xl shadow-sm border border-blue-100 transition-hover hover:shadow-md">
            <span class="font-bold text-blue-700 shrink-0 text-lg">① User Input</span>
            <span class="text-sm text-gray-700 leading-relaxed">
              <strong>Role Selection (Explorer/Sprint)</strong>, EN/ZH language toggle, quiz answers, and interactions with <strong>role-specific mini-games</strong> → validated and sanitized.
            </span>
          </div>
          
          <div class="flex items-start gap-3 p-4 bg-orange-50 rounded-xl shadow-sm border border-orange-100 transition-hover hover:shadow-md">
            <span class="font-bold text-orange-700 shrink-0 text-lg">② Frontend Processing</span>
            <span class="text-sm text-gray-700 leading-relaxed">
              Vue 3 reactive state: Calculates LV (Learning) and TV (Task) gains, dynamically applying <strong>Gear System multipliers (+5% per level)</strong> and continuous <strong>Combo bonuses</strong>.
            </span>
          </div>
          
          <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 transition-hover hover:shadow-md">
            <span class="font-bold text-gray-700 shrink-0 text-lg">③ LocalStorage</span>
            <span class="text-sm text-gray-700 leading-relaxed">
              Auto-saves complex JSON state to ensure privacy: <code>{ role, isZh, learningValue, taskValue, gearState, dailyQuestProgress, unlockedAchievements }</code>.
            </span>
          </div>
          
          <div class="flex items-start gap-3 p-4 bg-green-50 rounded-xl shadow-sm border border-green-100 transition-hover hover:shadow-md">
            <span class="font-bold text-green-700 shrink-0 text-lg">④ Output / Feedback</span>
            <span class="text-sm text-gray-700 leading-relaxed">
              Updates the <strong>SVG Knowledge Tree (growing blue/orange leaves)</strong>, triggers achievement toasts, and checks LV/TV thresholds to unlock role-specific story guides.
            </span>
          </div>
          
          <div class="flex items-start gap-3 p-4 bg-purple-50 rounded-xl shadow-sm border border-purple-100 transition-hover hover:shadow-md">
            <span class="font-bold text-purple-700 shrink-0 text-lg">⑤ Advisor Dashboard</span>
            <span class="text-sm text-gray-700 leading-relaxed">
              Read-only aggregation: Parses LocalStorage to display student lists, categorizing them by role (Year 2 vs. Year 3) and highlighting specific knowledge gaps for targeted offline support.
            </span>
          </div>
        </div>
      </section>

      <!-- Section: Prototype Evolution -->
      <section id="prototype-evolution" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📈</span> Prototype Evolution
        </h2>

        <!-- Low-Fi -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Version 1.0 (Low-Fi)</h3>
          <div class="rounded-xl overflow-hidden border border-gray-200 max-w-2xl mx-auto">
            <img src="/images/8-crazy.jpg" alt="Low-fi sketch version 1.0" class="w-full">
          </div>
          <p class="text-sm text-gray-500 text-center mt-2">Version 1.0</p>
        </div>

        <!-- High-Fi -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Version 2.0 (High-Fi)</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/1.jpg" alt="High-fi 1" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Role Selection - 1</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/2.jpg" alt="High-fi 2" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Role Selection - 2</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/3.jpg" alt="High-fi 3" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Dashboard</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/4.jpg" alt="High-fi 4" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Level Page</p>
            </div>
            <div class="text-center">
              <div class="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <img src="/images/docx/module5_prototype/5.jpg" alt="High-fi 5" class="w-full h-full object-contain">
              </div>
              <p class="text-xs text-gray-500 mt-1">Story Unlock</p>
            </div>
          </div>
          <p class="text-sm text-gray-400 text-center mt-3">Version 2.0 </p>

        </div>

        <!-- 3 Key Improvements -->
        <div class="grid md:grid-cols-3 gap-4 mt-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div class="text-2xl mb-2">📱💻</div>
            <h4 class="font-bold text-gray-900">Single → Dual Platform</h4>
            <p class="text-sm text-gray-600 mt-1">Mobile for fragmented learning + PC for deep reading</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div class="text-2xl mb-2">📊</div>
            <h4 class="font-bold text-gray-900">Value Visualization</h4>
            <p class="text-sm text-gray-600 mt-1">Real-time progress bars for Learning & Task values with unlock nodes</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div class="text-2xl mb-2">✨</div>
            <h4 class="font-bold text-gray-900">Simplified Interface</h4>
            <p class="text-sm text-gray-600 mt-1">Focus on core task entries, reduce visual distraction and cognitive load</p>
          </div>
        </div>
          <!-- === 👇 新增的 V3.0 界面预览双图 👇 === -->
        <div class="mt-8 mb-4">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Version 3.0 (Interactive Demo Preview)</h3>
          <!-- grid-cols-1 md:grid-cols-2 保证在手机上单列显示，在电脑上并排两列 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- 图片 1 -->
            <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <!-- ⚠️ 请将这里的 src 替换为你第一张截图的真实路径 -->
              <img src="/images/docx/module5_prototype/6.png" alt="Version 3.0 UI Preview 1" class="w-full h-auto object-cover">
            </div>
            
            <!-- 图片 2 -->
            <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <!-- ⚠️ 请将这里的 src 替换为你第二张截图的真实路径 -->
              <img src="/images/docx/module5_prototype/7.png" alt="Version 3.0 UI Preview 2" class="w-full h-auto object-cover">
            </div>
            
          </div>
        </div>
        <!-- === 👆 新增图片结束 👆 === -->

        <p class="text-sm text-gray-400 text-center mt-6">Version 3.0</p>


        <!-- === 👇 新增的 V4.0 界面预览三图 👇 === -->
        <div class="mt-12 mb-4">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Version 4.0 (Interactive Demo Preview)</h3>
          <!-- grid-cols-1 md:grid-cols-3 保证在手机上单列显示，在电脑上并排三列 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <!-- 图片 1 (建议放：角色差异化的界面 或 双语切换) -->
            <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <!-- ⚠️ 请将这里的 src 替换为你 V4.0 第一张截图的真实路径 -->
              <img src="/images/docx/module5_prototype/8.png" alt="Version 4.0 UI Preview 1" class="w-full h-auto object-cover">
            </div>
            
            <!-- 图片 2 (建议放：新增的 6 个小游戏面板) -->
            <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <!-- ⚠️ 请将这里的 src 替换为你 V4.0 第二张截图的真实路径 -->
              <img src="/images/docx/module5_prototype/9.png" alt="Version 4.0 UI Preview 2" class="w-full h-auto object-cover">
            </div>

            <!-- 图片 3 (建议放：另一个角色的界面 或 具体游戏画面) -->
            <div class="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <!-- ⚠️ 请将这里的 src 替换为你 V4.0 第三张截图的真实路径 -->
              <img src="/images/docx/module5_prototype/10.png" alt="Version 4.0 UI Preview 3" class="w-full h-auto object-cover">
            </div>
            
          </div>
        </div>
        <p class="text-sm text-gray-400 text-center mt-6 mb-8">Version 4.0 is available as an interactive demo - visit the /demo route to play the game</p>
        <!-- === 👆 新增 V4.0 图片结束 👆 === -->
      
        <!-- === 新增：项目迭代时间线 (Iteration Timeline) === -->
        <div class="mt-12 bg-gray-50 rounded-2xl border border-gray-100 p-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>📅</span> Iteration Timeline (V1.0 → V4.0)
          </h3>
          <p class="text-sm text-gray-600 mb-8">
            Our design evolved through a continuous feedback loop. Here is how we iterated our prototype from initial sketches to the final interactive system based on user testing.
          </p>
          
          <div class="relative border-l-2 border-blue-200 ml-4 space-y-10">
            <!-- V1.0 -->
            <div class="relative pl-6">
              <div class="absolute -left-[9px] top-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
              <h4 class="font-bold text-gray-900">Version 1.0: Low-Fi Exploration</h4>
              <p class="text-sm text-gray-600 mt-2">
                <strong>Focus:</strong> Core mechanics and layout.<br>
                <strong>Action:</strong> Translated Crazy 8s sketches into wireframes. Established the Dual-Value (LV/TV) logic and the basic 5-stage application journey.
              </p>
            </div>
            
            <!-- V2.0 -->
            <div class="relative pl-6">
              <div class="absolute -left-[9px] top-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <h4 class="font-bold text-gray-900">Version 2.0: High-Fi Prototype</h4>
              <p class="text-sm text-gray-600 mt-2">
                <strong>Focus:</strong> Visual design and basic interactions.<br>
                <strong>Action:</strong> Developed the initial Vue 3 prototype and gathered preliminary feedback.<br>
                <span class="inline-block mt-2 px-3 py-1.5 bg-orange-100 text-orange-800 rounded-md text-xs font-medium">
                  💡 Insight: Users found the early version slightly dry and requested more engaging, gamified elements and basic tasks to practice.
                </span>
              </p>
            </div>

            <!-- V3.0 (加入了游戏化和正式测试) -->
            <div class="relative pl-6">
              <div class="absolute -left-[9px] top-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
              <h4 class="font-bold text-gray-900">Version 3.0: Gamification & Evaluation</h4>
              <p class="text-sm text-gray-600 mt-2">
                <strong>Focus:</strong> Gamification and engagement.<br>
                <strong>Action:</strong> Added basic task mechanics and simple mini-games. Conducted formal user testing and SUS evaluation with this version.<br>
                <span class="inline-block mt-2 px-3 py-1.5 bg-orange-100 text-orange-800 rounded-md text-xs font-medium">
                  💡 Insight from Testing: Year 2 students lacked urgency and felt disconnected from advanced tasks. Diverse language support was needed for international students.
                </span>
              </p>
            </div>
            
            <!-- V4.0 (目前的最终版展示) -->
            <div class="relative pl-6">
              <div class="absolute -left-[9px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-[0_0_10px_#22c55e]"></div>
              <h4 class="font-bold text-gray-900">Version 4.0: Feature Expansion (Current Demo)</h4>
              <p class="text-sm text-gray-600 mt-2">
                <strong>Focus:</strong> Personalization and inclusivity.<br>
                <strong>Action:</strong> Based on the V3.0 formal evaluation feedback, we implemented 3 major updates to the final system:
              </p>
              <ul class="text-sm text-gray-700 mt-3 space-y-2 list-none">
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✅</span>
                  <span><strong>Role Differentiation:</strong> Split paths into 'Explorer' (Year 2) and 'Sprint' (Year 3) with customized visuals and tasks.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✅</span>
                  <span><strong>Expanded TV Quests:</strong> Upgraded from basic tasks to specific mini-games (e.g., Email Scramble, Timeline Puzzle) tailored to roles.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✅</span>
                  <span><strong>Full Bilingual Support:</strong> Added a seamless EN/ZH toggle across the entire system.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- === 结束：项目迭代时间线 === -->


      </section>

      <!-- Section 7: Design Decisions -->
      <section id="design-decisions" class="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span> Design Decisions
        </h2>

        <div class="bg-gray-50 rounded-xl p-6">
          <img src="/images/docx/module5_prototype/image_012.png" alt="Design Decisions" class="max-w-full mx-auto rounded-lg">
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
/**
 * Prototype & Implementation Showcase
 * Module 5 content with images from docx files
 */

import ModuleHeader from './portfolio/ModuleHeader.vue'
import TableOfContents from './portfolio/TableOfContents.vue'

const coreSteps = [
  { 
    title: 'Register & Select Role', 
    desc: 'Choose a path matching your readiness: The Explorer (Year 2) for early exploration, or The Sprint (Year 3) for active execution.' 
  },
  { 
    title: 'Embark on Dual-Path Stages', 
    desc: 'Progress through a tailored 5-stage journey. Explorers focus on "Identity & Research", while Sprinters tackle "Goals, Materials & Interviews".' 
  },
  { 
    title: 'Accumulate LV & TV via Mini-Games', 
    desc: 'Earn values through role-specific challenges (e.g., "Timeline Puzzle" for Explorers, "School Matcher" for Sprinters).' 
  },
  { 
    title: 'Unlock Targeted Strategies', 
    desc: 'Reach value thresholds to unlock exclusive, role-specific application guides and templates to bridge your exact knowledge gaps.' 
  },
  { 
    title: 'Data-Driven Advisor Guidance', 
    desc: 'Advisors review student progress and knowledge gap tags on their dashboard to provide highly targeted offline support.' 
  }
]

const stages = [
  { icon: '🎓', name: 'School Selection', borderClass: 'border-blue-200 bg-blue-50' },
  { icon: '📄', name: 'Documents', borderClass: 'border-green-200 bg-green-50' },
  { icon: '✍️', name: 'Essay Writing', borderClass: 'border-purple-200 bg-purple-50' },
  { icon: '📨', name: 'Application', borderClass: 'border-yellow-200 bg-yellow-50' },
  { icon: '🎤', name: 'Interview', borderClass: 'border-red-200 bg-red-50' }
]

const tocItems = [
  { id: 'user-journey', title: '👤 User Journey' },
  { id: 'application-stages', title: '🎮 Dual-Path Application Stages' },
  { id: 'dual-value', title: '📊 Dual Value System' },
  { id: 'gamification-loops', title: '🌳Growth Visualization & Loop' },
  { id: 'system-architecture', title: '🏗️ System Architecture' },
  { id: 'data-flow', title: '🔄 Data Flow & Processing' },
  { id: 'prototype-evolution', title: '📈 Prototype Evolution' },
  { id: 'design-decisions', title: '🎯 Design Decisions' }
]
</script>

<style scoped>
.prototype-showcase {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Custom scrollbar for horizontal scrolling */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

th:first-child,
td:first-child {
  border-radius: 8px 0 0 8px;
}

th:last-child,
td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>