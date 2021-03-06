import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AddHeader } from '../components/AddHeader';
import { AddActionForm } from '../components/AddActionForm';

export class AddActionScreen extends React.Component {
    submitForm() {
        this.actionForm.addAction();
    }

    render() {
        return (
            <View style={styles.layout}>
                <AddHeader
                    onClose={() => {this.props.navigation.navigate('ActionsList')}}
                    headerText='Добавление действия'
                    onCreateActionPress={() => {this.submitForm()}}
                />
                <AddActionForm
                    ref={form => {this.actionForm = form }}
                    onSubmit={() => {this.props.navigation.navigate('ActionsList')}}
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