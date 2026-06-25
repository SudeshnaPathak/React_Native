import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SectionHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
  },
    text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});