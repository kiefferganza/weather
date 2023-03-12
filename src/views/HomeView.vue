<script setup lang="ts">
import WeatherCard from '@/components/WeatherCard.vue'
import {useWeatherStore} from "@/stores/weather";
import { onMounted, computed } from "vue";

const weatherStore = useWeatherStore()

onMounted(() => {
  weatherStore.searchForecast('davao')
})

const currentForecast = computed(() => {
  return weatherStore.forecast.current
})

const forecastLocation = computed(() => {
  return weatherStore.forecast.location
})
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <weather-card
          v-if="currentForecast"
          :forecast="currentForecast"
          :location="forecastLocation"/>

    </div>
  </div>
</template>
