import { View, Text, Platform } from 'react-native'
import React from 'react'

export default function IOSApp() {
  return (
    <View>
      <Text>IOS App</Text>
      <Text>Platform : {Platform.OS}</Text>
    </View>
  )
}