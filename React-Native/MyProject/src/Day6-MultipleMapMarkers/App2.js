import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
 
export default function App() {
    const [markers, setMarkers] = React.useState([]);
    const HandlePress = (event) => {
        const cord=event.nativeEvent.coordinate;
        setMarkers((prv) => [...prv, cord]);
    }
 
  return (
    <View style={{flex:1}}>
      <Text>App</Text>
      <MapView style={{flex:1, height:'100%'}}
      onPress={HandlePress}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
            {
                markers.map((coord,index)=>(
                    <Marker key={index} coordinate={coord} />
                ))
            }
      </MapView>
    </View>
  )
}