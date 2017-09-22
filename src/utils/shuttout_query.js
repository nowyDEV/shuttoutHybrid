// @flow

import axios from 'axios'

/**
 * Helper function for simpler callling api with axios
 */
const shuttoutQuery = (params: {
  name: string,
  type: string,
  startDate: string,
  'end-date'?: string
}) => {
  const type = params.type.length > 1 ? `?type=${params.type}` : ''
  const startDate = params.startDate.length > 1 ? `&startDate=${params.startDate}` : ''
  return axios.get(`https://app.shuttout.com/stats/${params.name}${type}${startDate}`)
}

export default shuttoutQuery
