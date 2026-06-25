import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader'

export default function EventsScreen() {
  return (
    <View>
      <SectionHeader title="Events" />
      <Text>No Events are scheduled</Text>
    </View>
  )
}

const styles = StyleSheet.create({})