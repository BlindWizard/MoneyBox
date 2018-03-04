import React from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer-menu';

import DrawerMenuContent from './DrawerMenuContent';

export  default class DrawerMenu extends React.Component {
    render() {
        let content = this.props.content;
        return (
            <Drawer
                drawerWidth={300}
                drawerContent={<DrawerMenuContent />}
                type={Drawer.types.Default}
                drawerPosition={Drawer.positions.Left}
            >
                {content}
            </Drawer>
        )
    }
}