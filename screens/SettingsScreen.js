import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SettingsHeader } from '../components/SettingsHeader';
import { SettingsForm } from '../components/SettingsForm';

export class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <SettingsHeader
                    onClose={() => {this.props.navigation.navigate('PurchasesList')}}
                    onSaveSettings={() => {this.settingsForm.saveSettings()}}
                />
                <SettingsForm
                    ref={form => {this.settingsForm = form}}
                    onSubmit={() => {this.props.navigation.navigate('PurchasesList')}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#fff',
    },
});