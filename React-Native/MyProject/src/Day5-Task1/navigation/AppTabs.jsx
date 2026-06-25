import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RequestsScreen from '../screens/RequestsScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
   <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Requests' component={RequestsScreen} />
    <Tab.Screen name='Announcements' component={AnnouncementsScreen} />
    <Tab.Screen name='Profile' component={ProfileScreen} />
   </Tab.Navigator>
  )
}