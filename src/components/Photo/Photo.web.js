import React from 'react'
import { View, Text } from 'react-native'

const Photo = props => {
  const { photo } = props
  return (
    <View>
      <Text>WEB: {photo.title}</Text>
    </View>
  )
}

export default Photo
