import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Switch from 'react-native-switch-pro';

import { StoreFactory } from  '../stores/StoreFactory';
import { Action } from '../models/Action';

export class AddActionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            actionName:  null,
            actionPrice: null,
            actionType:  Action.getDefaultType(),
            errors: {
                nameError: null,
                priceError: null,
            },
        }
    }

    validateForm() {
        let isValid = true;
        let errors = {};

        if (null === this.state.actionName || '' === this.state.actionName) {
            errors.nameError = 'Пожалуйста, укажите название действия';
            isValid = false;
        }

        if (null === this.state.actionPrice || '' === this.state.actionPrice) {
            errors.priceError = 'Пожалуйста, укажите сумму';
            isValid = false;
        }

        if (this.state.actionType !== Action.getTypes().income && this.state.actionType !== Action.getTypes().spend) {
            isValid = false;
        }

        this.setState({errors});

        return isValid;
    }

    addAction() {
        if (false === this.validateForm()) {
            return;
        }

        let store    = StoreFactory.getInstance('Action');
        let action = new Action(null, this.state.actionName, this.state.actionPrice, this.state.actionType);

        store.add(action).then(() => {this.props.onSubmit()});
    }

    setType(value) {
        if (true === value) {
            this.setState({actionType: Action.getTypes().income});
        }
        else {
            this.setState({actionType: Action.getTypes().spend});
        }
    }

    render() {
        return (
            <View style={styles.layout}>
                <TextField
                    label="Название"
                    onChangeText={(actionName) => {this.setState({actionName})}}
                    onSubmitEditing={() => {this.addAction()}}
                    error={this.state.errors.nameError}
                />
                <TextField
                    label="Сумма"
                    keyboardType="numeric"
                    onChangeText={(actionPrice) => {this.setState({actionPrice})}}
                    onSubmitEditing={() => {this.addAction()}}
                    error={this.state.errors.priceError}
                />
                <View style={styles.type}>
                    <View><Text>Расход</Text></View>
                    <Switch
                        defaultValue={this.state.actionType === Action.getTypes().income}
                        onSyncPress={(value) => {this.setType(value)}}
                    />
                    <View><Text>Приход</Text></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        paddingLeft:  10,
        paddingRight: 10,
    },
    type: {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-between',
    },
});