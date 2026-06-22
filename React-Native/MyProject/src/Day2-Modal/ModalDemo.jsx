import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import {Button} from 'react-native-paper'

export default function ModalDemo() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <Button
        mode="contained" 
        onPress={() => setModalVisible(true)}>
            Show Modal
        </Button>
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            style={{margin: 20}}
            >
        <View>
            <Text>This is a modal</Text>
            <Button
            mode="contained" 
            onPress={() => setModalVisible(false)}>
            Hide Modal
        </Button>
        </View>
        </Modal>
    </View>
  )
}