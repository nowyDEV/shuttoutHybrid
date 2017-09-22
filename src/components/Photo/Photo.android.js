import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Card } from 'nachos-ui'

import PhotoHeader from './Header/PhotoHeader'
import PhotoActions from './Actions/PhotoActions'

const Photo = props => {
  const { photo } = props
  const WINDOW_WIDTH = Dimensions.get('window').width
  return (
    <View style={{ alignItems: 'center', marginVertical: 10, width: WINDOW_WIDTH }}>
      <Text>{photo.contest.name}</Text>
      <Card
        bodyContent={<PhotoHeader {...props} />}
        footerContent={<PhotoActions {...props} />}
        image={`https://res.cloudinary.com/nowytr/image/fetch/w_300,c_fill,g_face,f_auto/${photo.photo.path}`}
        imageStyle={{ height: 300 }}
        style={{ height: 300 }}
      />
    </View>
  )
}

export default Photo
