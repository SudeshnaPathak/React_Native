import { View, Text } from 'react-native'
import React from 'react'
import { AppProvider } from './context/AppProvider'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStack'

export default function App() {
  return (
    <AppProvider>
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    </AppProvider>
  )
}