import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Drawer} from 'react-native-material-ui';

export class DrawerMenuContent extends React.Component {
    onClose() {
        this.props.onClose();
    }

    render() {
        return (
            <View style={styles.layout}>
                <Drawer>
                    <Drawer.Header>
                        <Drawer.Header.Account
                            avatar={<Avatar text='К'/>}
                            footer={{
                                dense: true,
                                centerElement: {
                                    primaryText: 'Копилка',
                                },
                            }}
                        />
                    </Drawer.Header>
                    <Drawer.Section
                        divider
                        items={[
                            {icon: 'bookmark-border', value: 'Кошельки'},
                            {icon: 'today', value: 'Действия'},
                        ]}
                    />
                    <Drawer.Section
                        title="Приложение"
                        items={[
                            {icon: 'settings', value: 'Настройки'},
                            {icon: 'info', value: 'О приложении'},
                        ]}
                    />
                </Drawer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex:            1,
        backgroundColor: '#fff',
    },
});