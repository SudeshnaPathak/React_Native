import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Header from './Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [searchTerm , setSearchTerm] = React.useState('');
  const [activeCoords, setActiveCoords] = React.useState(null);
  
  const CATEGORIES = ['Hospital', 'Restaurant', 'Police Station', 'Fire Station', 'Bank', 'Other'];

  async function getBackgroundPermissionsAsync() {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if(status !== 'granted') {
              console.log('Permission to access location was denied');
              return;
          }
          const location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
      }
  
    useEffect(() => {getBackgroundPermissionsAsync()}, []);

  const [serviceLocation, setServiceLocation] = React.useState([
    {
        id: '1',
        title: 'Asarfi Hospital',
        description: 'Healthcare facility near Hirapur',
        latitude: 23.8215,
        longitude: 86.4385,
        category: 'Hospital',
        pinColor: 'red',
    },
    {
        id: '2',
        title: 'Kaveri Restaurant',
        description: 'Popular dining spot in Hirapur',
        latitude: 23.8122,
        longitude: 86.4410,
        category: 'Restaurant',
        pinColor: 'green',
    },
    {
        id: '3',
        title: 'Dhanbad Sadar Police Station',
        description: 'Local law enforcement office',
        latitude: 23.8048,
        longitude: 86.4302,
        category: 'Police Station',
        pinColor: 'blue',
    },
    {
        id: '4',
        title: 'Dhanbad Fire Station',
        description: 'Local fire department HQ',
        latitude: 23.7995,
        longitude: 86.4258,
        category: 'Fire Station',
        pinColor: 'orange',
    },
    {
        id: '5',
        title: 'SBI Hirapur Branch',
        description: 'State Bank of India near Court Road',
        latitude: 23.8115,
        longitude: 86.4392,
        category: 'Bank',
        pinColor: 'purple',
    }
  ]);

  const filteredLocations = serviceLocation.filter(location => location.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                location.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                location.description.toLowerCase().includes(searchTerm.toLowerCase()));

  const customLocationsCount = serviceLocation.filter(location => location.title.toLowerCase().includes('custom')).length;

  function handleMapPress(event) {
    const { coordinate } = event.nativeEvent;
    setActiveCoords(coordinate);
  }

  function handleSelectCategory(selectedCategory) {
    if (activeCoords && selectedCategory !== '') {
      const newLocation = {
        id : Date.now().toString(),
        title: `Custom Location ${customLocationsCount + 1}`,
        description: `User added location`,
        latitude: activeCoords.latitude,
        longitude: activeCoords.longitude,
        category: selectedCategory,
        pinColor: 'yellow',
      };
      setServiceLocation(serviceLocation => [...serviceLocation, newLocation]);
      setActiveCoords(null); 
    }
  }

  return (
    <SafeAreaProvider>
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.innerContainer}>

      <Header />

      <TextInput
        style={styles.searchBar}
        placeholder="Search...."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <MapView 
        style={styles.map}
        region={{
            latitude: currentLocation ? currentLocation.coords.latitude : 23.8215,
            longitude: currentLocation ? currentLocation.coords.longitude : 86.4390,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        onPress={handleMapPress}
      >
        {
            filteredLocations.map((location) => (
                <Marker
                key={location.id}
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title={location.title}
                description={location.description}
                pinColor={location.pinColor}
                />
            ))
        }
      </MapView>

      {activeCoords && (
        <View style={styles.customLocationModal}>
          <Text style={styles.label}>Select Category to Save:</Text>
          
          <View style={styles.pickerContainer}>
            <Picker
                selectedValue={null}
                onValueChange={(value) => handleSelectCategory(value)}
                >
                <Picker.Item label="Select a category..." value="" />
                {CATEGORIES.map((category) => (
                    <Picker.Item key={category} label={category} value={category} />
                ))}
                </Picker>
          </View>

        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total Locations: {filteredLocations.length}</Text>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  map: {
    flex: 1,
    height: '100%',
  },
  customLocationModal: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    fontWeight: 'bold',
  },
})
