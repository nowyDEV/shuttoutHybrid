// @flow

import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import Photo from '../components/Photo/Photo'

const Feed = props => {
  const { photos } = props.data
  return (
    <ScrollView>
      <View style={{ marginVertical: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>MAIN FEED</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {photos.map((photo, index) => <Photo key={index} photo={photo} />)}
      </View>
    </ScrollView>
  )
}

export default Feed
