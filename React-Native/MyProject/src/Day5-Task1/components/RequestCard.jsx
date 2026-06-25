import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RequestCard({item , onPress}) {
  return (
    <View style={styles.card} onTouchEnd={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.createdAt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#881ef1',
    backgroundColor: '#f1d8ea',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});