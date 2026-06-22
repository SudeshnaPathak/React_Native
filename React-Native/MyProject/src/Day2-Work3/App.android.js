import { View, Text, Platform } from 'react-native'
import React from 'react'

export default function AndroidApp() {
  return (
    <View>
      <Text>Android App</Text>
      <Text>Platform : {Platform.OS}</Text>
    </View>
  )
}