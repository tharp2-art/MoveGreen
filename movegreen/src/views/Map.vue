<template>
  <div class="h-screen relative">
    <!-- Map Container -->
    <div ref="mapContainer" class="absolute inset-0"></div>
    
    <!-- Controls Overlay -->
    <div class="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-[1000]">
      <h2 class="text-lg font-semibold text-gray-800 mb-2">Green Routes</h2>
      <div class="space-y-2">
        <button
          @click="findGreenRoute"
          class="w-full bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          Find Eco-Friendly Route
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useMainStore } from '../stores/main'

const mapContainer = ref(null)
const map = ref(null)
const store = useMainStore()

// Fix Leaflet's icon paths
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('../assets/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('../assets/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('../assets/marker-shadow.png', import.meta.url).href,
})

// Initialize map
onMounted(() => {
  map.value = L.map(mapContainer.value).setView([52.520008, 13.404954], 13) // Berlin coordinates

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ' OpenStreetMap contributors'
  }).addTo(map.value)

  // Add zoom control
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map.value)

  // Add scale control
  L.control.scale({
    imperial: false
  }).addTo(map.value)
})

// Cleanup
onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})

// Find green route function (placeholder)
const findGreenRoute = () => {
  // This will be implemented with actual routing logic
  console.log('Finding eco-friendly route...')
}
</script>

<style>
@import 'leaflet/dist/leaflet.css';
</style>
