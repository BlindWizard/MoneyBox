import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DrawerMenu } from '../components/DrawerMenu';
import { WalletsListHeader } from '../components/WalletsListHeader';
import { WalletsList } from '../components/WalletsList';
import { AddButton } from '../components/AddButton';

export class WalletsListScreen extends React.Component {
    render() {
        return (
            <DrawerMenu
                ref={drawer => {this.drawer = drawer}}
                content={
                    <View style={styles.layout}>
                        <View>
                            <WalletsListHeader onMenuPress={() => {this.drawer.openDrawer()}}/>
                            <WalletsList onPress={() => {this.props.navigation.navigate('ActionsList')}}/>
                        </View>
                        <AddButton onPress={() => {this.props.navigation.navigate('AddWallet')}}/>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#fff',
    },
    drawerContent: {
        flex: 1,
        backgroundColor: '#fff',
    }
});