import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-material-ui';
import Moment from 'moment';

import PurchasesStore from  '../stores/PurchasesStore';
import CurrencyStore from '../stores/CurrencyStore';

export default class PurchasesList extends React.Component {
    constructor() {
        super();

        this.purchasesStore = new PurchasesStore();
        this.currencyStore = new CurrencyStore();
        this.state = {
            purchases: [],
            currencyIcon: this.currencyStore.getDefault().icon,
        };
    }

    componentDidMount() {
        this.purchasesStore.getPurchases().then((purchases) => {
             this.setState({purchases});
        });

        this.currencyStore.getCurrency().then((currency) => {
            this.setState({
                currencyIcon: currency.icon
            });
        })
    }

    deletePurchase(key) {
        this.purchasesStore.deletePurchase(key).then(() => {
            this.purchasesStore.getPurchases().then((purchases) => {
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
                                        onRightElementPress={() => {this.deletePurchase(i)}}
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