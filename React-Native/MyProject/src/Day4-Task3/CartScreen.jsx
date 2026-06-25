import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-native-paper'
import { placeOrder, removeFromCart, updateCartQuantity } from './RetailSlice';

export default function CartScreen({ navigation }) {
    const cart = useSelector(state => state.retail.cart);
    const dispatch = useDispatch();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalTax = cart.reduce((sum, item) => sum + ((item.price * item.quantity) * (item.taxRate / 100)), 0);
    const total = subtotal + totalTax;

    function handleCheckout() {
        if(cart.length > 0) {
            const order = {
                id: `O${Date.now()}`,
                timestamp: new Date().toISOString(),
                items: [...cart],
                totalAmount: total,
                itemCount: cart.reduce((sum, item) => sum + item.quantity, 0)
            };
            dispatch(placeOrder(order));
            navigation.navigate('Orders');
        }
    }

  return (
    <View style={styles.container}>
      <FlatList
                data={cart}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemRow}>
                        <Text style={styles.cell}>{item.name}</Text>
                        <Text style={styles.cell}>Qty: {item.quantity}</Text>
                        <Text style={styles.cell}>₹{item.price * item.quantity}</Text>
                        <View style={styles.buttonRow}>
                            <Button
                                mode='contained'
                                style={{ marginRight: 5 }}
                                onPress={() => dispatch(updateCartQuantity({ id: item.id, change: 1 }))}
                            >
                                +
                            </Button>
                            <Button
                                mode='contained'
                                style={{ marginRight: 5 }}
                                onPress={() => dispatch(updateCartQuantity({ id: item.id, change: -1 }))}
                            >
                                -
                            </Button>
                            <Button
                                mode='contained'
                                onPress={() => dispatch(removeFromCart(item.id))}
                            >
                                Remove
                            </Button>
                        </View>
                    </View>
                )}
            />
        <View style={styles.summary}>
            <Text>Subtotal: ₹{subtotal.toFixed(2)}</Text>
            <Text>Total Tax: ₹{totalTax.toFixed(2)}</Text>
            <Text style={styles.totalText}>Total: ₹{total.toFixed(2)}</Text>
        </View>
        <Button mode="contained" onPress={handleCheckout} disabled={cart.length === 0}> Place Order </Button>
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    summary: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginTop: 10
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    cell: {
        flex: 1
    }
});