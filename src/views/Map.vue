<template>
  <div class="h-screen flex flex-col">
    <header class="bg-primary shadow z-10">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">
          Green Routes
        </h1>
        <nav class="flex space-x-4">
          <router-link
            to="/"
            class="text-white hover:text-gray-200"
          >
            Home
          </router-link>
          <router-link
            to="/community"
            class="text-white hover:text-gray-200"
          >
            Community
          </router-link>
        </nav>
      </div>
    </header>

    <main class="flex-1 relative">
      <div ref="mapContainer" class="absolute inset-0"></div>
    </main>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { ref, onMounted } from 'vue'
import { useMainStore } from '../stores/main'

export default {
  name: 'Map',
  setup() {
    const mapContainer = ref(null)
    const store = useMainStore()
    
    onMounted(() => {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
      
      const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // Default to New York
        zoom: 9
      })
      
      // Add navigation control
      map.addControl(new mapboxgl.NavigationControl())
      
      // Add geolocate control
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      )
      
      // Load markers from store
      store.mapMarkers.forEach(marker => {
        new mapboxgl.Marker()
          .setLngLat([marker.lng, marker.lat])
          .addTo(map)
      })
    })
    
    return {
      mapContainer
    }
  }
}
</script>
