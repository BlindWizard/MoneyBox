import { AsyncStorage } from 'react-native';

let currency = null;

export default class CurrencyStore {
    getCurrencies() {
        return [
            {
                code: 0,
                name: 'Рубли',
                icon: 'Р',
            },
            {
                code: 1,
                name: 'Доллар',
                icon: '$',
            }
        ];
    }

    getDefault() {
        return this.getCurrencies().shift();
    }

    getByCode(code) {
        return this.getCurrencies().find((currency) => {return currency.code === code});
    }

    async getCurrency() {
        currency = await AsyncStorage.getItem('currency');
        if (null === currency) {
            currency = this.getDefault()
        }
        else {
            currency = JSON.parse(currency);
        }

        return currency;
    }

    async setCurrency(currency) {
        if (null === currency) {
            currency = await this.getDefault();
        }

        return AsyncStorage.setItem('currency', JSON.stringify(currency));
    }
}