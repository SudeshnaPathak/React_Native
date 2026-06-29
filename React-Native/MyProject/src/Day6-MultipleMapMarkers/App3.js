import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
 
 
export default function App() {
    const [markerPosition, setMarkerPosition] = React.useState(
    {
        latitude: 37.78825,
        longitude: -122.4324,
    });
  return (
    <View style={{flex:1}}>
      <Text>App</Text>
      <MapView style={{flex:1, height:'100%'}}
      initialRegion={{
        latitude: markerPosition.latitude,
        longitude: markerPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker coordinate={markerPosition}
        title="New Selected Location"
        description="This is the new selected location"
        draggable
        onDragEnd={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
        pinColor="blue"
        />
        </MapView>
        <View style={{position:'absolute', bottom:20, left:0, right:0, alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>Selected Position:</Text>
            <Text>Latitude: {markerPosition.latitude.toFixed(6)}</Text>
            <Text>Longitude: {markerPosition.longitude.toFixed(6)}</Text>
        </View>
 
 
   
    </View>
  )
}