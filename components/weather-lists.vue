<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" style="cursor: pointer" @click="sortByName">
            Country
            <Vector
              v-if="currentSortByName"
              :class="{ 'arrow-down': currentSortByName === 'DEC' }"
            />
          </th>
          <th scope="col">City</th>
          <th scope="col">Weather Codition</th>
          <th scope="col">Temp</th>
          <th scope="col">Feels like</th>
          <th scope="col">Wind</th>
          <th scope="col">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <InputFieldComponent
              @input="updated($event, 'country')"
              placeholder="Search Country"
              :value="filter.country"
            />
          </th>
          <td>
            <InputFieldComponent
              @input="updated($event, 'city')"
              placeholder="Search City"
            />
          </td>
          <td>
            <InputFieldComponent
              @input="updated($event, 'condition')"
              placeholder="Search Codition"
            />
          </td>
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
          <th scope="row">{{ item._country._name }}</th>
          <td>{{ item._name }}</td>
          <td>{{ item._weatherCondition }}</td>
          <td>{{ item._weatherTemp }}</td>
          <td>{{ item._weatherFeelsLike }}</td>
          <td>{{ item._weatherWind }}</td>
          <td>{{ convertDateFormat(item._weatherLastUpdated) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputFieldComponent from './shared/input.vue'
import { data } from '../assets/data'
import Vector from '../assets/icons/Vector.vue'
import { convertDate } from '../helpers/helpers'
export default Vue.extend({
  name: 'WeatherListsComponent',
  components: { InputFieldComponent, Vector },
  data() {
    return {
      items: [],
      alteredData: [],
      filter: {
        country: '',
        city: '',
        condition: '',
      },
      currentSortByName: '',
    }
  },
  methods: {
    goToDetailedInfo: (val: any): void => {
      console.log(val)
    },
    updated(val, c): void {
      this.filter = {
        ...this.filter,
        [c]: val.toLowerCase(),
      }
      this.items =
        this.filter.country || this.filter.city || this.filter.condition
          ? this.alteredData.filter((item) => {
              const name = item?._country?._name.toLowerCase()
              const city = item?._name.toLowerCase()
              const condition = item?._weatherCondition?.toLowerCase() || ''
              const filteredname = this.filter?.country.toLowerCase()
              const filteredcondition =
                this.filter?.condition.toLowerCase() || ''
              if (
                name.indexOf(filteredname) > -1 &&
                condition.indexOf(filteredcondition) > -1 &&
                city.indexOf(this.filter.city) > -1
              )
                return item
            })
          : this.alteredData
    },
    sortByName() {
      if (!this.currentSortByName || this.currentSortByName === 'DEC') {
        this.currentSortByName = 'ASC'
        this.items.sort((a, b) =>
          a._country._name.localeCompare(b._country._name)
        )
      } else if (this.currentSortByName === 'ASC') {
        this.currentSortByName = 'DEC'
        this.items.sort((a, b) =>
          b._country._name.localeCompare(a._country._name)
        )
      }
    },
    convertDateFormat(date: number) {
      return convertDate(date)
    },
  },
  created(): void {
    this.items = data.data
    this.alteredData = this.items
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_variable.scss';
.arrow-down {
  transform: rotate(180deg);
}
.cp {
  cursor: pointer;
}
</style>
