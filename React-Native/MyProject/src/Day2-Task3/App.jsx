import React from 'react'
import PlatformSpecsDemo from './PlatformSpecsDemo'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <PlatformSpecsDemo />
    </SafeAreaProvider>
  )
}

