import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddPurchaseHeader from '../components/AddPurchaseHeader';
import AddPurchaseForm from '../components/AddPurchaseForm';
import PurchasesStore from  '../stores/PurchasesStore';
import Purchase from '../models/Purchase';

export  default class AddPurchaseScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            purchaseName:  null,
            purchasePrice: null,
        }
    }

    addPurchase() {
        let purchasesStore = new PurchasesStore();
        let purchase       = new Purchase(this.state.purchaseName, this.state.purchasePrice);

        purchasesStore.addPurchase(purchase).then(() => { this.props.navigation.navigate('PurchasesList') });
    }

    render() {
        return (
            <View style={styles.layout}>
                <AddPurchaseHeader onCreatePurchasePress={() => {this.addPurchase()}} />
                <AddPurchaseForm
                    onChangeName={(name) => this.setState({purchaseName: name})}
                    onChangePrice={(price) => this.setState({purchasePrice: price})}
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