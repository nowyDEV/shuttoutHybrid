// @flow

import React from 'react'
import { View, Text } from 'react-native'

const PhotoActions = props => {
  const { photo } = props
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>{photo.votes_count}</Text>
        <Text> 66</Text>
        <Text> 6</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'right' }}>MORE</Text>
      </View>
    </View>
  )
}

export default PhotoActions
