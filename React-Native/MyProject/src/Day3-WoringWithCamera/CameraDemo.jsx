import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
 
export default function CameraDemo() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);
 
  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };
 
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
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <Button title="Grant Camera Permission" onPress={requestPermission} />
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Web Camera Demo</Text>
 
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />
 
      <View style={{ marginTop: 16 }}>
        <Button title="Take Photo" onPress={takePhoto} />
      </View>
 
      {photoUri && (
        <>
          <Text style={{ marginTop: 20, marginBottom: 8 }}>Captured Photo:</Text>
          <Image source={{ uri: photoUri }} style={styles.preview} />
        </>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  camera: {
    width: 360,
    height: 480,
    borderRadius: 12,
    overflow: 'hidden',
  },
  preview: {
    width: 240,
    height: 320,
    borderRadius: 12,
  },
});