<template>
  <div>
    <button @click="salam">salam</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Suburb</th>
          <th scope="col">Weather Codition</th>
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
          <td><InputFieldComponent /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr
          v-for="item in getItems"
          :key="item._venueID"
          @click="goToDetailedInfo(item)"
        >
          <th scope="row">{{ item._country._name }}</th>
          <td>{{ item._name }}</td>
          <td>{{ item._weatherCondition }}</td>
          <td>{{ item._weatherTemp }}</td>
          <td>{{ item._weatherFeelsLike }}</td>
          <td>{{ item._weatherWind }}</td>
          <td>{{ item._weatherLastUpdated }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputFieldComponent from './shared/input.vue'
export default Vue.extend({
  name: 'WeatherListsComponent',
  components: { InputFieldComponent },
  props: {
    items: Array,
  },
  methods: {
    goToDetailedInfo: (val: any): void => {
      console.log(val)
    },
    salam() {},
  },
  computed: {
    getItems: {
      // getter
      get: function () {
        return this.items
      },
      // setter
      set: function (newValue) {
        this.items = this.items.slice(0, 5)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_variable.scss';
</style>
