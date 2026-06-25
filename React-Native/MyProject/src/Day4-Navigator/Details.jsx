import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Details({route , navigation}) {
    const { name } = route.params || {};
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  )
}