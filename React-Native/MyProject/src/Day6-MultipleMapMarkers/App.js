import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
 
export default function App() {
  const places = [
    { id: 1, title: 'Apollo Hospital', latitude: 12.93, longitude: 77.58 },
    { id: 2, title: 'Babeque Nation', latitude: 12.91, longitude: 77.58 },
  ];
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Places</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.93,
          longitude: 77.58,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 12,
  },
  map: {
    flex: 1,
  },
});