import { View , Button} from 'react-native'
import React from 'react'
import Camera from './Camera'
import ImagePickerDemo from './ImagePickerDemo'
import { Text } from 'react-native-paper'

export default function App() {
  const [photoUri, setPhotoUri] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);
  function handleSubmit() 
  {
    if(!photoUri) alert("Please capture a profile picture before submitting.");
    else if(!selectedImage) alert("Please upload an ID card image before submitting.");
    else 
      {
        alert("Form submitted successfully!");
        setPhotoUri(null);
        setSelectedImage(null);
      }
  }
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', margin:20 }}>
    <Text variant="displaySmall">Employee Verification</Text>
    <View style={{ flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
     }}>
        <Camera photoUri={photoUri} setPhotoUri={setPhotoUri} />
        <ImagePickerDemo selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
   </View>
   <Button title="Submit" 
    onPress={handleSubmit}/>
   </View>
  )
}