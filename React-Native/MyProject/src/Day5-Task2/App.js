import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';
import { FlatList } from 'react-native';
 
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions(
    {
        duration:2000,
        backgroundColor:'#f6f6f3',
        image:require('../../assets/icon.png'),
    }
)
 
export default function App() {
    const [data, setData] = React.useState(null);
    const [appIsReady, setAppIsReady]=React.useState(false)
    async function fetchData()
    {
        try{
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
            await new Promise(res=>setTimeout(res,2000))
        }
        catch(e){
            console.log(e)
        }
        finally{
            setAppIsReady(true)
            await SplashScreen.hideAsync();
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <View style={{flex:1}}>
        {appIsReady ? 
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{flex:1, padding: 10, borderBottomWidth: 1, borderBottomColor: '#56b7d4' }}>
                        <Text>UserId: {item.userId}</Text>
                        <Text>Title: {item.title}</Text>
                        <Text>Body: {item.body}</Text>
                    </View>
                )} />
        </View> : 
        <View>   
        <Text> <ActivityIndicator />  Loading...</Text>
        </View>
            }
    </View>
  )
}