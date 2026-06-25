import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { AppContext } from '../context/AppContext';
import AppTabs from './AppTabs';
import RequestsScreen from '../screens/RequestsScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';
import EventsScreen from '../screens/EventsScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';

function CustomDrawerContent(props) {
    const { logout } = useContext(AppContext);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={logout} />
        </DrawerContentScrollView>
    );
}
const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={AppTabs} options={{ drawerLabel: 'Home Dashboard' }} />
      <Drawer.Screen name="My Requests" component={RequestsScreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
      <Drawer.Screen name="Community Events" component={EventsScreen} />
      <Drawer.Screen name="Payments" component={PaymentsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  )
}