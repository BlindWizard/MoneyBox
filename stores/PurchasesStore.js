import { AsyncStorage } from 'react-native';

let storage = null;

export default class PurchasesStore {
    async getPurchases() {
        if (null === storage) {
            let purchases = await AsyncStorage.getItem('purchases');
            if (null === purchases) {
                purchases = [];
            }
            storage = JSON.parse(purchases);
        }

        return storage;
    }

    async addPurchase(purchase) {
        if (null === storage) {
            storage = await this.getPurchases();
        }
        storage.push(purchase);

        return AsyncStorage.setItem('purchases', JSON.stringify(storage));
    }
}