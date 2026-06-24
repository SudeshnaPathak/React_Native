import { StyleSheet,View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.header}>
      <FontAwesome name="tasks" size={24} color="white" />
      <Text variant="titleLarge"
      style={styles.title}>My Dashboard</Text>
      <Ionicons name="notifications" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#7e39f7',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    }
})