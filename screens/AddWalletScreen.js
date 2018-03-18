import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AddHeader } from '../components/AddHeader';
import { AddWalletForm } from '../components/AddWalletForm';

export class AddWalletScreen extends React.Component {
    submitForm() {
        this.walletForm.addWallet();
    }

    render() {
        return (
            <View style={styles.layout}>
                <AddHeader
                    onClose={() => {this.props.navigation.navigate('WalletsList')}}
                    headerText='Добавление кошелька'
                    onCreateActionPress={() => {this.submitForm()}}
                />
                <AddWalletForm
                    ref={form => {this.walletForm = form }}
                    onSubmit={() => {this.props.navigation.navigate('WalletsList')}}
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