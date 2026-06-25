import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-native-paper'
import { addToCart } from './RetailSlice';

export default function ProductsScreen({ navigation }) {
  const [search, setSearch] = React.useState('');
  const products = useSelector(state => state.retail.products);
  const dispatch = useDispatch();

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <TextInput 
       placeholder='Search Products'
       value={search}
       onChangeText={setSearch}
       style={styles.input}
      />
      <FlatList
       data={filtered}
       keyExtractor={item => item.id}
       renderItem={({item}) => (
        <View style={styles.itemRow}>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.category}</Text>
          <Text style={styles.cell}>₹{item.price}</Text>
          <Button 
           mode='contained'
           style={styles.button}
           onPress={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </Button>
        </View>
       )}
      />
       <Button mode="outlined" onPress={() => navigation.navigate('Cart')}>Go to Cart</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        gap: 10 
    },
    button: {
        marginLeft: 10
    },
    cell: {
        flex: 1
    }
})