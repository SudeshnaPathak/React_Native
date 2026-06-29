import { View, Text,TextInput, FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'react-native-paper'
 
 
const products=[
    {
        id:1,
        name:'Iphone 14',
        price:1000
    },
    {
        id:2,
        name:'Iphone 13',
        price:800
    },
    {
        id:3,
        name:'Iphone 12',
        price:600
    }
]
export default function App() {
    const [cart,setCart]=React.useState([])
 
    useEffect(()=>{
        loadCart()
    },[])
    async function loadCart()
    {
        const existingProducts=await AsyncStorage.getItem('cart');
        if(existingProducts!==null)
        {
            setCart(JSON.parse(existingProducts))
        }
    }
    
    async function addToCart(item){
        const existingProduct=cart.find(product=>product.id===item.id)
        let updatedCart
        if(existingProduct){
            {
                updatedCart=cart.map(product=>{
                    if(product.id===item.id){
                        return {...product,quantity:product.quantity+1}
                    }
                    return product
                })
            }
        } else {
            updatedCart=[...cart,{...item,quantity:1}]
        }
        setCart(updatedCart)
        await AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
    }

    async function removeFromCart(item){
        const updatedCart=cart.filter(product=>product.id!==item.id)
        setCart(updatedCart)
        await AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
    }

    async function updateQuantity(item,change){
        const product=cart.find(product=>product.id===item.id)
        const newQuantity=product.quantity+change
        if(newQuantity==0){
            removeFromCart(item)
        } else {
            const updatedCart=cart.map(product=>{
                if(product.id===item.id){
                    return {...product,quantity:newQuantity}
                }
                return product
            })
            setCart(updatedCart)
            await AsyncStorage.setItem('cart',JSON.stringify(updatedCart))
        }
    }


  return (
    <View style={styles.container}>
      <Text>Shopping Cart</Text>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Products</Text>
        <FlatList
            data={products}
            renderItem={({item})=>(
                <View style={styles.productCard}>
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                    <Button onPress={()=>addToCart(item)} mode='outlined'>Add to Cart</Button>
                    <View style={styles.quantityContainer}>
                        <Button onPress={()=>updateQuantity(item,1)} mode='outlined' color='pink'>+</Button>
                        <Button onPress={()=>updateQuantity(item,-1)} mode='outlined' color='pink'>-</Button>
                    </View>
                    <Button onPress={()=>removeFromCart(item)} mode='outlined' color='red'>Remove from Cart</Button>
                </View>)}
            keyExtractor={(item)=>item.id.toString()}
            />
            <Text style={styles.title}>Cart</Text>
            <FlatList
                data={cart}
                renderItem={({item})=>(
                    <View style={styles.cartItem}>  
                    <Text>{item.name} x {item.quantity}</Text>
                    <Text>${item.price*item.quantity}</Text>
                    </View>
                )}
                keyExtractor={(item)=>item.id.toString()}
            />
 
    </View>
  )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },
    productCard:{
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        marginBottom:10
    },
    cartItem:{
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        marginBottom:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
    },
    quantityContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        marginTop:10,
        marginBottom:10
    },
    button:{
        marginTop:10,
        width:100,
        height:40,
        borderRadius:5,
    }
})