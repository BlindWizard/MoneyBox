import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { StackNavigator } from 'react-navigation';

import { ActionsListScreen } from './screens/ActionsListScreen';
import { AddActionScreen } from './screens/AddActionScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import Theme from './theme/Theme';

const RootStack = StackNavigator(
    {
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
        initialRouteName: 'ActionsList',
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
