<template>
  <div class="container-fluid">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">Weather</h1>
      <div class="content">
        <div class="content__header">Header goes here...</div>
        <div class="content__country-lists">
          <div class="content__country-lists__filter"></div>
          <div class="content__country-lists__container">
            <WeatherListsComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { data } from '../assets/data'
import WeatherListsComponent from '../components/weather-lists.vue'
import axios from 'axios'
export default Vue.extend({
  components: {
    WeatherListsComponent,
  },
  data() {
    return {
      items: data,
    }
  },
  created() {
    // fetch('http://dnu5embx6omws.cloudfront.net/venues/weather.json').then((x) =>
    //   console.log('y', x)
    // )
    const config = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
    // axios
    //   .get('http://dnu5embx6omws.cloudfront.net/venues/weather.json', config)
    //   .then((x) => console.log('y', x))
    // this.$axios
    //   .$get('https://jsonplaceholder.typicode.com/todos')
    //   .then((x: any) => console.log('x', x))
  },
  methods: {
    goToDetailedInfo: (val: any): void => {
      console.log(val)
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/_variable.scss';
.container-fluid {
  margin: 0 auto;
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: $font-size-header;
    background: $color-primary;
    color: $color-white;
    text-align: center;
    letter-spacing: 1px;
    padding: 30px 0;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
