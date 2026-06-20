import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput} from 'react-native-paper'

export default function AddTaskBar({ inputValue, setInputValue, onAddTask, inputRef }) {
  return (
    <View style={styles.addTaskBar}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Add a new task..."
        mode="outlined"
        outlineStyle={{ borderRadius: 10 , borderWidth: 2}}
        placeholderTextColor="grey"
        theme={{
          colors: {
            outline: 'lightgrey',        
            primary: 'purple',        
          }
        }}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button
        mode="contained"
        onPress={onAddTask}
        style={ styles.button }
        labelStyle={{ fontSize: 14 , fontWeight: 'bold'}}
        >
        Add 
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  addTaskBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f3efef',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6
  },
})