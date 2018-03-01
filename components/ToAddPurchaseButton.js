import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActionButton } from 'react-native-material-ui';

export default class AddPurchaseButton extends React.Component {
    render() {
        return (
            <ActionButton onPress={this.props.onPress}/>
        );
    }
}