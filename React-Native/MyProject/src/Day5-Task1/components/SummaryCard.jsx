import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SummaryCard({ title, count, color }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});