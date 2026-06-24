import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function QuoteSection() {
  return (
    <View style={styles.quoteSection}>
      <FontAwesome name="quote-left" size={24} color="#b63ef6" />
      <View style={styles.quoteContent}>
      <Text style={styles.text}>“The best way to predict the future is to create it.”</Text>
      <Text style={styles.author}>- Peter Drucker</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    quoteSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#e5d9f5',
        borderRadius: 5,
        gap: 10,
    },
    text: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#b63ef6',
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: '#b63ef6',
        marginTop: 5,
        fontWeight: 'bold',
    },
    quoteContent: {
        flex: 1,
    }
})