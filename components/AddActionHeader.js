import React from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export class AddActionHeader extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement='close'
                centerElement='Добавление покупки'
                rightElement='check'
                onLeftElementPress={() => {this.props.onClose()}}
                onRightElementPress={() => {this.props.onCreateActionPress()}}
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