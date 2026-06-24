import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Camera({photoUri, setPhotoUri}) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
   
  if (!permission) {
    return (
      <View style={styles.center}>
        <Text>Loading camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Camera permission is required</Text>
        <Button title="Grant Camera Permission" onPress={requestPermission} />
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Picture</Text>
      {photoUri ? (
        <View style={styles.previewWrapper}>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <Button title="Remove Photo" onPress={() => setPhotoUri(null)} />
        </View>
      ) : (
        <View style={styles.cameraWrapper}>
          <CameraView ref={cameraRef} style={styles.camera} facing="back" />
          <Button title="Capture Profile Picture" onPress={takePhoto} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  center: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  message: {
    textAlign: 'center',
    marginBottom: 12,
  },
  cameraWrapper: {
    width: 300,
    height: 370, 
    alignItems: 'center',
    marginBottom: 10,
  },
  previewWrapper: {
    width: 300,
    alignItems: 'center',
  },
  camera: {
    width: 300,
    height: 320,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  preview: {
    width: 300,
    height: 320,
    borderRadius: 12,
    marginBottom: 16,
  },
});
