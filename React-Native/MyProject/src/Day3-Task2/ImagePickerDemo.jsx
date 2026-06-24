import { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons'; // Third-party Vector Icon bundle

export default function ImagePickerDemo({ selectedImage, setSelectedImage }) {

  async function HandleImagePicker() {
    let myimage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    if (!myimage.canceled) {
        setSelectedImage(myimage.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>ID Card Image:</Text>

        {selectedImage ? (
            <>
            <Image source={{ uri: selectedImage }} style={styles.imageBox} />
            <Button title='Remove ID Card' onPress={() => setSelectedImage(null)}/>
            </>
        ) : (
            <>
            <View style={[styles.imageBox, styles.placeholderBox]}>
                <Ionicons name="card-outline" size={50} color="#888" />
                <Text style={styles.placeholderText}>No ID Loaded</Text>
            </View>
            <Button title='Upload ID Card' onPress={HandleImagePicker}/>
            </>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageBox: {
    width: 300,
    height: 320,
    borderRadius: 12,
    marginBottom: 10,
  },
  placeholderBox: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#888888',
    fontSize: 13,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
});
