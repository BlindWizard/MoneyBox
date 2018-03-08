import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import Moment from 'moment';

import { StoreFactory } from  '../stores/StoreFactory';

export class PurchasesList extends React.Component {
    constructor() {
        super();

        this.purchasesStore = StoreFactory.getInstance('Purchase');
        this.currencyStore  = StoreFactory.getInstance('Currency');
        this.state = {
            purchases: [],
            currencyIcon: this.currencyStore.getDefault().icon,
        };
    }

    componentDidMount() {
        this.purchasesStore.getAll().then((purchases) => {
            this.setState({purchases});
        });

        this.currencyStore.getCurrency().then((currency) => {
            this.setState({
                currencyIcon: currency.icon
            });
        })
    }

    deletePurchase(id) {
        this.purchasesStore.remove(id).then(() => {
            this.purchasesStore.getAll().then((purchases) => {
                this.setState({purchases});
            });
        });
    }

    render() {
        return (
            <View>
                {
                    (0 !== this.state.purchases.length)
                    ?
                        <ScrollView>
                            {
                                this.state.purchases.map((purchase, i) => (
                                    <ListItem
                                        key={i}
                                        centerElement={
                                            <View style={styles.row}>
                                                <Text>{Moment(purchase.createdAt).format('HH:mm')}</Text>
                                                <Text>{purchase.name}</Text>
                                                <Text>{purchase.price} {this.state.currencyIcon}</Text>
                                            </View>
                                        }
                                        rightElement='delete'
                                        onRightElementPress={() => {this.deletePurchase(purchase.id)}}
                                        divider
                                    />
                                ))
                            }
                        </ScrollView>
                    :
                        <View style={styles.alert}>
                            <Text style={styles.text}>Сегодня Вы не совершали покупок</Text>
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