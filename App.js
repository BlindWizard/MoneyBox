import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';

import { PurchasesListScreen } from './screens/PurchasesListScreen';
import { AddPurchaseScreen } from './screens/AddPurchaseScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import Theme from './theme/Theme';

const RootStack = StackNavigator(
    {
        PurchasesList: {
            screen: PurchasesListScreen,
        },
        AddPurchase: {
            screen: AddPurchaseScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        initialRouteName: 'PurchasesList',
        headerMode:       'none',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider uiTheme={Theme}>
                <RootStack />
            </ThemeProvider>
        );
    }
}
