export interface WeatherResponse {
  ret: boolean
  isOkay: boolean
  data: WeatherResponseData[]
}

export interface WeatherResponseData {
  _venueID: string
  _name: string
  _country: {
    _countryID: string
    _name: string
  }
  _weatherCondition?: string
  _weatherConditionIcon?: string
  _weatherWind?: string
  _weatherHumidity?: string
  _weatherTemp?: string
  _weatherFeelsLike?: string
  _sport?: {
    _sportID?: string
    _description?: string
  }
  _weatherLastUpdated?: number
}
