<template>
  <div class="email-scramble">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <button @click="handleExit" class="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          {{ isZh ? '退出' : 'Exit' }}
        </button>
        <div>
          <h2 class="text-2xl font-black text-slate-700 tracking-tight">
            {{ isZh ? '邮件拼图' : 'Email Scramble' }}
          </h2>
          <p class="text-sm text-slate-500 font-medium mt-1">
            {{ isZh ? '排序邮件段落，学习申请沟通技巧' : 'Arrange email sections to learn application communication skills' }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span v-if="gameStarted && !showResults"
              class="text-xs font-bold px-2 py-1 rounded-lg border"
              :class="timeLeft <= 20 ? 'text-red-600 bg-red-50 border-red-200' : 'text-slate-600 bg-slate-50 border-slate-200'">
          ⏳ {{ timeLeft }}s
        </span>
        <button
          v-if="gameStarted && !showResults && (inventory?.timeFreezes || 0) > 0"
          @click="activateTimeFreeze"
          :disabled="freezeActive"
          class="text-xs font-bold px-2 py-1 rounded-lg border transition-colors"
          :class="freezeActive ? 'text-slate-400 bg-slate-100 border-slate-200 cursor-not-allowed' : 'text-cyan-700 bg-cyan-50 border-cyan-200 hover:bg-cyan-100'">
          {{ freezeActive ? (isZh ? `冻结中 ${freezeLeft}s` : `Frozen ${freezeLeft}s`) : (isZh ? `时停 x${inventory.timeFreezes}` : `Freeze x${inventory.timeFreezes}`) }}
        </button>
        <div class="text-sm font-bold text-[#E3B75C] bg-[#E3B75C]/15 px-4 py-2 rounded-xl border border-[#E3B75C]/30">
          🎯 TV {{ isZh ? '加成' : 'Bonus' }}: +{{ (tvBonus * 100).toFixed(0) }}%
        </div>
      </div>
    </div>

    <div v-if="!gameStarted" class="space-y-4">
      <div class="bg-slate-50 rounded-xl p-4">
        <p class="text-sm text-slate-600 mb-2 font-medium">
          {{ isZh ? '📋 游戏规则：' : '📋 How to Play:' }}
        </p>
        <ul class="text-sm text-slate-500 space-y-1">
          <li>{{ isZh ? '• 阅读打乱顺序的邮件段落' : '• Read the scrambled email sections' }}</li>
          <li>{{ isZh ? '• 按正确的逻辑顺序拖拽排列' : '• Drag and arrange in the correct logical order' }}</li>
          <li>{{ isZh ? '• 排序正确获得 TV 奖励' : '• Correct ordering earns TV rewards' }}</li>
          <li>{{ isZh ? '• 学习专业的申请邮件写作技巧' : '• Learn professional application email writing skills' }}</li>
          <li>{{ isZh ? `• 高级推荐信场景：${recommendationUnlocked ? '已解锁' : '需 Recommendation Lv1'}` : `• Advanced recommendation scenario: ${recommendationUnlocked ? 'Unlocked' : 'Need Recommendation Lv1'}` }}</li>
        </ul>
      </div>

      <button @click="startGame"
              class="w-full py-3 bg-[#7FA1ED] text-white rounded-xl font-bold text-sm hover:bg-[#5B78BA] transition-colors shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none">
        {{ isZh ? '开始游戏 →' : 'Start Game →' }}
      </button>
    </div>

    <div v-else-if="showResults" class="bg-white rounded-2xl border border-slate-200 p-8 text-center">
      <div class="text-6xl mb-4">🎉</div>
      <h3 class="text-2xl font-black text-slate-700 mb-2">
        {{ isZh ? '完成！' : 'Complete!' }}
      </h3>
      <p class="text-slate-500 mb-6">
        {{ isZh ? '你已完成所有邮件排序挑战' : 'You have completed all email scramble challenges' }}
      </p>

      <div class="bg-slate-50 rounded-xl p-5 mb-6 inline-block text-left w-full max-w-xs">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-slate-600">{{ isZh ? '总得分' : 'Total Score' }}:</span>
          <span class="font-bold text-emerald-600">{{ score }} / {{ activeChallenges.length }}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-slate-600">{{ isZh ? '奖励 TV' : 'Earned TV' }}:</span>
          <span class="font-bold text-[#E3B75C]">+{{ earnedTV }}</span>
        </div>
        <div class="flex justify-between items-center pb-2 border-b border-slate-200">
          <span class="text-sm text-slate-600">{{ isZh ? '装备加成' : 'Gear Bonus' }}:</span>
          <span class="font-bold text-amber-500">+{{ (tvBonus * 100).toFixed(0) }}%</span>
        </div>
        <div class="flex justify-between items-center mt-3">
          <span class="text-sm font-bold text-slate-800">{{ isZh ? '最终总计' : 'Final Total' }}:</span>
          <span class="text-2xl font-black text-[#7FA1ED]">+{{ totalEarnedTV }}</span>
        </div>
      </div>

      <button @click="handleClaim"
              class="px-8 py-3 bg-[#7FA1ED] hover:bg-[#6B91DD] text-white rounded-xl font-bold shadow-[0_4px_0_#5B78BA] active:translate-y-[4px] active:shadow-none transition-all">
        {{ isZh ? '领取奖励并返回' : 'Claim & Return' }}
      </button>
    </div>

    <div v-else class="space-y-4">
      <div class="flex items-center justify-between mb-2">
        <span class="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg">
            {{ isZh ? '挑战' : 'Challenge' }} {{ currentChallenge + 1 }} / {{ activeChallenges.length }}
        </span>
        <div class="flex items-center gap-3">
          <div class="flex gap-1.5">
              <div v-for="i in activeChallenges.length" :key="i" class="w-2 h-2 rounded-full" :class="i <= currentChallenge + 1 ? 'bg-[#FF9F43]' : 'bg-slate-300'"></div>
          </div>
          <span class="text-sm font-bold text-[#7FA1ED] bg-[#7FA1ED]/20 px-3 py-1 rounded-full">
            +{{ earnedTV }} TV
          </span>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-[0_2px_0_#E2E8F0] p-5">
        <h3 class="font-bold text-slate-700 mb-1">{{ currentChallengeData.title }}</h3>
        <p class="text-sm text-slate-500">{{ currentChallengeData.description }}</p>
      </div>

      <div class="space-y-3">
        <div v-for="(section, idx) in userOrder" :key="section.id"
             class="bg-white rounded-xl border-2 border-slate-200 p-4 flex items-center gap-4 shadow-[0_2px_0_#E2E8F0] hover:border-[#7FA1ED] transition-colors cursor-grab active:cursor-grabbing"
             draggable="true"
             @dragstart="onDragStart(idx)"
             @dragover.prevent
             @drop="onDrop(idx)"
             @dragenter.prevent>
          <div class="w-10 h-10 rounded-xl bg-[#7FA1ED]/10 text-[#7FA1ED] font-bold text-sm flex items-center justify-center shrink-0">
            {{ idx + 1 }}
          </div>
          <div class="flex-1">
            <p class="text-sm text-slate-700 font-medium leading-relaxed">{{ section.text }}</p>
          </div>
          <div class="flex flex-col gap-1">
            <button @click="moveUp(idx)" :disabled="idx === 0" class="p-1 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <button @click="moveDown(idx)" :disabled="idx === userOrder.length - 1" class="p-1 rounded hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <button @click="checkOrder"
              class="w-full py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-colors shadow-[0_4px_0_#000000] active:translate-y-[4px] active:shadow-none">
        {{ isZh ? '提交排序 →' : 'Submit Order →' }}
      </button>

      <div v-if="feedback" class="rounded-xl p-4 border animate-fade-in-up"
           :class="feedback.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-bold text-lg" :class="feedback.correct ? 'text-emerald-700' : 'text-amber-700'">
            {{ feedback.correct ? (isZh ? '排序正确！' : 'Correct Order!') : (isZh ? '排序错误' : 'Incorrect Order') }}
          </span>
          <span v-if="feedback.correct" class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg">
            +{{ 15 + Math.floor(15 * tvBonus) }} TV
          </span>
        </div>
        <p class="text-sm" :class="feedback.correct ? 'text-emerald-600' : 'text-amber-600'">
          {{ feedback.message }}
        </p>
      </div>

      <button v-if="feedback" @click="nextChallenge"
              class="w-full py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-900 transition-colors shadow-[0_4px_0_#000000]">
        {{ currentChallenge < activeChallenges.length - 1 ? (isZh ? '下一题 →' : 'Next Challenge →') : (isZh ? '查看结果 🎉' : 'See Results 🎉') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { calculateTVBonus } from '../data/gearConfig'

const props = defineProps({
  gearState: { type: Object, default: () => ({}) },
  isZh: { type: Boolean, default: false },
  inventory: { type: Object, default: () => ({ timeFreezes: 0 }) }
})

const emit = defineEmits(['complete', 'exit', 'use-item'])

const gameStarted = ref(false)
const currentChallenge = ref(0)
const earnedTV = ref(0)
const score = ref(0)
const feedback = ref(null)
const showResults = ref(false)
const dragIndex = ref(null)
const tvBonus = computed(() => calculateTVBonus(props.gearState))
const totalEarnedTV = computed(() => earnedTV.value + Math.floor(earnedTV.value * tvBonus.value))
const recommendationUnlocked = computed(() => (props.gearState?.recommendation || 0) >= 1)
const timeLeft = ref(150)
const freezeLeft = ref(0)
const freezeActive = ref(false)
let timerInterval = null
let freezeInterval = null

const challenges = computed(() => props.isZh ? [
  {
    title: '📧 感谢邮件',
    description: '将面试感谢邮件按正确的逻辑顺序排列',
    sections: [
      { id: 'a', text: '尊敬的张教授，感谢您在百忙之中于2025年3月15日安排了面试，与您的交流让我受益匪浅。', order: 1 },
      { id: 'b', text: '通过这次面试，我更加深入地了解了贵校人工智能实验室的研究方向，特别是自然语言处理领域的前沿工作。', order: 2 },
      { id: 'c', text: '关于您提出的多模态学习的技术问题，我在面试后进行了深入思考，并查阅了最新的相关论文。', order: 3 },
      { id: 'd', text: '我对该项目的跨模态特征对齐方法有一些新的想法，已整理成简要的思路文档随邮件附上。', order: 4 },
      { id: 'e', text: '再次感谢您的宝贵时间和指导。期待有机会加入您的研究团队，祝您工作顺利！', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 套磁邮件',
    description: '将学术套磁邮件按正确的逻辑顺序排列',
    sections: [
      { id: 'a', text: '尊敬的李教授，我是XX大学计算机系大四学生，平均绩点3.8/4.0，研究方向为机器学习与计算机视觉。', order: 1 },
      { id: 'b', text: '拜读了您团队在ICLR 2025上关于视觉Transformer的最新论文，对其中的自适应注意力机制设计非常感兴趣。', order: 2 },
      { id: 'c', text: '我本科期间参与了基于ResNet改进的图像分类项目，发表了一篇会议论文，并在Kaggle竞赛中获得前5%的排名。', order: 3 },
      { id: 'd', text: '我希望申请贵实验室2026年秋季入学的硕士项目，计划在多模态学习和视觉语言模型方向深入研究。', order: 4 },
      { id: 'e', text: '随信附上我的简历和成绩单，感谢您在百忙之中阅读。期待您的回复！', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 材料补充邮件',
    description: '将补充申请材料的邮件按正确的逻辑顺序排列',
    sections: [
      { id: 'a', text: '尊敬的招生委员会，我是已提交贵校2026年秋季计算机科学硕士申请的王同学，申请编号CS-2026-0158。', order: 1 },
      { id: 'b', text: '写此邮件是为了补充更新以下申请材料：1. 最新的雅思成绩从7.0提升至7.5；2. 新发表的期刊论文。', order: 2 },
      { id: 'c', text: '论文已于2025年4月发表在IEEE Transactions on Pattern Analysis上，研究基于图神经网络的社交网络分析方法。', order: 3 },
      { id: 'd', text: '这些更新进一步证明了我在学术研究方面的能力和持续进步，希望能为我的申请增添竞争力。', order: 4 },
      { id: 'e', text: '感谢您的审阅。如有任何问题，请随时与我联系。祝好！', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 推荐信催办（高级）',
    description: '在不冒犯教授的前提下，礼貌催办推荐信并提供可执行信息',
    sections: [
      { id: 'a', text: '尊敬的王教授，感谢您此前同意为我撰写研究生申请推荐信。', order: 1 },
      { id: 'b', text: '考虑到系统截止时间为11月20日（英国时间23:59），我想确认您是否还需要我补充材料。', order: 2 },
      { id: 'c', text: '我已将更新后的CV、项目摘要与成绩单链接整理在文末，便于您快速查阅。', order: 3 },
      { id: 'd', text: '若您时间紧张，我也准备了要点草稿供参考，当然最终内容完全以您的判断为准。', order: 4 },
      { id: 'e', text: '非常感谢您的指导与支持，如有任何我可协助的部分，请随时告知。', order: 5 },
      { id: 'f', text: '此致敬礼，李明（学号：20231234）', order: 6 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    advanced: true
  }
] : [
  {
    title: '📧 Thank You Email',
    description: 'Arrange the post-interview thank you email in the correct logical order',
    sections: [
      { id: 'a', text: 'Dear Professor Zhang, thank you for taking the time to schedule the interview on March 15, 2025. The conversation was incredibly insightful.', order: 1 },
      { id: 'b', text: 'Through this interview, I gained a deeper understanding of your AI Lab\'s research directions, particularly the cutting-edge work in natural language processing.', order: 2 },
      { id: 'c', text: 'Regarding the technical question on multimodal learning you raised, I have reflected further and reviewed the latest related papers after the interview.', order: 3 },
      { id: 'd', text: 'I have some new ideas on the cross-modal feature alignment approach, which I have summarized in a brief document attached to this email.', order: 4 },
      { id: 'e', text: 'Thank you again for your valuable time and guidance. I look forward to the opportunity to join your research team. Best regards!', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 Cold Outreach Email',
    description: 'Arrange the academic outreach email in the correct logical order',
    sections: [
      { id: 'a', text: 'Dear Professor Li, I am a senior student from the Computer Science department at XX University with a GPA of 3.8/4.0, specializing in machine learning and computer vision.', order: 1 },
      { id: 'b', text: 'I recently read your team\'s latest paper on Vision Transformers at ICLR 2025 and found the adaptive attention mechanism design particularly fascinating.', order: 2 },
      { id: 'c', text: 'During my undergraduate studies, I participated in an image classification project based on ResNet improvements, published a conference paper, and ranked top 5% in a Kaggle competition.', order: 3 },
      { id: 'd', text: 'I wish to apply for your lab\'s Master\'s program starting Fall 2026, with plans to conduct in-depth research in multimodal learning and vision-language models.', order: 4 },
      { id: 'e', text: 'I have attached my CV and transcript for your reference. Thank you for taking the time to read this email. I look forward to hearing from you!', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 Document Supplement Email',
    description: 'Arrange the application supplement email in the correct logical order',
    sections: [
      { id: 'a', text: 'Dear Admissions Committee, I am Wang, who has submitted an application for your Fall 2026 Computer Science Master\'s program, with application number CS-2026-0158.', order: 1 },
      { id: 'b', text: 'I am writing to supplement my application with the following updated materials: 1. Latest IELTS score improved from 7.0 to 7.5; 2. A newly published journal paper.', order: 2 },
      { id: 'c', text: 'The paper was published in IEEE Transactions on Pattern Analysis in April 2025, focusing on graph neural network-based social network analysis methods.', order: 3 },
      { id: 'd', text: 'These updates further demonstrate my academic research capabilities and continuous improvement, which I hope will strengthen my application.', order: 4 },
      { id: 'e', text: 'Thank you for your review. Please do not hesitate to contact me if you have any questions. Best regards!', order: 5 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e']
  },
  {
    title: '📧 Recommendation Reminder (Advanced)',
    description: 'Politely remind a professor about a recommendation letter with clear action items',
    sections: [
      { id: 'a', text: 'Dear Professor Wang, thank you again for agreeing to write my graduate recommendation letter.', order: 1 },
      { id: 'b', text: 'As the submission deadline is 20 Nov (23:59 UK time), I wanted to check whether any additional materials from me would be helpful.', order: 2 },
      { id: 'c', text: 'I have attached an updated CV, project summary, and transcript links for quick reference.', order: 3 },
      { id: 'd', text: 'If useful, I also drafted bullet-point highlights; please feel free to use or ignore them at your discretion.', order: 4 },
      { id: 'e', text: 'Thank you sincerely for your time and guidance. I am happy to assist with any follow-up information.', order: 5 },
      { id: 'f', text: 'Best regards, Ming Li (Student ID: 20231234)', order: 6 }
    ],
    correctOrder: ['a', 'b', 'c', 'd', 'e', 'f'],
    advanced: true
  }
])

const activeChallenges = computed(() =>
  challenges.value.filter((item) => !item.advanced || recommendationUnlocked.value)
)

const currentChallengeData = computed(() => activeChallenges.value[currentChallenge.value])

const shuffledSections = computed(() => {
  if (!currentChallengeData.value) return []
  return [...currentChallengeData.value.sections].sort(() => Math.random() - 0.5)
})

const userOrder = ref([])

function startGame() {
  gameStarted.value = true
  currentChallenge.value = 0
  earnedTV.value = 0
  score.value = 0
  feedback.value = null
  showResults.value = false
  timeLeft.value = recommendationUnlocked.value ? 180 : 150
  freezeLeft.value = 0
  freezeActive.value = false
  clearIntervals()
  timerInterval = setInterval(() => {
    if (freezeActive.value || !gameStarted.value || showResults.value) return
    if (timeLeft.value <= 1) {
      timeLeft.value = 0
      showResults.value = true
      clearIntervals()
      return
    }
    timeLeft.value -= 1
  }, 1000)
  userOrder.value = [...shuffledSections.value]
}

function onDragStart(idx) {
  dragIndex.value = idx
}

function onDrop(idx) {
  if (dragIndex.value === null) return
  const item = userOrder.value.splice(dragIndex.value, 1)[0]
  userOrder.value.splice(idx, 0, item)
  dragIndex.value = null
}

function moveUp(idx) {
  if (idx === 0) return
  const temp = userOrder.value[idx]
  userOrder.value[idx] = userOrder.value[idx - 1]
  userOrder.value[idx - 1] = temp
}

function moveDown(idx) {
  if (idx === userOrder.value.length - 1) return
  const temp = userOrder.value[idx]
  userOrder.value[idx] = userOrder.value[idx + 1]
  userOrder.value[idx + 1] = temp
}

function checkOrder() {
  const userSequence = userOrder.value.map(s => s.id)
  const correctSequence = currentChallengeData.value.correctOrder
  const isCorrect = JSON.stringify(userSequence) === JSON.stringify(correctSequence)
  
  if (isCorrect) {
    earnedTV.value += currentChallengeData.value.advanced ? 20 : 15
    score.value++
  }
  
  feedback.value = {
    correct: isCorrect,
    message: isCorrect
      ? (props.isZh ? '完美的排序！你的邮件逻辑非常清晰。' : 'Perfect ordering! Your email logic is crystal clear.')
      : (props.isZh ? '不太对哦，试试按照"问候→背景→内容→附件→结尾"的逻辑重新排列。' : 'Not quite right. Try arranging in "Greeting → Background → Content → Attachments → Closing" logic.')
  }
}

function nextChallenge() {
  feedback.value = null
  if (currentChallenge.value < activeChallenges.value.length - 1) {
    currentChallenge.value++
    userOrder.value = [...shuffledSections.value]
  } else {
    showResults.value = true
    clearIntervals()
  }
}

function activateTimeFreeze() {
  if (freezeActive.value || !gameStarted.value || showResults.value) return
  const available = props.inventory?.timeFreezes || 0
  if (available <= 0) return
  freezeActive.value = true
  freezeLeft.value = 10
  emit('use-item', { itemId: 'time-freeze', amount: 1 })
  if (freezeInterval) clearInterval(freezeInterval)
  freezeInterval = setInterval(() => {
    if (freezeLeft.value <= 1) {
      freezeLeft.value = 0
      freezeActive.value = false
      clearInterval(freezeInterval)
      freezeInterval = null
      return
    }
    freezeLeft.value -= 1
  }, 1000)
}

function handleClaim() {
  clearIntervals()
  emit('complete', { tv: totalEarnedTV.value, score: score.value })
  handleExit()
}

function handleExit() {
  clearIntervals()
  emit('exit')
}

function clearIntervals() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  if (freezeInterval) {
    clearInterval(freezeInterval)
    freezeInterval = null
  }
}

onUnmounted(() => {
  clearIntervals()
})
</script>

<style scoped>
.email-scramble { font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif; }
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out both; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
