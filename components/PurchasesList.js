import React from 'react';
import { Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-material-ui';

import PurchasesStore from  '../stores/PurchasesStore';

export default class PurchasesList extends React.Component {
    constructor() {
        super();

        this.state = {
            purchases: []
        };
    }

    componentWillMount() {
        let purchasesStore = new PurchasesStore();
        purchasesStore.getPurchases().then((result) => {
            if (null !== result) {
                this.setState({
                    purchases: result
                });
            }
        });
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.purchases.map((purchase, i) => (
                        <ListItem
                            key={i}
                            centerElement={<Text>{purchase.name} - {purchase.price}</Text>}
                            onPress={() => {}}
                            divider
                        />
                    ))
                }
            </ScrollView>
        );
    }
}