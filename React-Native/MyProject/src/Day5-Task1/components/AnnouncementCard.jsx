import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AnnouncementCard({ item, onPress }) {
  return (
    <View style={styles.card} onTouchEnd={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8fbca',
        padding: 15,
        margin: 10,
        borderRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#e82121',
    },
    date: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
})