import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader'

export default function SettingsScreen() {
  return (
    <View>
      <SectionHeader title="Settings" />
      <Text>Update your Settings.</Text>
    </View>
  )
}

const styles = StyleSheet.create({})