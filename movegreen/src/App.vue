<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-primary font-bold text-xl">
          MoveGreen
        </router-link>
        
        <div class="flex space-x-4">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/map' },
  { name: 'Community', path: '/community' }
]
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
