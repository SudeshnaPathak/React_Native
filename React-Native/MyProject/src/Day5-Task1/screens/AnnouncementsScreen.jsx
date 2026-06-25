import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import AnnouncementCard from '../components/AnnouncementCard';
import { AppContext } from '../context/AppContext';
import SectionHeader from '../components/SectionHeader';

export default function AnnouncementsScreen({ navigation }) {
    const { announcements} = useContext(AppContext);
  return (
    <View>
      <SectionHeader title="Announcements" />
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <AnnouncementCard 
            item={item} 
            onPress={() => navigation.navigate('Announcement Details', { announcement: item })} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})