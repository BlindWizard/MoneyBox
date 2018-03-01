import React from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class PurchaseListHeader extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement="menu"
                centerElement="Покупки сегодня"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Поиск...',
                }}
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