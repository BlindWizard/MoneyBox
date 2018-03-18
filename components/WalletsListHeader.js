import React from 'react';
import { StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export class WalletsListHeader extends React.Component {
    render() {
        return (
            <Toolbar
                leftElement='menu'
                centerElement='Мои кошельки'
                onLeftElementPress={() => {this.props.onMenuPress()}}
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