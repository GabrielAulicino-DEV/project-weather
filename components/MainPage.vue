<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="main-center">
      <CardWeather :reloading="reloading" :city="'Nuuk'" :country="'GL'" :temperature="convertTemperature(firstCity.temp)" :loading="loading" @clicked="getFirstWeather()"/>
      <CardWeather :reloading="reloading" :city="'Urubici'" :country="'BR'" :temperature="convertTemperature(secondCity.temp)" :number-humity="secondCity.humidity" :number-pressure="secondCity.pressure" :loading="loading" @clicked="getSecondWeather()"/>
      <CardWeather :reloading="reloading" :city="'Nairobi'" :country="'KE'" :temperature="convertTemperature(thirdCity.temp)" :loading="loading" @clicked="getThirdWeather()"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardWeather from './CardWeather.vue';

export default {
  name: "NuxtTutorial",
  components: { CardWeather },
  data() {
    return {
      reloading: false,
      loading: true,
      firstCity: {},
      secondCity: {},
      thirdCity: {}
    }
  },
  async created() {
    this.loading = true;
    await this.getFirstWeather()
    await this.getSecondWeather()
    await this.getThirdWeather()
    this.loading = false;
  },
  methods: {
    convertTemperature(value) {
      let newValue = value - 273.15
      newValue = Math.round(newValue)
      return newValue;
    },
    async getFirstWeather() {
      try {
        this.reloading = true;
        const api = 'http://api.openweathermap.org/data/2.5/weather?q=Nuuk,gl&APPID=7bdca8d503b39bfe20a89b0ad4bbec50'
        await axios.get(api).then((response) => {
          this.convertTemperature(response.data.main.temp);
          this.firstCity = response.data.main
        })
      } catch (error) {
        // To-do
      } finally {
        this.reloading = false;
      }
    },
    async getSecondWeather() {
      try {
        this.reloading = true;
        const api = 'http://api.openweathermap.org/data/2.5/weather?q=Urubici,br&APPID=7bdca8d503b39bfe20a89b0ad4bbec50'
        await axios.get(api).then((response) => {
          this.secondCity = response.data.main
        })
      } catch (error) {
        // To-do
      } finally {
        this.reloading = false;
      }
    },
    async getThirdWeather() {
      try {
        this.reloading = true;
        const api = 'http://api.openweathermap.org/data/2.5/weather?q=Nairobi,ke&APPID=7bdca8d503b39bfe20a89b0ad4bbec50'
        await axios.get(api).then((response) => {
          this.thirdCity = response.data.main
        })
      } catch (error) {
        // To-do
      } finally {
        this.reloading = false;
      }
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #F1F1F1;
}

.main-center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 100px;
  height: 600px;
  align-items: center;
}

@media (max-width: 1110px) {
  .main-center {
    flex-direction: column;
  }
}
</style>
