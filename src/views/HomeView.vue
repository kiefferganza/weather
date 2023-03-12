<script setup lang="ts">
import WeatherCard from '@/components/WeatherCard.vue'
import {useWeatherStore} from "@/stores/weather";
import { onMounted } from "vue";

const weatherStore = useWeatherStore()

onMounted(() => {
  weatherStore.searchForecast('davao')
})
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <weather-card
          v-if="weatherStore.forecast.current"
          :forecast="weatherStore.forecast.current ?? null"
          :location="weatherStore.forecast.location ?? null"/>

    </div>
  </div>
</template>
