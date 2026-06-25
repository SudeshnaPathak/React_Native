import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';
 
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions(
    {
        duration:2000,
        backgroundColor:'#ffffff',
        image:require('../../assets/icon.png'),
    }
)
 
export default function App() {
 
    const [appIsReady,setAppIsReady]=React.useState(false)
    async function MakeAppReady()
    {
        try{
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
        MakeAppReady()
    },[])
  return (
    <View>
        {appIsReady ? <Text>App is Ready</Text> : 
        <View>
            <ActivityIndicator />
            <Text>Loading...</Text>
            </View>}
    </View>
  )
}