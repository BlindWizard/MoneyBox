import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AddPurchaseHeader } from '../components/AddPurchaseHeader';
import { AddPurchaseForm } from '../components/AddPurchaseForm';

export class AddPurchaseScreen extends React.Component {
    submitForm() {
        this.purchaseForm.addPurchase();
    }

    render() {
        return (
            <View style={styles.layout}>
                <AddPurchaseHeader
                    onClose={() => {this.props.navigation.navigate('PurchasesList')}}
                    onCreatePurchasePress={() => {this.submitForm()}}
                />
                <AddPurchaseForm
                    ref={form => {this.purchaseForm = form }}
                    onSubmit={() => {this.props.navigation.navigate('PurchasesList')}}
                />
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