<template>
  <div class="container mx-auto h-screen w-screen">
    <div class="flex items-center justify-center h-full">
      <div class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
        <div class="flex flex-col">
          <div>
            <h2 class="font-bold text-gray-600 text-center">{{ formattedLocation }}</h2>
          </div>
          <div class="my-6">
            <div class="flex flex-row space-x-4 items-center gap-5">
              <div  id="icon">
                <img class="h-auto max-w-full" :src="forecast.condition.icon" alt="">
                <p class="text-xs text-gray-500 text-center">{{ forecast.condition.text }}</p>
              </div>
              <div id="temp">
                <h4 class="text-4xl pb-3">{{ temp }}</h4>
                <p class="text-xs text-gray-500">Wind {{ wind }}</p>
                <p class="text-xs text-gray-500">Humidity {{ humidity }}</p>
                <p class="text-xs text-gray-500">Feels like {{ feelsLike }}</p>
              </div>
            </div>
          </div>
          <div class="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <a href="#" class="text-indigo-600 text-xs font-medium">View more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";

const props = defineProps({
  forecast: {
    type: Object,
    required: true
  },
  location: {
    type: Object,
    required: true
  }
})

const wind = computed(() => {
  return `${props.forecast.wind_kph}km/h`
})

const temp = computed(() => {
  return `${props.forecast.temp_c}°`
})

const humidity = computed(() => {
  return `${props.forecast.humidity}%`
})

const feelsLike = computed(() => {
  return `${props.forecast.feelslike_c}°`
})

const formattedLocation = computed(() => {
  return `${props.location.region}, ${props.location.country}`
})

const localTime = (time: string) => {
  const date = new Date(time)
  return date.toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit" })
}
</script>
