import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import SectionHeader from '../components/SectionHeader';
import { Button } from 'react-native-web';

export default function ProfileScreen({ navigation }) {
  const { user} = useContext(AppContext);
  return (
    <View style={styles.container}>
      <SectionHeader title="Profile" />
      <Text style={styles.label}>Name: </Text>
      <Text style={styles.value}>{user.name}</Text>
      <Text style={styles.label}>Flat No: </Text>
      <Text style={styles.value}>{user.flatNo}</Text>
      <Text style={styles.label}>Phone: </Text>
      <Text style={styles.value}>{user.phone}</Text>
      <Text style={styles.label}>Email: </Text>
      <Text style={styles.value}>{user.email}</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Edit Profile')}
      />
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
})