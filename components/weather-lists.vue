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
                <tr
                  v-for="item in items"
                  :key="item._venueID"
                  @click="goToDetailedInfo(item)"
                >
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
export default Vue.extend({
  name: 'WeatherListsComponent',
  props: {
    items: Array,
  },
  methods: {
    goToDetailedInfo: (val: any): void => {
      console.log(val)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_variable.scss';
</style>
