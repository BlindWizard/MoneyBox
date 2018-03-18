import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { StoreFactory } from  '../stores/StoreFactory';
import { Wallet } from '../models/Wallet';

export class AddWalletForm extends React.Component {
    constructor() {
        super();
        this.state = {
            walletName:  null,
            errors: {
                nameError: null,
            },
        }
    }

    validateForm() {
        let isValid = true;
        let errors = {};

        if (null === this.state.walletName || '' === this.state.walletName) {
            errors.nameError = 'Пожалуйста, укажите название кошелька';
            isValid = false;
        }

        this.setState({errors});

        return isValid;
    }

    addWallet() {
        if (false === this.validateForm()) {
            return;
        }

        let store    = StoreFactory.getInstance('Wallet');
        let wallet = new Wallet(null, this.state.walletName);

        store.add(wallet).then(() => {this.props.onSubmit()});
    }

    render() {
        return (
            <View style={styles.layout}>
                <TextField
                    label="Название"
                    onChangeText={(walletName) => {this.setState({walletName})}}
                    onSubmitEditing={() => {this.addWallet()}}
                    error={this.state.errors.nameError}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        paddingLeft:  10,
        paddingRight: 10,
    },
});