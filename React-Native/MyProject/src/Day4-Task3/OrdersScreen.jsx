import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper';

export default function OrdersScreen() {
    const orders = useSelector(state => state.retail.orders);
    const [expandedOrderId, setExpandedOrderId] = React.useState(null);
  return (
    <View style={styles.container}>
      <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    const isExpanded = expandedOrderId === item.id;
                    return (
                        <View style={styles.orderRow}>
                            <Text>Order ID: {item.id}</Text>
                            <Text>Items: {item.itemCount}</Text>
                            <Text>Total: ₹{item.totalAmount.toFixed(2)}</Text>
                            <Text>Timestamp: {new Date(item.timestamp).toLocaleString()}</Text>
                            <Button
                                mode='outlined'
                                onPress={() => setExpandedOrderId(isExpanded ? null : item.id)}
                            >
                                {isExpanded ? 'Hide Details' : 'Show Details'}
                            </Button>
                            {isExpanded && (
                                <View style={styles.orderDetails}>
                                    <Text style={styles.timeText}>Time: {item.timestamp}</Text>
                                    {item.items.map(orderItem => (
                                        <View key={orderItem.id} style={styles.orderItemRow}>
                                            <Text style={styles.cell}>{orderItem.name}</Text>
                                            <Text style={styles.cell}>Qty: {orderItem.quantity}</Text>
                                            <Text style={styles.cell}>₹{orderItem.price * orderItem.quantity}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    );
                }}
            />
    </View>
  )
}   
                       

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    orderRow: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    orderDetails: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5
    },
    orderItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    timeText: {
        fontStyle: 'italic',
        marginBottom: 5
    },
    cell: {
        flex: 1
    }
})