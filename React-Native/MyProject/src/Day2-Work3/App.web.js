import { View, Text, Platform } from 'react-native'
import React from 'react'

export default function WebApp() {
  return (
    <View>
      <Text>WebApp</Text>
      <Text>Platform : {Platform.OS}</Text>
    </View>
  )
}