import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details', {
        name:'Sudeshna'
      })} />
    </View>
  )
}