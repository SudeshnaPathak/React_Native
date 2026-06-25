import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader'

export default function PaymentsScreen() {
  return (
    <View>
      <SectionHeader title="Payments" />
      <Text>No Payments are due</Text>
    </View>
  )
}

const styles = StyleSheet.create({})