import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 12.98,
        longitude: 77.35,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}/>
      <Marker
        coordinate={{ latitude: 12.98, longitude: 77.35 }}
        title="Bangalore"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
