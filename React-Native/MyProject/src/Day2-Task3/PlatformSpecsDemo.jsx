import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

export default function PlatformSpecsDemo() {
  const myinsets = useSafeAreaInsets();
  return (
      <SafeAreaView style={[styles.container,
        {
          paddingTop: myinsets.top,
          paddingBottom: myinsets.bottom,
          paddingLeft: myinsets.left,
          paddingRight: myinsets.right,
        }
      ]}>
        <Text> 
        {Platform.OS === 'ios' ? 'Welcome iOS user!' :
         Platform.OS === 'android' ? 'Welcome Android user!' 
        : 'Welcome Web user!'}
        </Text>
        <View style={[Platform.OS === 'web' && styles.webView,
             Platform.OS === 'ios' && styles.iosView,
             Platform.OS === 'android' && styles.androidView]}>
        <Text>Platform Version : {Platform.Version}</Text>
        <Button
         mode="contained"
         style={[Platform.OS === 'ios' && styles.iosButton,
             Platform.OS === 'web' && styles.webButton,
              Platform.OS === 'android' && styles.androidButton]}
        >{Platform.OS} Button</Button>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 },
 webButton: {
    marginTop: 10,
    backgroundColor: '#36b7de',
    borderRadius: 5},
iosButton: {
    marginTop: 10,
    backgroundColor: '#e0f739'
},
androidButton: {
    marginTop: 10,
    backgroundColor: '#f46ecc'
},
webView:{
    width: 300,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
},
iosView:{
    backgroundColor: '#f7e2c9',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
},
androidView:{
    backgroundColor: '#f7c9c9',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
}
})