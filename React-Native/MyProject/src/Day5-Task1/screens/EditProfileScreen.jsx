import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import SectionHeader from '../components/SectionHeader';

export default function EditProfileScreen({ navigation}) {
  const { updateProfile } = useContext(AppContext);
  const { user } = useContext(AppContext);
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [phone, setPhone] = React.useState(user.phone);
  const [flatNo, setFlatNo] = React.useState(user.flatNo);
 
  return (
    <View style={styles.container}>
      <SectionHeader title="Edit Profile" />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Flat No"
        value={flatNo}
        onChangeText={setFlatNo}
      />
      <Button
        title="Update Profile"
        onPress={() => {
          updateProfile({ name, email, phone, flatNo });
          navigation.goBack();
        }}
      />
    </View>
  )
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