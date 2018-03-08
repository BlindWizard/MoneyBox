import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DrawerMenu } from '../components/DrawerMenu';
import { PurchaseListHeader } from '../components/PurchaseListHeader';
import { PurchasesList } from '../components/PurchasesList';
import { ToAddPurchaseButton } from '../components/ToAddPurchaseButton';

export class PurchasesListScreen extends React.Component {
    render() {
        return (
            <DrawerMenu
                ref={drawer => {this.drawer = drawer}}
                content={
                    <View style={styles.layout}>
                        <View>
                            <PurchaseListHeader onMenuPress={() => {this.drawer.openDrawer()}} />
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