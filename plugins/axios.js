export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  })

  // Set baseURL to something different
  api.setBaseURL('http://dnu5embx6omws.cloudfront.net/')

  // Inject to context as $api
  inject('api', api)
}
