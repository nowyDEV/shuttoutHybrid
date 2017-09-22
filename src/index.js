// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { lastPhotos } from './api/photos'
import comments from './mockups/comments'

import App from './containers/App'

// $FlowFixMe
console.ignoredYellowBox = ['Setting a timer']

export default class Index extends Component {
  state: {
    apiLoaded: boolean,
    data: {
      photos: Array<Photo>
    }
  } = {
    apiLoaded: false,
    data: {
      photos: []
    }
  }

  componentDidMount() {
    this.shuttoutApiCall()
  }

  shuttoutApiCall() {
    /**
     * Make api call and update state
     */
    lastPhotos().then(response => {
      const responseArray = Object.keys(response.data).map(key => {
        response.data[key].comments = comments
        return response.data[key]
      })
      this.setState({
        apiLoaded: true,
        data: {
          photos: responseArray
        }
      })
    })
  }

  render() {
    if (this.state.apiLoaded) {
      return <App data={this.state.data} />
    }

    return (
      <View style={{ flex: 1, paddingTop: 200 }}>
        <ActivityIndicator color="blue" size="large" />
        <Text style={{ textAlign: 'center', color: 'blue', marginTop: 20 }}>Loading data...</Text>
      </View>
    )
  }
}
