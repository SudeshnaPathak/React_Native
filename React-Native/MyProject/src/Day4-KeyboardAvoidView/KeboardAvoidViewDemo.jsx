import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { ScrollView } from 'react-native-web';
export default function KeyboardAvoidViewDemo() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter name" />
      <TextInput style={styles.input} placeholder="Enter email" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});