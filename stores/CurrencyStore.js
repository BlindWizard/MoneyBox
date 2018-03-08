import { AbstractStore } from './AbstractStore';

let currency = null;

export class CurrencyStore extends AbstractStore {
    constructor() {
        super('Currency');
    }

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
        currency = await this.getOne();
        if (null === currency) {
            currency = this.getDefault()
        }

        return currency;
    }

    async setCurrency(currency) {
        if (null === currency) {
            currency = await this.getDefault();
        }

        return this.set(currency);
    }
}