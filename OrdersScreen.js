// orders screen:
// 1. show heading "Recent Orders"
// 2. use FlatList
// 3. data: array of objects { id, customerName, total }
// 4. display each item in a card layout
// 5. show total formatted with $
// 6. add gentle padding and spacing
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
    { id: '1', customerName: 'Alice Johnson', total: 250.75 },
    { id: '2', customerName: 'Bob Smith', total: 120.0 },
    { id: '3', customerName: 'Charlie Brown', total: 75.5 },
];

export default function OrdersScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.total}>${item.total.toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Recent Orders</Text>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Android shadow
        elevation: 2,
    },
    customerName: {
        fontSize: 18,
        marginBottom: 8,
    },
    total: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});
