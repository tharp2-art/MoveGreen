<template>
  <div class="min-h-screen bg-background-light">
    <header class="bg-primary shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">
          Community
        </h1>
        <nav class="flex space-x-4">
          <router-link
            to="/"
            class="text-white hover:text-gray-200"
          >
            Home
          </router-link>
          <router-link
            to="/map"
            class="text-white hover:text-gray-200"
          >
            Map
          </router-link>
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- User Stats -->
      <div class="px-4 sm:px-0">
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-text-primary">Your Impact</h2>
          <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="bg-background-light rounded-lg p-4">
              <p class="text-sm text-gray-500">Sustainability Score</p>
              <p class="mt-1 text-2xl font-semibold text-primary">{{ userScore }}</p>
            </div>
            <div class="bg-background-light rounded-lg p-4">
              <p class="text-sm text-gray-500">CO2 Saved</p>
              <p class="mt-1 text-2xl font-semibold text-primary">2.5 tons</p>
            </div>
            <div class="bg-background-light rounded-lg p-4">
              <p class="text-sm text-gray-500">Green Routes Shared</p>
              <p class="mt-1 text-2xl font-semibold text-primary">15</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Community Feed -->
      <div class="mt-8 px-4 sm:px-0">
        <div class="bg-white shadow rounded-lg divide-y divide-gray-200">
          <div class="p-6">
            <h2 class="text-lg font-medium text-text-primary">Community Feed</h2>
            <div class="mt-6 space-y-6">
              <div v-for="(post, index) in communityPosts" :key="index" class="flex space-x-3">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="post.avatar" alt="" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-medium text-text-primary">
                    {{ post.author }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ post.content }}
                  </p>
                  <div class="mt-2 flex space-x-4">
                    <button class="text-sm text-primary hover:text-primary-dark">
                      Like
                    </button>
                    <button class="text-sm text-primary hover:text-primary-dark">
                      Comment
                    </button>
                    <button class="text-sm text-primary hover:text-primary-dark">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMainStore } from '../stores/main'

export default {
  name: 'Community',
  setup() {
    const store = useMainStore()
    
    const userScore = computed(() => store.userScore)
    
    const communityPosts = [
      {
        author: 'Sarah Green',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        content: 'Just completed my first bike commute to work! Saved 2.5kg of CO2 emissions. 🚲🌱'
      },
      {
        author: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5',
        content: 'Found an amazing new electric bus route that cuts my commute time by 15 minutes! #SustainableTransport'
      },
      {
        author: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        content: 'Organizing a community bike repair workshop next weekend. Who wants to join? 🔧'
      }
    ]
    
    return {
      userScore,
      communityPosts
    }
  }
}
</script>
