import React from 'react';
import { View, StyleSheet } from 'react-native';

import PurchaseListHeader from './../components/PurchaseListHeader';
import PurchasesList from './../components/PurchasesList';
import ToAddPurchaseButton from '../components/ToAddPurchaseButton';

export  default class PurchasesListScreen extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <View>
                    <PurchaseListHeader />
                    <PurchasesList />
                </View>
                <ToAddPurchaseButton onPress={() => this.props.navigation.navigate('AddPurchase')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#fff',
    }
});