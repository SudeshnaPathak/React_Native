import { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-web';
 
export default function ImagePickerDemo() {
  const [selectedImages, setSelectedImages] = useState([]);
 
  async function HandleImagePicker() {
    let myimage=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:['images'],
        allowsMultipleSelection:true,
        selectionLimit:5,
        aspect:[4,3],
        quality:1,
    })
    console.log(myimage);
    if(!myimage.canceled){
        const uris = myimage.assets.map((asset) => asset.uri);
        setSelectedImages(uris);
    }
  }
 
  return (
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
        <Button title='Pick an Image' onPress={HandleImagePicker} />
        {
            selectedImages.length > 0 &&
            (
              <ScrollView>
                {
                  selectedImages.map((selectedImage) => (<Image source={{uri:selectedImage}} style={styles.image} />))
               }
                </ScrollView>  
            )
        }
    </View>
  );
}
 
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
});