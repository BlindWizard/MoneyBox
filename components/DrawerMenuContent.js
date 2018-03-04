import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export  default class DrawerMenuContent extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text>Копилка</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#fff',
    },
});