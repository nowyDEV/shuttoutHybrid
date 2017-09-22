// @flow

import shuttoutQuery from '../utils/shuttout_query'

export const lastPhotos = () => shuttoutQuery({
  name: 'photos',
  type: '',
  startDate: ''
})
