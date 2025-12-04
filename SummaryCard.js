// TODO: implement a reusable summary card component
// props: title, value
// layout: white box with shadow and centered text
// styles: padding 16, borderRadius 12
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Android shadow
        elevation: 3,
    },
    title: {
        fontSize: 14,
        color: '#666',
        marginBottom: 6,
    },
    value: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111',
    },
});

export default function SummaryCard({ title, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}