import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AppContext } from '../context/AppContext';
import SectionHeader from '../components/SectionHeader';


export default function AddRequestScreen({ navigation }) {
  const { addRequest } = useContext(AppContext);
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');

  return (
    <View style={styles.container}>
      <SectionHeader title="Add Request" />

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      
      <Button
        title="Submit"
        onPress={() => {
          addRequest({ title, category });
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F7',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
});
