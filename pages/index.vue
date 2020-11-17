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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Suburb</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Temp feels like</th>
                  <th scope="col">Wind</th>
                  <th scope="col">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input /></th>
                  <td><input /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr v-for="item in items.data" :key="item._venueID">
                  <th scope="row">{{ item._country._countryID }}</th>
                  <td>{{ item._name }}</td>
                  <td>{{ item._weatherTemp }}</td>
                  <td>{{ item._weatherFeelsLike }}</td>
                  <td>{{ item._weatherWind }}</td>
                  <td>{{ item._weatherLastUpdated }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { data } from '../assets/data'
export default Vue.extend({
  data() {
    return {
      items: data,
    }
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
