<template>
  <div class="min-h-screen bg-background-light">
    <header class="bg-primary shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">
          Welcome to MoveGreen
        </h1>
      </div>
    </header>
    
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Hero section -->
        <div class="px-4 py-6 sm:px-0">
          <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-text-primary sm:text-4xl">
                Sustainable Urban Mobility
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Join our community in making cities greener and more liveable through sustainable transportation choices.
              </p>
              <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div class="rounded-md shadow">
                  <router-link
                    to="/map"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                    View Map
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="mt-8 px-4 sm:px-0">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium text-text-primary">Track Your Impact</h3>
                <p class="mt-2 text-sm text-gray-500">
                  Monitor your carbon footprint and see how your sustainable choices make a difference.
                </p>
              </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium text-text-primary">Join Community</h3>
                <p class="mt-2 text-sm text-gray-500">
                  Connect with like-minded individuals and share your sustainable journey.
                </p>
              </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium text-text-primary">Find Green Routes</h3>
                <p class="mt-2 text-sm text-gray-500">
                  Discover eco-friendly transportation options and optimize your daily commute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
