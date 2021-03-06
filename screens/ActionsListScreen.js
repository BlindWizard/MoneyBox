import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DrawerMenu } from '../components/DrawerMenu';
import { ActionsListHeader } from '../components/ActionsListHeader';
import { ActionsList } from '../components/ActionsList';
import { AddButton } from '../components/AddButton';

export class ActionsListScreen extends React.Component {
    render() {
        return (
            <DrawerMenu
                ref={drawer => {this.drawer = drawer}}
                content={
                    <View style={styles.layout}>
                        <View>
                            <ActionsListHeader onMenuPress={() => {this.drawer.openDrawer()}} />
                            <ActionsList/>
                        </View>
                        <AddButton onPress={() => {this.props.navigation.navigate('AddAction')}} />
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