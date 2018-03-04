import React from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class SettingsHeader extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement='close'
                centerElement='Настройки'
                rightElement='check'
                onLeftElementPress={() => {this.props.onClose()}}
                onRightElementPress={() => {this.props.onSaveSettings()}}
                style={styles}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        height:     80,
    },
});