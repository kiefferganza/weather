import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', () => {
    const search = ref('')
    const forecast = ref([])

    async function searchForecast(search: String) {
        await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=davao&days=1&aqi=no&alerts=no`, {
            params: {
                q: search,
                days: 1,
                aqi: 'no',
                alerts: 'no'
            }
        }).then((response) => {
            forecast.value = response.data
        }).catch((error) => {
            console.log(error)
        })
    }



    return { search, forecast, searchForecast }
})
