import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function UseWinDimDemo() {
    const {width , height} = useWindowDimensions();
    const deviceType = width < 768 ? 'Mobile' : width < 1024 ? 'Tablet' : 'Desktop';
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Spring Sale</Text>
      <Text style = {styles.info}>Width: {width}</Text>
      <Text style = {styles.info}>Height: {height}</Text>
      <Text style = {styles.info}>Device Type: {deviceType}</Text>
      <View style = {[styles.card,
        {flexDirection: deviceType === 'Mobile' ? 'column' : 'row'}
      ]}>
        <Image 
        source={{uri:'https://picsum.photos/200/300'}} 
        style={styles.image} />
        <View style={styles.cardcontent}>
            <Text>Wireless Headphones</Text>
            <Text>Experience the freedom of wireless Audio</Text>
            <Text>Price: $99.99</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 18,
        marginVertical: 5
    },
    card: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#171313',
        boxshadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: 5,
        margin: 20
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    cardcontent: {
        flex: 1,
    }
})