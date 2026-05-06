<template>
  <div class="game-dashboard">
    <div class="grid md:grid-cols-2 gap-5 mb-8">
      
      <div class="bg-white rounded-[1.5rem] border-2 border-[#7FA1ED] p-5 shadow-[0_6px_0_#5B78BA] transition-all duration-300"
           :class="{ 'scale-[1.02] -translate-y-1 shadow-[0_8px_30px_rgba(127,161,237,0.4)]': isLearningBumping }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="p-2.5 bg-blue-50 rounded-xl text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <span class="font-extrabold text-slate-700 tracking-tight">Learning Value</span>
          </div>
          <span class="text-4xl font-black text-blue-600 font-variant-numeric: tabular-nums transition-transform duration-300"
                :class="{ 'scale-110': isLearningBumping }">{{ animatedLearning }}</span>
        </div>
        <div class="relative h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner p-1">
          <div class="absolute top-1 left-1 bottom-1 rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-1.5 progress-striped-blue shadow-sm" 
               :style="{ width: `calc(${Math.min((learningValue / 100) * 100, 100)}% - 8px)` }">
               <svg v-if="learningValue > 0" class="w-4 h-4 text-white/90 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="flex justify-between mt-3 text-xs font-bold text-slate-400 items-center">
          <span>0</span>
          <span class="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-[10px] sm:text-xs truncate max-w-[140px] sm:max-w-none">Next unlock: 100 pts</span>
          <span>100</span>
        </div>
      </div>

      <div class="bg-white rounded-[1.5rem] border-2 border-[#E3B75C] p-5 shadow-[0_6px_0_#B38A3B] transition-all duration-300"
           :class="{ 'scale-[1.02] -translate-y-1 shadow-[0_8px_30px_rgba(227,183,92,0.4)]': isTaskBumping }">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="p-2.5 bg-amber-50 rounded-xl text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <span class="font-extrabold text-slate-700 tracking-tight">Task Value</span>
          </div>
          <span class="text-4xl font-black text-amber-500 font-variant-numeric: tabular-nums transition-transform duration-300"
                :class="{ 'scale-110': isTaskBumping }">{{ animatedTask }}</span>
        </div>
        <div class="relative h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner p-1">
          <div class="absolute top-1 left-1 bottom-1 rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-1.5 progress-striped-amber shadow-sm" 
               :style="{ width: `calc(${Math.min((taskValue / 200) * 100, 100)}% - 8px)` }">
               <svg v-if="taskValue > 0" class="w-4 h-4 text-white/90 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
        </div>
        <div class="flex justify-between mt-3 text-xs font-bold text-slate-400 items-center">
          <span>0</span>
          <span class="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-[10px] sm:text-xs truncate max-w-[140px] sm:max-w-none">Next unlock: 200 pts</span>
          <span>200</span>
        </div>
      </div>
    </div>

    <div class="mb-10">
      <button @click="showAdvisorTools = !showAdvisorTools"
              class="w-full bg-gradient-to-r from-[#7FA1ED]/5 to-[#5B78BA]/5 rounded-2xl border border-[#7FA1ED]/20 px-5 py-4 flex items-center justify-between hover:border-[#7FA1ED]/40 transition-all group">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-[#7FA1ED]/15 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#5B78BA]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 class="text-sm font-bold text-[#5B78BA] uppercase tracking-wide">
            {{ isZh ? '导师工具' : 'Advisor Tools' }}
          </h3>
          <span class="px-2 py-0.5 bg-[#7FA1ED]/10 text-[#5B78BA] text-[10px] font-bold rounded-full">
            {{ isZh ? '仅限导师' : 'Advisor Only' }}
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#5B78BA] transition-transform duration-300" :class="{ 'rotate-180': showAdvisorTools }"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <Transition name="collapse">
        <div v-if="showAdvisorTools" class="bg-gradient-to-r from-[#7FA1ED]/5 to-[#5B78BA]/5 rounded-b-2xl border border-t-0 border-[#7FA1ED]/20 px-5 pb-5 pt-3 -mt-px">
          <p class="text-xs text-slate-400 mb-4">
            {{ isZh ? '以下功能由导师用于调试和演示目的：授予学习值、任务值、重置进度、查看导师仪表板。' : 'These functions are used by advisors for testing and demo purposes: grant LV, TV, reset progress, and view the advisor dashboard.' }}
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <button @click="$emit('add-learning')" class="flex items-center gap-2 px-4 py-2.5 bg-blue-50 shadow-[0_3px_0_#BFDBFE] text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-100 active:translate-y-[3px] active:shadow-none transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              +10 LV
            </button>
            <button @click="$emit('add-task')" class="flex items-center gap-2 px-4 py-2.5 bg-amber-50 shadow-[0_3px_0_#FDE68A] text-amber-600 rounded-xl text-sm font-bold hover:bg-amber-100 active:translate-y-[3px] active:shadow-none transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              +10 TV
            </button>
            <button @click="$emit('show-advisor')" class="flex items-center gap-2 px-4 py-2.5 bg-[#7FA1ED]/10 shadow-[0_3px_0_#5B78BA]/30 text-[#5B78BA] rounded-xl text-sm font-bold hover:bg-[#7FA1ED]/20 active:translate-y-[3px] active:shadow-none transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              {{ isZh ? '导师仪表板' : 'Advisor Dashboard' }}
            </button>
            <button @click="$emit('reset-progress')" class="flex items-center gap-2 px-4 py-2.5 bg-red-50 shadow-[0_3px_0_#FECACA] text-red-500 rounded-xl text-sm font-bold hover:bg-red-100 active:translate-y-[3px] active:shadow-none transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21v-5h5"/></svg>
              {{ isZh ? '重置进度' : 'Reset' }}
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <div v-if="currentCombo > 0" class="mb-8 flex justify-center">
      <div class="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 border border-amber-200 rounded-2xl transition-transform">
        <span class="text-2xl animate-bounce">
          {{ currentCombo >= 10 ? '🌟' : currentCombo >= 5 ? '🔥' : currentCombo >= 3 ? '⚡' : '💫' }}
        </span>
        <div class="text-center">
          <div class="text-xs text-amber-600 font-bold uppercase tracking-wide">Combo</div>
          <div class="text-lg font-black text-amber-500">{{ currentCombo }} <span class="text-sm font-semibold">in a row</span></div>
        </div>
        <div v-if="currentCombo >= 3" class="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full font-bold">
          +{{ currentCombo >= 10 ? 50 : currentCombo >= 5 ? 25 : 15 }}% bonus
        </div>
      </div>
    </div>

    <KnowledgeTree 
      :completed-levels="completedLevels"
      :current-level="currentLevelIndex >= 0 ? levels[currentLevelIndex]?.id : ''"
      :total-learning="learningValue"
      :total-task="taskValue"
      :max-combo="maxCombo"
      :days-streak="daysStreak"
      :is-zh="isZh"
      :user-role="userRole"
      @select-stage="handleStageSelect"
    />

    <Transition name="fade">
      <div v-if="socialToast" class="fixed top-6 left-1/2 -translate-x-1/2 z-[60] px-5 py-3 rounded-2xl shadow-xl text-sm font-bold flex items-center gap-2 animate-slide-down"
           :class="socialToast.type === 'water' ? 'bg-blue-500 text-white' : socialToast.type === 'add' ? 'bg-green-500 text-white' : 'bg-slate-700 text-white'">
        <span class="text-lg">{{ socialToast.icon }}</span>
        <span>{{ socialToast.message }}</span>
      </div>
    </Transition>

    <div class="mt-8 bg-white rounded-[2rem] border border-slate-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-black text-slate-700 flex items-center gap-2">
          <span class="text-xl">👥</span>
          <span>{{ isZh ? '社交中心' : 'Social Hub' }}</span>
        </h3>
        <div class="flex items-center gap-2 text-sm text-green-600 font-bold">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          {{ friends.length }} {{ isZh ? '位好友' : 'friends' }}
        </div>
      </div>

      <div class="mb-4 bg-slate-50 rounded-xl px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-500 font-medium">{{ isZh ? '我的邀请码' : 'My Invite Code' }}:</span>
          <span class="font-mono font-bold text-sm text-[#5B78BA] bg-[#7FA1ED]/10 px-3 py-1 rounded-lg select-all tracking-wider">{{ myInviteCode }}</span>
        </div>
        <button @click="copyInviteCode"
                class="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-bold rounded-lg transition-colors">
          📋 {{ isZh ? '复制' : 'Copy' }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-green-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-sm text-green-700">{{ isZh ? '👥 好友列表' : '👥 Friends' }}</h4>
            <button @click="showAddFriend = !showAddFriend"
                    class="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors">
              + {{ isZh ? '添加' : 'Add' }}
            </button>
          </div>
          <div v-if="showAddFriend" class="mb-3">
            <div class="flex gap-2 mb-2">
              <input v-model="friendCode" type="text" :placeholder="isZh ? '输入邀请码' : 'Enter code'"
                     class="flex-1 px-3 py-2 border border-green-200 rounded-lg text-xs focus:outline-none focus:border-green-400 font-mono" />
              <button @click="addFriend" class="px-3 py-2 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600">
                {{ isZh ? '添加' : 'OK' }}
              </button>
            </div>
            <p class="text-[10px] text-slate-400">
              {{ isZh ? '测试码：' : 'Test code: ' }}<span class="font-mono font-bold text-green-500">DEMO2024</span>
            </p>
          </div>
          <div class="space-y-2">
            <div v-for="friend in friends" :key="friend.id"
                 class="flex items-center justify-between bg-white rounded-lg p-2.5 shadow-sm">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-white flex items-center justify-center text-xs font-bold">
                  {{ friend.name.charAt(0) }}
                </div>
                <div>
                  <div class="font-bold text-slate-700 text-xs">{{ friend.name }}</div>
                  <div class="text-[10px] text-slate-400">
                    {{ friend.todayLV }} LV {{ isZh ? '今日' : 'today' }}
                    <span v-if="friend.lastWater" class="text-blue-400 ml-1">+3 💧</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-green-500 font-bold">{{ friend.streak }}{{ isZh ? '天' : 'd' }}</span>
                <button @click="waterFriend(friend)"
                        class="px-2 py-1 bg-blue-50 text-blue-500 text-[10px] font-bold rounded hover:bg-blue-100 transition-colors">
                  💧
                </button>
              </div>
            </div>
          </div>
          <button v-if="friends.length > 0" @click="waterAllFriends"
                  class="w-full mt-2 py-2 bg-green-500 text-white rounded-lg text-xs font-bold hover:bg-green-600 transition-colors">
            💧 {{ isZh ? '一键浇水' : 'Water All' }} (+3 LV)
          </button>
        </div>

        <div class="bg-amber-50 rounded-xl p-4">
          <h4 class="font-bold text-sm text-amber-700 mb-3">{{ isZh ? '🏆 排行榜' : '🏆 Leaderboard' }}</h4>
          <div class="space-y-1.5">
            <div v-for="(user, idx) in leaderboard" :key="user.id"
                 class="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm">
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                     :class="idx === 0 ? 'bg-yellow-400 text-yellow-800' : idx === 1 ? 'bg-gray-300 text-gray-700' : idx === 2 ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-600'">
                  {{ idx + 1 }}
                </div>
                <span class="font-medium text-slate-700 text-xs">{{ user.name }}</span>
                <span v-if="user.school" class="text-[9px] px-1.5 py-0.5 bg-blue-50 text-blue-500 rounded font-bold">{{ user.school }}</span>
              </div>
              <span class="text-xs font-bold text-amber-600">{{ user.totalLV }} LV</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedLevel" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity" @click.self="selectedLevel = null">
      <div class="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up border border-slate-100">
        <div class="p-6 pb-4" :class="getModalHeaderClass(selectedLevel)">
          <div class="flex justify-between items-start mb-2">
            <span class="text-4xl drop-shadow-sm">{{ selectedLevel.icon }}</span>
            <button @click="selectedLevel = null" class="text-slate-400 hover:text-slate-600 p-1 bg-white/50 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-white/60 shadow-sm" :class="getStatusBadgeClass(selectedLevel)">
              {{ getStatusText(selectedLevel) }}
            </span>
          </div>
          <h3 class="text-2xl font-black text-slate-800">{{ selectedLevel.title }}</h3>
        </div>

        <div class="p-6">
          <p class="text-slate-600 mb-6 font-medium">{{ selectedLevel.description }}</p>
          <div class="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
            <h4 class="text-xs font-bold text-slate-400 uppercase mb-2">Completion Rewards</h4>
            <div class="flex gap-4">
              <span class="flex items-center gap-1.5 font-bold text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                +{{ selectedLevel.rewards.learningValue }} LV
              </span>
              <span class="flex items-center gap-1.5 font-bold text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                +{{ selectedLevel.rewards.taskValue }} TV
              </span>
            </div>
          </div>

          <div class="flex gap-3">
            <button v-if="completedLevels.includes(selectedLevel.id)" class="flex-1 py-3 bg-[#75CD9D]/20 text-[#4D9C71] rounded-xl font-bold cursor-default">
              Level Completed ✓
            </button>
            <button v-else-if="isLocked(selectedLevel.id)" class="flex-1 py-3 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed">
              Locked 🔒
            </button>
            <button v-else @click="handleStartLevel" class="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold shadow-[0_4px_0_#2563eb] active:translate-y-[4px] active:shadow-none transition-all">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="unlockedStories.length > 0" class="mt-8 bg-white rounded-[2rem] border border-slate-200 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#7FA1ED]/10 rounded-full blur-3xl pointer-events-none"></div>

      <h3 class="text-xl font-black text-slate-700 mb-6 flex items-center gap-3 relative z-10">
        <span class="text-[#7FA1ED] text-2xl animate-pulse">📚</span>
        <span class="tracking-wide uppercase">Unlocked Strategies</span>
      </h3>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        <div v-for="storyId in unlockedStories" :key="storyId" 
             class="group relative bg-slate-50 border border-slate-100 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(127,161,237,0.15)] flex items-center gap-4"
             @click="$emit('view-story', storyId)">
          
          <div class="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_0_#E2E8F0] text-[#7FA1ED] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-slate-700 text-sm truncate group-hover:text-[#5B78BA] transition-colors">{{ getStoryTitle(storyId) }}</h4>
            <p class="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#75CD9D] animate-pulse"></span>
              Tap to decrypt
            </p>
          </div>
          
          <div class="text-slate-300 group-hover:text-[#7FA1ED] transform group-hover:translate-x-1 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { getGuideById } from '../data/guides'
import KnowledgeTree from './KnowledgeTree.vue'

const props = defineProps({
  userName: String,
  userRole: String,
  learningValue: Number,
  taskValue: Number,
  completedLevels: Array,
  unlockedStories: Array,
  currentCombo: { type: Number, default: 0 },
  maxCombo: { type: Number, default: 0 },
  daysStreak: { type: Number, default: 0 },
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['start-level', 'add-learning', 'add-task', 'view-story', 'reset-progress', 'switch-role', 'show-advisor', 'select-stage', 'toggle-language'])

const animatedLearning = ref(props.learningValue)
const animatedTask = ref(props.taskValue)
const isLearningBumping = ref(false)
const isTaskBumping = ref(false)

watch(() => props.learningValue, (newVal, oldVal) => { 
  animateValue(animatedLearning, oldVal, newVal, 1000) 
  if (newVal > oldVal) {
    isLearningBumping.value = true
    setTimeout(() => isLearningBumping.value = false, 300)
  }
})

watch(() => props.taskValue, (newVal, oldVal) => { 
  animateValue(animatedTask, oldVal, newVal, 1000) 
  if (newVal > oldVal) {
    isTaskBumping.value = true
    setTimeout(() => isTaskBumping.value = false, 300)
  }
})

function animateValue(target, start, end, duration) {
  const startTime = performance.now()
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    target.value = Math.round(start + (end - start) * easeProgress)
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

const levels = computed(() => {
  const role = props.userRole || 'explorer'
  const isExplorer = role === 'explorer' || role === 'confused'
  
  return [
    { 
      id: 'level-1', order: 1, 
      title: isExplorer ? 'Identity' : 'Goal Setting', 
      description: isExplorer ? 'Discover your true self & school fit' : 'Define your target programs', 
      icon: isExplorer ? '🌍' : '🎯', 
      unlockCondition: {}, 
      rewards: { learningValue: 20, taskValue: 10 }, 
      mapPosition: { x: 10, y: 50 },
      zhTitle: isExplorer ? '自我认知' : '目标设定',
      zhDescription: isExplorer ? '发现真实的自己与选校定位' : '明确你的目标申请项目'
    },
    { 
      id: 'level-2', order: 2, 
      title: isExplorer ? 'Research' : 'Materials', 
      description: isExplorer ? 'Explore programs & gather info' : 'Prepare application documents', 
      icon: isExplorer ? '🔍' : '📋', 
      unlockCondition: { requiredLevel: 'level-1' }, 
      rewards: { learningValue: 20, taskValue: 15 }, 
      mapPosition: { x: 28, y: 20 },
      zhTitle: isExplorer ? '信息调研' : '材料准备',
      zhDescription: isExplorer ? '探索项目、收集信息' : '准备申请材料'
    },
    { 
      id: 'level-3', order: 3, 
      title: isExplorer ? 'Essays' : 'Submission', 
      description: isExplorer ? 'Craft your personal story' : 'Finalize & submit apps', 
      icon: isExplorer ? '✍️' : '🚀', 
      unlockCondition: { requiredLevel: 'level-2' }, 
      rewards: { learningValue: 30, taskValue: 20 }, 
      mapPosition: { x: 50, y: 50 },
      zhTitle: isExplorer ? '文书写作' : '提交申请',
      zhDescription: isExplorer ? '撰写你的个人故事' : '完成并提交申请'
    },
    { 
      id: 'level-4', order: 4, 
      title: isExplorer ? 'Decisions' : 'Interview', 
      description: isExplorer ? 'Evaluate offers & choose' : 'Prepare for interviews', 
      icon: isExplorer ? '⚖️' : '💬', 
      unlockCondition: { requiredLevel: 'level-3' }, 
      rewards: { learningValue: 20, taskValue: 15 }, 
      mapPosition: { x: 72, y: 80 },
      zhTitle: isExplorer ? 'offer抉择' : '面试准备',
      zhDescription: isExplorer ? '评估offer并做出选择' : '准备面试'
    },
    { 
      id: 'level-5', order: 5, 
      title: isExplorer ? 'Next Step' : 'Success', 
      description: isExplorer ? 'Plan your next journey' : 'Celebrate your acceptances', 
      icon: isExplorer ? '🧭' : '🏆', 
      unlockCondition: { requiredLevel: 'level-4' }, 
      rewards: { learningValue: 30, taskValue: 20 }, 
      mapPosition: { x: 90, y: 50 },
      zhTitle: isExplorer ? '后续规划' : '收获成功',
      zhDescription: isExplorer ? '规划你的下一段旅程' : '庆祝你的录取'
    }
  ]
})

const selectedLevel = ref(null)
const showAdvisorTools = ref(true)
const showAddFriend = ref(false)
const friendCode = ref('')
const socialToast = ref(null)

let toastTimer = null
function showToast(icon, message, type = 'info') {
  socialToast.value = { icon, message, type }
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { socialToast.value = null }, 2500)
}

const myInviteCode = computed(() => {
  const name = props.userName || 'PLY'
  return `XJTLU-${name.toUpperCase().slice(0, 3)}-${String(Math.abs((props.learningValue || 0) * 7 + 42)).padStart(4, '0')}`
})

function copyInviteCode() {
  navigator.clipboard?.writeText(myInviteCode.value).then(() => {
    showToast('📋', props.isZh ? '邀请码已复制！' : 'Invite code copied!', 'info')
  }).catch(() => {
    showToast('📋', myInviteCode.value, 'info')
  })
}

const friends = ref([
  { id: 1, name: 'Alice', todayLV: 45, streak: 7, lastWater: false },
  { id: 2, name: 'Bob', todayLV: 30, streak: 3, lastWater: false },
  { id: 3, name: 'Charlie', todayLV: 20, streak: 1, lastWater: false }
])

const leaderboard = computed(() => [
  { id: 1, name: 'Alice', totalLV: 1250, school: 'XJTLU' },
  { id: 2, name: 'Bob', totalLV: 980, school: 'XJTLU' },
  { id: 3, name: props.userName || 'Player', totalLV: (props.learningValue || 0) + (props.taskValue || 0), school: 'XJTLU' },
  { id: 4, name: 'Charlie', totalLV: 750, school: null }
])

function addFriend() {
  if (!friendCode.value || friendCode.value.length === 0) return
  const code = friendCode.value.trim().toUpperCase()
  const testCodes = ['DEMO2024', 'TEST', 'XJTLU']
  const isTestCode = testCodes.some(tc => code.includes(tc))
  const newFriend = {
    id: Date.now(),
    name: isTestCode ? (props.isZh ? '新同学' : 'New Classmate') : `Friend-${code.slice(-4)}`,
    todayLV: isTestCode ? Math.floor(Math.random() * 30 + 10) : 0,
    streak: isTestCode ? Math.floor(Math.random() * 5) : 0,
    lastWater: false
  }
  friends.value.push(newFriend)
  friendCode.value = ''
  showAddFriend.value = false
  showToast('🎉', props.isZh ? `成功添加 ${newFriend.name}！` : `${newFriend.name} added!`, 'add')
}

function waterFriend(friend) {
  const idx = friends.value.findIndex(f => f.id === friend.id)
  if (idx === -1) return
  friends.value[idx].todayLV += 3
  friends.value[idx].lastWater = true
  showToast('💧', props.isZh ? `已给 ${friend.name} 浇水 +3 LV` : `Watered ${friend.name} +3 LV`, 'water')
  setTimeout(() => {
    const i = friends.value.findIndex(f => f.id === friend.id)
    if (i !== -1) friends.value[i].lastWater = false
  }, 2000)
}

function waterAllFriends() {
  friends.value.forEach(f => {
    f.todayLV += 3
    f.lastWater = true
  })
  showToast('💧', props.isZh ? `已给 ${friends.value.length} 位好友浇水！` : `Watered ${friends.value.length} friends!`, 'water')
  setTimeout(() => {
    friends.value.forEach(f => { f.lastWater = false })
  }, 2000)
}

const currentLevelIndex = computed(() => {
  const index = levels.value.findIndex(l => !props.completedLevels.includes(l.id))
  return index === -1 ? levels.value.length - 1 : index
})

const currentLevelPos = computed(() => levels.value[currentLevelIndex.value].mapPosition)

function openLevelModal(level) { selectedLevel.value = level }
function handleStartLevel() {
  emit('start-level', selectedLevel.value)
  selectedLevel.value = null
}

function handleStageSelect(stageId) {
  const level = levels.value.find(l => l.id === stageId)
  if (level) {
    openLevelModal(level)
  }
}

function getGameNodeClass(level) {
  if (props.completedLevels.includes(level.id)) {
    return 'bg-white border-2 border-[#75CD9D] shadow-[0_4px_0_#75CD9D] hover:-translate-y-1 hover:shadow-[0_6px_0_#75CD9D] cursor-pointer'
  }
  if (isLocked(level.id)) {
    return 'bg-slate-50 border-2 border-slate-200 shadow-inner opacity-70 cursor-not-allowed'
  }
  return 'bg-white border-2 border-[#E3B75C] shadow-[0_4px_0_#E3B75C] ring-4 ring-[#E3B75C]/20 animate-pulse cursor-pointer'
}

function getModalHeaderClass(level) {
  if (props.completedLevels.includes(level.id)) return 'bg-[#75CD9D]/10'
  if (isLocked(level.id)) return 'bg-slate-50'
  return 'bg-[#E3B75C]/10'
}

const stories = {
  'story-strategy': { title: 'Overseas Masters Application Strategy' },
  'story-essay': { title: 'Personal Statement Master Guide' },
  'story-school': { title: 'School Selection Strategy' },
  'story-cv': { title: 'CV Writing Excellence' },
  'story-interview': { title: 'Interview Preparation' }
}

function isLocked(levelId) {
  const level = levels.value.find(l => l.id === levelId)
  if (!level.unlockCondition.requiredLevel) return false
  return !props.completedLevels.includes(level.unlockCondition.requiredLevel)
}

function getStatusBadgeClass(level) {
  if (props.completedLevels.includes(level.id)) return 'text-[#4D9C71]'
  if (isLocked(level.id)) return 'text-slate-500'
  return 'text-[#B38A3B]'
}

function getStatusText(level) {
  if (props.completedLevels.includes(level.id)) return 'Completed'
  if (isLocked(level.id)) return 'Locked'
  return 'Current Level'
}

function getStoryTitle(storyId) {
  const guide = getGuideById(storyId)
  if (guide) return guide.title
  return stories[storyId]?.title || 'Strategy Guide'
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 640px) {
  .game-dashboard h2 { font-size: 1.125rem; }
}

.progress-striped-blue {
  background-color: #3b82f6;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  background-size: 1.5rem 1.5rem;
  animation: progress-move 1.5s linear infinite;
}
.progress-striped-amber {
  background-color: #f59e0b;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  background-size: 1.5rem 1.5rem;
  animation: progress-move 1.5s linear infinite;
}
@keyframes progress-move {
  0% { background-position: 0 0; }
  100% { background-position: 1.5rem 0; }
}
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes flow-dash {
  from { stroke-dashoffset: 16; }
  to { stroke-dashoffset: 0; }
}
.animate-flow-dash {
  animation: flow-dash 0.8s linear infinite;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
  max-height: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px);
}

@keyframes slide-down {
  from { opacity: 0; transform: translateX(-50%) translateY(-12px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.animate-slide-down {
  animation: slide-down 0.3s ease-out both;
}
</style>