import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Details from './Details'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

//   const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {

//   return (
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Details" component={Details} />
//         </Stack.Navigator>
//     </NavigationContainer>

    
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={Home} />
//                 <Tab.Screen name="Details" component={Details} initialParams={{ name: 'Guest User' }}/>
//             </Tab.Navigator>
//         </NavigationContainer>
//   )

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}