import { StyleSheet, View } from 'react-native'
import * as React from 'react';
import { Card, Button, Avatar, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Contact() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Card style={styles.card}
            mode="elevated">
                <Card.Title 
                title="Emergency Contact"
                titleStyle={{fontSize: 24, fontWeight: '500'}} 
                left={(props) => <Avatar.Text {...props} size={40} label="S" />}  />
                <Card.Content>
                    <Text variant="titleLarge">Name: Sudeshna Pathak</Text>
                    <Text variant="bodyMedium">Relationship: Daughter</Text>
                    <Text variant="bodyMedium">Phone: 1234567890</Text>
                    <Text variant="bodyMedium">Address: Dhanbad</Text>
                </Card.Content>
                 <Card.Actions>
                    <Button onPress={() => alert('Calling Sudeshna Pathak...')}>Call</Button>
                    <Button onPress={() => alert('Messaging Sudeshna Pathak...')}>Message</Button>
                 </Card.Actions>
            </Card>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    card: {
        width: '100%',
        margin: 20,
    }
})