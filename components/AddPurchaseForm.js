import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class AddPurchaseForm extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <TextField
                    label="Название покупки"
                    onChangeText={(text) => this.props.onChangeName(text)}
                />
                <TextField
                    label="Стоимость"
                    keyboardType="numeric"
                    onChangeText={(number) =>this.props.onChangePrice(number)}
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