import { View, Text } from 'react-native'
import React from 'react'
 
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-web';
 
 
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const Tab=createBottomTabNavigator();
 
const products=[
    {id:1,name:'Product 1',price:100},
    {id:2,name:'Product 2',price:200},
    {id:3,name:'Product 3',price:300}
]
const orders=[
    {id:1,product:'Product 1',quantity:2},
    {id:2,product:'Product 2',quantity:3},
    {id:3,product:'Product 3',quantity:1}
]
const profileDetails={
    name:'Varsha',
    email:'varsha@example.com',
    phone:'+91 98765 43210',
    address:'Kolkata, India'
}
 
function DashboardScreen({navigation}){
    return(
        <View>
            <Text>Dashboard</Text>
            <Button title="Menu"
            onPress={()=>navigation.openDrawer()}
            />
            <Button title="Go to Products"
            onPress={()=>navigation.navigate('ProductsTab')}
            />
        </View>
    )
}
function ProductStackNavigator()
{
    return(
        <Stack.Navigator initialRouteName='Products'>
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}
function ProductsScreen({navigation}){
    return(
        <View>
            <FlatList
            data={products}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View>
                    <Text>{item.name}</Text>
                    <Button
                    title='View Details'
                    onPress={()=>navigation.navigate('ProductDetails',{product:item})} />
                </View>
            )}
            />
 
        </View>
    )
}
function ProductDetailsScreen({route,navigation}){
    const {product}=route.params;
    return(
        <View>
            <Text>Product Details</Text>
            <Text>Name: {product.name}</Text>
            <Text>Price: {product.price}</Text>
        </View>
    )
}   
function HomeScreen({navigation}){
    return(
        <Tab.Navigator initialRouteName='Dashboard'>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="ProductsTab" component={ProductStackNavigator} />
        </Tab.Navigator>
    )
}
 
function OrdersScreen({navigation}){
    return(
        <View>
            <FlatList
            data={orders}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
                <View>
                    <Text>Product: {item.product}</Text>
                    <Button
                    title='View Details'
                    onPress={()=>navigation.navigate('OrderDetails',{order:item})} />
                </View>
            )}
            />
        </View>
    )
}
function ProfileScreen({navigation}){
    return(
        <View>
            <Text>Profile</Text>
            <Text>Name: {profileDetails.name}</Text>
            <Text>Email: {profileDetails.email}</Text>
            <Button
            title='View Profile Details'
            onPress={()=>navigation.navigate('ProfileDetails',{profile:profileDetails})}
            />
        </View>
    )
 
}
function ProfileNavigator(){
    return(
        <Stack.Navigator initialRouteName='ProfileHome'>
            <Stack.Screen name="ProfileHome" component={ProfileScreen} options={{title:'Profile'}} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        </Stack.Navigator>
    )
}
function ProfileDetailsScreen({route}){
    const {profile}=route.params;
    return(
        <View>
            <Text>Profile Details</Text>
            <Text>Name: {profile.name}</Text>
            <Text>Email: {profile.email}</Text>
            <Text>Phone: {profile.phone}</Text>
            <Text>Address: {profile.address}</Text>
        </View>
    )
}
function OrderNavigator(){
    return(
        <Stack.Navigator initialRouteName='Orders'>
            <Stack.Screen name="Orders" component={OrdersScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        </Stack.Navigator>
    )
}
function OrderDetailsScreen({route,navigation}){
    const {order}=route.params;
    return(
        <View>
            <Text>Order Details</Text>
            <Text>Product: {order.product}</Text>
            <Text>Quantity: {order.quantity}</Text>
        </View>
    )
}
export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Orders" component={OrderNavigator} />
            <Drawer.Screen name="Profile" component={ProfileNavigator} />
        </Drawer.Navigator>
        </NavigationContainer>
  )
}