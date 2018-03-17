import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import Moment from 'moment';

import { StoreFactory } from  '../stores/StoreFactory';

export class ActionsList extends React.Component {
    constructor() {
        super();

        this.actionsStore = StoreFactory.getInstance('Action');
        this.currencyStore  = StoreFactory.getInstance('Currency');
        this.state = {
            actions: [],
            currencyIcon: this.currencyStore.getDefault().icon,
        };
    }

    componentDidMount() {
        this.actionsStore.getAll().then((actions) => {
            this.setState({actions});
        });

        this.currencyStore.getCurrency().then((currency) => {
            this.setState({
                currencyIcon: currency.icon
            });
        })
    }

    deleteAction(id) {
        this.actionsStore.remove(id).then(() => {
            this.actionsStore.getAll().then((actions) => {
                this.setState({actions});
            });
        });
    }

    render() {
        return (
            <View>
                {
                    (0 !== this.state.actions.length)
                    ?
                        <ScrollView>
                            {
                                this.state.actions.map((action, i) => (
                                    <ListItem
                                        key={i}
                                        centerElement={
                                            <View style={styles.row}>
                                                <Text>{Moment(action.createdAt).format('HH:mm')}</Text>
                                                <Text>{action.name}</Text>
                                                <Text>{action.price} {this.state.currencyIcon}</Text>
                                            </View>
                                        }
                                        rightElement='delete'
                                        onRightElementPress={() => {this.deleteAction(action.id)}}
                                        divider
                                    />
                                ))
                            }
                        </ScrollView>
                    :
                        <View style={styles.alert}>
                            <Text style={styles.text}>Сегодня Вы не совершали никаких действий</Text>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    alert: {
        height:         100,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    row: {
        flexDirection:  'row',
        justifyContent: 'space-between',
    },
    name: {
        textAlign: 'left',
    },
    price: {
        textAlign: 'right',
    },
});