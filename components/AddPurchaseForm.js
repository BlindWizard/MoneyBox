import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import PurchasesStore from  '../stores/PurchasesStore';
import Purchase from '../models/Purchase';

export default class AddPurchaseForm extends React.Component {
    constructor() {
        super();
        this.state = {
            purchaseName:  null,
            purchasePrice: null,
            errors: {
                nameError: null,
                priceError: null,
            },
        }
    }

    validateForm() {
        let isValid = true;
        let errors = {};

        if (null === this.state.purchaseName || '' === this.state.purchaseName) {
            errors.nameError = 'Пожалуйста, укажите название покупки';
            isValid = false;
        }

        if (null === this.state.purchasePrice || '' === this.state.purchasePrice) {
            errors.priceError = 'Пожалуйста, укажите цену покупки';
            isValid = false;
        }

        this.setState({errors});

        return isValid;
    }

    addPurchase() {
        if (false === this.validateForm()) {
            return;
        }

        let purchasesStore = new PurchasesStore();
        let purchase       = new Purchase(this.state.purchaseName, this.state.purchasePrice);

        purchasesStore.addPurchase(purchase).then(() => {this.props.onSubmit()});
    }

    render() {
        return (
            <View style={styles.layout}>
                <TextField
                    label="Название покупки"
                    onChangeText={(purchaseName) => {this.setState({purchaseName})}}
                    onSubmitEditing={() => {this.addPurchase()}}
                    error={ this.state.errors.nameError }
                />
                <TextField
                    label="Стоимость"
                    keyboardType="numeric"
                    onChangeText={(purchasePrice) => {this.setState({purchasePrice})}}
                    onSubmitEditing={() => {this.addPurchase()}}
                    error={ this.state.errors.priceError }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        paddingLeft:  10,
        paddingRight: 10,
    }
});