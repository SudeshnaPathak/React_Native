import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function DetailsScreen({ route, navigation }) {
  const { foodItem } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text variant='headlineSmall'>Details Screen</Text>
      <Text variant='titleLarge' style={{ marginTop: 8 }}>
        {foodItem.name}
      </Text>
      <Text variant='bodyMedium' style={{ marginBottom: 16 }}>
        ${foodItem.price}
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Go Back
      </Button>
    </View>
  );
}
