import React from 'react';
import { StyleSheet, Easing } from 'react-native';
import Drawer from 'react-native-drawer-menu';

import { DrawerMenuContent } from './DrawerMenuContent';

export class DrawerMenu extends React.Component {
    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        return (
            <Drawer
                ref={drawer => {this.drawer = drawer}}
                drawerWidth={275}
                drawerContent={<DrawerMenuContent />}
                type={Drawer.types.Default}
                drawerPosition={Drawer.positions.Left}
                easingFunc={Easing.ease}
                style={styles.layout}
            >
                {this.props.content}
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex:            1,
        paddingTop:      20,
        backgroundColor: '#fff',
    },
});