import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Smart Society 🏢</Text>
      <Text style={styles.description}>Unified Smart Complex Solutions</Text>
      <Button
        title="Proceed to Login"
        onPress={() => navigation.navigate('Login')}
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
    brand: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
})