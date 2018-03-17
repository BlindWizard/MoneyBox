import { ActionsStore } from './ActionsStore';
import { CurrencyStore } from './CurrencyStore';

export class StoreFactory {
    static getInstance(itemName) {
        switch (itemName) {
            case 'Action':
                return new ActionsStore();
                break;
            case 'Currency':
                return new CurrencyStore();
                break;
            default:
                throw new Error('Модель ' + itemName + ' не существует!');
                break;
        }
    }
}