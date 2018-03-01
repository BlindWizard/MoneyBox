import React from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class ToAddPurchaseButton extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement="menu"
                centerElement="Добавление покупки"
                rightElement="check"
                onRightElementPress={() => {this.props.onCreatePurchasePress()}}
                style = {styles}
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