<template>
  <div>
    <table class="table table-striped" v-if="items">
      <thead>
        <tr>
          <th scope="col" style="cursor: pointer" @click="sortByName">
            Country
            <Vector
              v-if="currentSortByName"
              :class="{ 'arrow-down': currentSortByName === 'DEC' }"
            />
          </th>
          <th scope="col" v-for="(th, index) in tableInfo.theader" :key="index">
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(tr, index) in tableInfo.trows" :key="index">
            <InputFieldComponent
              v-if="tr.hasInput"
              @input="inputFieldUpdated($event, tr.inputId)"
              placeholder="Search"
              :value="filter[tr.inputId]"
            />
          </td>
        </tr>
        <tr
          v-for="item in items"
          :key="item._venueID"
          @click="goToDetailedInfo(item)"
        >
          <td scope="row">{{ item._country._name }}</td>
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
import { Component, Prop } from 'nuxt-property-decorator'
import { WeatherResponseData } from '../models/weather.model'
import axios from '@nuxtjs/axios'
@Component({
  name: 'WeatherListsComponent',
  components: {
    InputFieldComponent,
    Vector,
  },
})
export default class WeatherListsComponent extends Vue {
  public items: WeatherResponseData[]
  public alteredData: WeatherResponseData[]
  public filter: { country: string; city: string; condition: string }
  public currentSortByName: string
  public tableInfo
  constructor() {
    super()
    this.items = []
    this.alteredData = []
    this.filter = {
      country: '',
      city: '',
      condition: '',
    }
    this.currentSortByName = ''
    this.tableInfo = {
      theader: [
        'City',
        'Weather Codition',
        'Temp',
        'Feels like',
        'Wind',
        'Last Updated',
      ],
      trows: [
        { hasInput: true, inputId: 'country' },
        { hasInput: true, inputId: 'city' },
        { hasInput: true, inputId: 'condition' },
        { hasInput: false },
        { hasInput: false },
        { hasInput: false },
        { hasInput: false },
      ],
    }
  }

  created(): void {
    this.$axios
      .$get('http://dnu5embx6omws.cloudfront.net/venues/weather.json')
      .then((response: any) => {
        this.items = response.data.data
        this.alteredData = this.items
      })
      .catch((err) => {
        console.log(err)

        this.items = data.data
        this.alteredData = this.items
      })
  }

  public goToDetailedInfo(val: any): void {
    console.log(val)
  }
  public inputFieldUpdated(val, c): void {
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
            const filteredcondition = this.filter?.condition.toLowerCase() || ''
            if (
              name.indexOf(filteredname) > -1 &&
              condition.indexOf(filteredcondition) > -1 &&
              city.indexOf(this.filter.city) > -1
            )
              return item
          })
        : this.alteredData
  }
  public sortByName() {
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
  }
  public convertDateFormat(date: number) {
    return convertDate(date)
  }
}
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
