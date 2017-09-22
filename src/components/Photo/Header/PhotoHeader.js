// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'

const PhotoHeader = props => {
  const { photo } = props
  let avatarUrl = photo.author.metadata.avatar || 'https://i.stack.imgur.com/ma4sx.png'

  if (avatarUrl.indexOf('/') === 0 || avatarUrl.indexOf('i.') === 8) {
    avatarUrl = 'https://i.stack.imgur.com/ma4sx.png'
  } else avatarUrl = `https://res.cloudinary.com/nowytr/image/fetch/w_50,c_fill,g_face,f_auto/${avatarUrl}`

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        left: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 5,
        paddingHorizontal: 10
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{
            uri: avatarUrl
          }}
          style={{ height: 30, width: 30, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 14, color: '#fff', marginLeft: 10 }}>{photo.author.metadata.screen_name}</Text>
      </View>
    </View>
  )
}

export default PhotoHeader
