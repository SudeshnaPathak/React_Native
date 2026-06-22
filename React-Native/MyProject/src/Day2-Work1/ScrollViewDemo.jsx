import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
 
export default function ScrollViewDemo() {
    return (
        <ScrollView style={styles.container}>
            {[...Array(20).keys()].map(i => (
                <Text key={i} style={styles.text}>Item {i + 1}</Text>
            ))}
        </ScrollView>
        // <FlatList
        //     data={[...Array(20).keys()]}
        //     renderItem={({item}) => <Text style={styles.text}>Item {item + 1}</Text>}
        //     keyExtractor={item => item.toString()}
        // />  
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    text: {
        fontSize: 20,
        padding: 10,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid black'
    },
})