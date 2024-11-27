<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="bg-primary text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Make Your Travel Greener
        </h1>
        <p class="text-xl md:text-2xl mb-8">
          Track and improve your environmental impact through smarter mobility choices
        </p>
        <router-link
          to="/map"
          class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Start Your Journey
        </router-link>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose MoveGreen?</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="text-center p-6">
            <div class="text-primary text-4xl mb-4">
              🌍
            </div>
            <h3 class="text-xl font-semibold mb-3">Track Your Impact</h3>
            <p class="text-gray-600">
              Monitor your carbon footprint and see the real impact of your travel choices
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center p-6">
            <div class="text-primary text-4xl mb-4">
              🚲
            </div>
            <h3 class="text-xl font-semibold mb-3">Smart Routes</h3>
            <p class="text-gray-600">
              Discover eco-friendly routes and transportation options in your city
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center p-6">
            <div class="text-primary text-4xl mb-4">
              👥
            </div>
            <h3 class="text-xl font-semibold mb-3">Join the Community</h3>
            <p class="text-gray-600">
              Connect with like-minded people and share your sustainable journey
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic will be added here
</script>
