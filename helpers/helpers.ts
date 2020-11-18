export const convertDate = (date: number) => {
  if (!date) return ''
  const nd = new Date(date)
  return `${nd.getDate()}/${
    nd.getMonth() + 1
  }/${nd.getFullYear()}  ${nd.getHours()}:${nd.getMinutes()}:${nd.getSeconds()}`
}
