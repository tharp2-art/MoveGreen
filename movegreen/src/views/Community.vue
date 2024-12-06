<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <!-- User Stats -->
      <div class="bg-white rounded-lg shadow p-6 mb-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <h3 class="text-gray-500 text-sm uppercase">Sustainability Score</h3>
            <p class="text-3xl font-bold text-primary">{{ store.sustainabilityScore }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-gray-500 text-sm uppercase">Level</h3>
            <p class="text-3xl font-bold text-primary">{{ store.userLevel }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-gray-500 text-sm uppercase">CO₂ Saved</h3>
            <p class="text-3xl font-bold text-primary">{{ calculateCO2Saved }}kg</p>
          </div>
        </div>
      </div>

      <!-- Community Feed -->
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-800">Community Feed</h2>
          <button
            @click="createPost"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Share Journey
          </button>
        </div>

        <!-- Feed Items -->
        <div class="space-y-4">
          <div
            v-for="post in store.communityFeed"
            :key="post.id"
            class="bg-white rounded-lg shadow p-6"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-1">
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold text-gray-800">{{ post.userName }}</h3>
                  <span class="text-gray-400 text-sm">{{ formatDate(post.timestamp) }}</span>
                </div>
                <p class="mt-2 text-gray-600">{{ post.content }}</p>
                <div class="mt-4 flex items-center space-x-4">
                  <button
                    @click="likePost(post)"
                    class="text-gray-500 hover:text-primary transition-colors"
                  >
                    👍 {{ post.likes }}
                  </button>
                  <button
                    @click="commentOnPost(post)"
                    class="text-gray-500 hover:text-primary transition-colors"
                  >
                    💬 {{ post.comments.length }}
                  </button>
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
import { computed } from 'vue'
import { useMainStore } from '../stores/main'

const store = useMainStore()

// Calculate CO2 saved based on sustainability score
const calculateCO2Saved = computed(() => {
  return Math.floor(store.sustainabilityScore * 0.5) // Example calculation
})

// Format date for posts
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString()
}

// Post interactions
const likePost = (post) => {
  post.likes++
}

const commentOnPost = (post) => {
  // Implement comment functionality
  console.log('Commenting on post:', post.id)
}

const createPost = () => {
  // Example post creation
  store.addCommunityPost({
    id: Date.now(),
    userName: 'User',
    timestamp: new Date(),
    content: 'Just completed a green journey!',
    likes: 0,
    comments: []
  })
}
</script>
