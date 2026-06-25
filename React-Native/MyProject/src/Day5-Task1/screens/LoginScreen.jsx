import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Button } from 'react-native-web';

export default function LoginScreen() {
  const { login } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Resident</Text>
      <Text style={styles.description}>Please login to access your Society Dashboard</Text>
      <Button
        title="Login"
        onPress={() => login()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
})