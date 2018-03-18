import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-material-ui';

import { StoreFactory } from  '../stores/StoreFactory';

export class WalletsList extends React.Component {
    constructor() {
        super();

        this.walletsStore = StoreFactory.getInstance('Wallet');
        this.state = {
            wallets: [],
        };
    }

    componentDidMount() {
        this.walletsStore.getAll().then((wallets) => {
            this.setState({wallets});
        });
    }

    render() {
        return (
            <View>
                {
                    (0 !== this.state.wallets.length)
                        ?
                        <View style={styles.cardList}>
                            {
                                this.state.wallets.map((wallet, i) => (
                                    <View  key={i} style={styles.card}>
                                        <Card onPress={() => {this.props.onPress()}}>
                                            <Text>{wallet.name}</Text>
                                            <Text>{wallet.name}</Text>
                                        </Card>
                                    </View>
                                ))
                            }
                        </View>
                        :
                        <View style={styles.alert}>
                            <Text style={styles.text}>У Вас не создано ни одного кошелька</Text>
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
    cardList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    card: {
        width: '50%',
    },
});