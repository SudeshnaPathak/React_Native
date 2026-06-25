import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen({ route, navigation }) {
  const foodItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 }
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text variant='headlineSmall' style={{ marginBottom: 10 }}>Home Screen</Text>
      {foodItems.map((foodItem) => (
        <View key={foodItem.id} style={{ marginBottom: 10 }}>
        <Button
          key={foodItem.id}
          mode="contained"
          onPress={() => navigation.navigate('Details', { foodItem })}
        >
          {foodItem.name}
        </Button>
        </View>         
      ))}
    </View>
  );
}
