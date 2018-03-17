import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AddActionHeader } from '../components/AddActionHeader';
import { AddActionForm } from '../components/AddActionForm';

export class AddActionScreen extends React.Component {
    submitForm() {
        this.actionForm.addAction();
    }

    render() {
        return (
            <View style={styles.layout}>
                <AddActionHeader
                    onClose={() => {this.props.navigation.navigate('ActionsList')}}
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