import { PurchasesStore } from './PurchasesStore';
import { CurrencyStore } from './CurrencyStore';

export class StoreFactory {
    static getInstance(itemName) {
        switch (itemName) {
            case 'Purchase':
                return new PurchasesStore();
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