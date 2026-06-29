import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function App() {
  const [name, setName] = React.useState('');
  const [savedName, setSavedName] = React.useState('');

  useEffect(() => {
    loadData();
  }, []);
  
  async function loadData(){
    const value = await AsyncStorage.getItem('name');
    if(value !== null){
      setSavedName(value);
    }
    console.log('Loaded name from AsyncStorage:', value);
  }

  async function saveData(){
    setSavedName(name);
    await AsyncStorage.setItem('name', name);
    console.log('Saved name to AsyncStorage:', name);
  }

  return (
    <View>
    <TextInput
    placeholder=""
    value={name}
    onChangeText={text => setName(text)}
  />
    <Button title="Save Name" onPress={saveData} />
    <Text>Saved Name: {savedName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})