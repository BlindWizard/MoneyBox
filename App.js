import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';

import { ActionsListScreen } from './screens/ActionsListScreen';
import { AddActionScreen } from './screens/AddActionScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { WalletsListScreen } from './screens/WalletsListScreen';
import { AddWalletScreen } from './screens/AddWalletScreen';

import Theme from './theme/Theme';

const RootStack = StackNavigator(
    {
        WalletsList: {
            screen: WalletsListScreen,
        },
        AddWallet: {
            screen: AddWalletScreen,
        },
        ActionsList: {
            screen: ActionsListScreen,
        },
        AddAction: {
            screen: AddActionScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        initialRouteName: 'WalletsList',
        headerMode:       'none',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider uiTheme={Theme}>
                <RootStack/>
            </ThemeProvider>
        );
    }
}
