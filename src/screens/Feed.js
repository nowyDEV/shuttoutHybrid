// @flow

import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import Photo from '../components/Photo/Photo'

const Feed = props => {
  const { photos } = props.data
  return (
    <ScrollView>
      <View style={{ marginVertical: 20, alignItems: 'center' }}><Text style={{ fontSize: 26 }}>MAIN FEED</Text></View>
      {photos.map((photo, index) => <Photo key={index} photo={photo} />)}
    </ScrollView>
  )
}

export default Feed
