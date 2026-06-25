import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Button } from 'react-native-web';
import { FlatList } from 'react-native-gesture-handler';
import RequestCard from '../components/RequestCard';
import SectionHeader from '../components/SectionHeader';

export default function RequestsScreen({ navigation }) {
    const { requests } = useContext(AppContext);
  return (
    <View style= {styles.container}>
        <SectionHeader title="Requests" />
        <Button
            title="Add New Request"
            onPress={() => navigation.navigate('Add Request')}
        />
        <FlatList
            data={requests}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <RequestCard
                    item={item}
                    onPress={() => navigation.navigate('Request Details', { request: item })}
                />
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({})