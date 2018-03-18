import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
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
                        divider
                        items={[
                            {icon: 'settings', value: 'Настройки'},
                            {icon: 'info', value: 'О приложении'},
                        ]}
                    />
                    <Drawer.Section
                        items={[
                            {icon: 'settings', value: 'Сброс данных', onPress: () => {
                                AsyncStorage.getAllKeys((err, keys) => {
                                    console.log(keys);
                                    if (keys.length > 0) {
                                        AsyncStorage.multiRemove(keys);
                                    }
                                });
                            }}
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