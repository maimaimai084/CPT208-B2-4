<template>
  <div class="friend-tree-container w-full">
    <div class="bg-white rounded-2xl shadow-card p-6">
      <div class="text-center mb-6">
        <div class="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mx-auto mb-3 float-anim">🌳</div>
        <h2 class="font-bold text-xl text-slate-700">
          {{ isZh ? '好友树林' : 'Friend Tree' }}
        </h2>
        <p class="text-sm text-slate-500 mt-1">
          {{ isZh ? '与好友一起成长，互相激励' : 'Grow together with friends, motivate each other' }}
        </p>
      </div>

      <div v-if="!showAddFriend" class="space-y-4">
        <div class="bg-green-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-sm text-green-700">
              {{ isZh ? '👥 我的好友' : '👥 My Friends' }}
            </h3>
            <button 
              @click="showAddFriend = true"
              class="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              + {{ isZh ? '添加好友' : 'Add' }}
            </button>
          </div>

          <div v-if="friends.length === 0" class="text-center py-6 text-slate-400 text-sm">
            <div class="text-3xl mb-2">🌱</div>
            <div>{{ isZh ? '暂无好友，快去添加吧' : 'No friends yet, add some!' }}</div>
          </div>

          <div v-else class="space-y-2">
            <div 
              v-for="friend in friends" 
              :key="friend.id"
              class="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-white flex items-center justify-center font-bold">
                  {{ friend.name.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <div class="font-bold text-slate-700 text-sm">{{ friend.name }}</div>
                  <div class="text-xs text-slate-500">
                    {{ isZh ? '今日学习' : 'Today' }} {{ friend.todayLV }} LV
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex flex-col items-end">
                  <div class="text-xs text-green-500 font-bold">
                    {{ friend.streak }}{{ isZh ? '天连续' : ' days' }}
                  </div>
                  <button 
                    @click="waterFriend(friend)"
                    class="mt-1 px-2 py-1 bg-[#7FA1ED]/10 text-[#7FA1ED] text-xs font-bold rounded hover:bg-[#7FA1ED]/20 transition-colors"
                  >
                    💧 {{ isZh ? '浇水' : 'Water' }}
                  </button>
                </div>
                <div v-if="friend.streak >= 7" class="text-lg">🔥</div>
                <div v-else-if="friend.streak >= 3" class="text-lg">⚡</div>
              </div>
            </div>
          </div>

          <button 
            v-if="friends.length > 0"
            @click="waterAllFriends"
            class="w-full mt-3 py-2 bg-green-500 text-white rounded-xl text-sm font-bold hover:bg-green-600 transition-colors"
          >
            💧 {{ isZh ? '一键浇水 (提醒好友做每日任务)' : 'Water All (+3 LV, remind friends)' }}
          </button>
        </div>

        <div class="bg-amber-50 rounded-xl p-4">
          <h3 class="font-bold text-sm mb-3 text-amber-700">
            {{ isZh ? '🏆 排行榜' : '🏆 Leaderboard' }}
          </h3>
          <div class="space-y-2">
            <div 
              v-for="(user, idx) in leaderboard" 
              :key="user.id"
              class="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm"
            >
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                     :class="idx === 0 ? 'bg-yellow-400 text-yellow-800' : idx === 1 ? 'bg-gray-300 text-gray-700' : idx === 2 ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-600'">
                  {{ idx + 1 }}
                </div>
                <div class="font-medium text-slate-700 text-sm">{{ user.name }}</div>
              </div>
              <div class="text-sm font-bold text-amber-600">{{ user.totalLV }} LV</div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="space-y-4">
        <div class="bg-green-50 rounded-xl p-4">
          <h3 class="font-bold text-sm mb-3 text-green-700">
            {{ isZh ? '🔗 添加好友' : '🔗 Add Friend' }}
          </h3>
          <input 
            v-model="friendCode"
            type="text"
            :placeholder="isZh ? '输入好友邀请码' : 'Enter friend code'"
            class="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:border-green-400 text-sm"
          />
          <div class="text-xs text-slate-500 mt-2 mb-3">
            {{ isZh ? '你的邀请码：' : 'Your invite code: ' }}<span class="font-mono font-bold text-green-600">{{ myInviteCode }}</span>
          </div>
          <div class="flex gap-2">
            <button 
              @click="addFriend"
              class="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-colors"
            >
              {{ isZh ? '添加' : 'Add Friend' }}
            </button>
            <button 
              @click="showAddFriend = false"
              class="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
            >
              {{ isZh ? '取消' : 'Cancel' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isZh: { type: Boolean, default: false }
})

const emit = defineEmits(['update:friends'])

const showAddFriend = ref(false)
const friendCode = ref('')
const myInviteCode = 'FRIEND1234'

const friends = ref([
  { id: 1, name: 'Alice', todayLV: 45, streak: 7 },
  { id: 2, name: 'Bob', todayLV: 30, streak: 3 },
  { id: 3, name: 'Charlie', todayLV: 20, streak: 1 }
])

const leaderboard = computed(() => [
  { id: 1, name: 'Alice', totalLV: 1250 },
  { id: 2, name: 'Bob', totalLV: 980 },
  { id: 3, name: 'Charlie', totalLV: 750 },
  { id: 4, name: 'Player', totalLV: 450 }
])

function addFriend() {
  if (friendCode.value && friendCode.value.length > 0) {
    friends.value.push({
      id: Date.now(),
      name: 'NewFriend',
      todayLV: 0,
      streak: 0
    })
    friendCode.value = ''
    showAddFriend.value = false
  }
}

function waterFriend(friend) {
  const idx = friends.value.findIndex(f => f.id === friend.id)
  if (idx !== -1) {
    friends.value[idx].todayLV += 3
  }
}

function waterAllFriends() {
  friends.value.forEach(friend => {
    friend.todayLV += 3
  })
}
</script>