import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function AnnouncementDetailsScreen({ route }) {
  const { announcement } = route.params;

  return (
    <View style={styles.container}>
      <SectionHeader title="Announcement Details" />
      <Text style={styles.label}>Type:</Text>
      <Text style={styles.value}>{announcement.type.toUpperCase()}</Text>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{announcement.title}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{announcement.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F7',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1C1C1E',
  },
  value: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
  },
});