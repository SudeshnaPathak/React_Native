import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../context/AppContext';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AppDrawer from './AppDrawer';
import RequestDetailsScreen from '../screens/RequestDetailsScreen';
import AnnouncementDetailsScreen from '../screens/AnnouncementDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddRequestScreen from '../screens/AddRequestScreen';

const Stack = createStackNavigator();
export default function RootStack() {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <Stack.Navigator>
        {!isAuthenticated ? (
            <>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </>
        ) : (
            <>
                <Stack.Screen name="Main App" component={AppDrawer} options={{ headerShown: false }}/>
                <Stack.Screen name="Request Details" component={RequestDetailsScreen} />
                <Stack.Screen name="Announcement Details" component = {AnnouncementDetailsScreen} />
                <Stack.Screen name="Add Request" component={AddRequestScreen} />
                <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
            </>
        )}
    </Stack.Navigator>
  )
}