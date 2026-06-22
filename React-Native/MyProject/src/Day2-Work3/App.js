import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import AndroidApp from './App.android';
import IOSApp from './App.ios';
import WebApp from './App.web';
import { Platform } from 'react-native';

export default function App() {
  return (
          <SafeAreaProvider>
          <SafeAreaView>
            { Platform.OS === 'ios' ? <IOSApp /> : Platform.OS === 'android' ? <AndroidApp /> : <WebApp /> }
          </SafeAreaView>
          </SafeAreaProvider>
      );
}