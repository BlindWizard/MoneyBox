import { AsyncStorage } from 'react-native';

let purchases = null;

export default class PurchasesStore {
    async getPurchases() {
        if (null === purchases) {
            purchases = await AsyncStorage.getItem('purchases');

            if (null === purchases) {
                purchases = [];
            }
            else {
                purchases = JSON.parse(purchases);
            }
        }

        return purchases;
    }

    async deletePurchase(key) {
        if (null === purchases) {
            purchases = await this.getPurchases();
        }
        purchases.splice(key, 1);

        return AsyncStorage.setItem('purchases', JSON.stringify(purchases));
    }

    async addPurchase(purchase) {
        if (null === purchases) {
            purchases = await this.getPurchases();
        }

        purchases.push(purchase);

        return AsyncStorage.setItem('purchases', JSON.stringify(purchases));
    }
}