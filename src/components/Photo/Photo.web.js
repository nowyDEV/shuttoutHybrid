import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'nachos-ui'

import PhotoHeader from './Header/PhotoHeader'
import PhotoActions from './Actions/PhotoActions'

const Photo = props => {
  const { photo } = props
  return (
    <View style={{ alignItems: 'center', width: 300, alignSelf: 'center', marginVertical: 10 }}>
      <Text>{photo.contest.name}</Text>
      <Card
        bodyContent={<PhotoHeader {...props} />}
        footerContent={<PhotoActions {...props} />}
        image={`https://res.cloudinary.com/nowytr/image/fetch/w_300,c_fill,g_face,f_auto/${photo.photo.path}`}
        imageStyle={{ height: 250 }}
        style={{ height: 250 }}
      />
    </View>
  )
}

export default Photo
