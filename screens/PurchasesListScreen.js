import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer-menu';

import DrawerMenu from '../components/DrawerMenu';
import PurchaseListHeader from '../components/PurchaseListHeader';
import PurchasesList from '../components/PurchasesList';
import ToAddPurchaseButton from '../components/ToAddPurchaseButton';

export  default class PurchasesListScreen extends React.Component {
    render() {
        return (
            <DrawerMenu
                content={
                    <View style={styles.layout}>
                        <View>
                            <PurchaseListHeader onMenuPress={() => {this.props.navigation.navigate('Settings')}} />
                            <PurchasesList />
                        </View>
                        <ToAddPurchaseButton onPress={() => {this.props.navigation.navigate('AddPurchase')}} />
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