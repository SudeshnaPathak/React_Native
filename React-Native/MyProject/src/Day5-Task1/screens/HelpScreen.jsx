import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader'

export default function HelpScreen() {
  return (
    <View>
      <SectionHeader title="Help" />
      <Text>For any assistance, please contact our support team at 999-999-9999 or email us at abc@gmail.com </Text>
    </View>
  )
}

const styles = StyleSheet.create({})