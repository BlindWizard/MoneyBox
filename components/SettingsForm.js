import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import { StoreFactory } from '../stores/StoreFactory';

export class SettingsForm extends React.Component {
    constructor() {
        super();
        this.currencyStore = new StoreFactory.getInstance('Currency');
        this.state = {
            currencyCode:  this.currencyStore.getDefault().code
        }
    }

    componentDidMount() {
        this.currencyStore.getCurrency().then((currency) => {
            this.setState({
                currencyCode: currency.code
            });
        });
    }

    getCurrencyDropdownData() {
        let values = [];
        this.currencyStore.getCurrencies().forEach((currency) => {
            values.push(this.getCurrencyData(currency));
        });

        return values;
    }

    getCurrencyData(currency) {
        return {
            value: currency.code,
            label: currency.name + ' - ' + currency.icon,
        }
    }

    saveSettings() {
        let currency = this.currencyStore.getByCode(this.state.currencyCode);
        this.currencyStore.setCurrency(currency).then(() => {this.props.onSubmit()});
    }

    render() {
        return (
            <View style={styles.layout}>
                <Dropdown
                    label='Валюта'
                    data={this.getCurrencyDropdownData()}
                    value={this.state.currencyCode}
                    onChangeText={(currencyCode) => {this.setState({currencyCode})}}
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