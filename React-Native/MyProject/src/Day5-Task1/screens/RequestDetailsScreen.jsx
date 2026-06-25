import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function RequestDetailsScreen({ route }) {
  const { request } = route.params;
  return (
   <View style={styles.container}>
      <SectionHeader title="Request Details" />
      <Text style={styles.label}>Request Subject</Text>
      <Text style={styles.value}>{request.title}</Text>
      <Text style={styles.label}>Category</Text>
      <Text style={styles.value}>{request.category}</Text>
      <Text style={styles.label}>Status Tracking</Text>
      <Text style={styles.value}>{request.status}</Text>
      <Text style={styles.label}>Priority Level</Text>
      <Text style={styles.value}>{request.priority}</Text>
      <Text style={styles.label}>Date of Submission</Text>
      <Text style={styles.value}>{request.createdAt}</Text>
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