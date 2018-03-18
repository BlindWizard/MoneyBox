import { ActionsStore } from './ActionsStore';
import { CurrencyStore } from './CurrencyStore';
import { WalletsStore } from './WalletsStore';

export class StoreFactory {
    static getInstance(itemName) {
        switch (itemName) {
            case 'Action':
                return new ActionsStore();
                break;
            case 'Currency':
                return new CurrencyStore();
                break;
            case 'Wallet':
                return new WalletsStore();
            default:
                throw new Error('Модель ' + itemName + ' не существует!');
                break;
        }
    }
}