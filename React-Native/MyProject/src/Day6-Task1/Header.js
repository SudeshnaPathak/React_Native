import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Header() {
    const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.header, { paddingTop: insets.top }]}>
      <Text style={{fontWeight:'bold'}}>CityConnect Map App</Text>
      <Text>Find Important city services near you</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b5eff4',
    borderBottomWidth: 1,
    borderBottomColor: '#6c72f0',
  },
})