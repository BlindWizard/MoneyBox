import { AsyncStorage } from 'react-native';

let items = [];

export class AbstractStore {
    constructor(type) {
        this.type        = type;
        items[this.type] = null;
    }

    async getAll() {
        if (null === items[this.type]) {
            let thisItems = await AsyncStorage.getItem(this.type);
            if (null === thisItems) {
                thisItems = [];
            }
            else {
                thisItems = JSON.parse(thisItems);
            }

            items[this.type] = thisItems;
        }

        return items[this.type];
    }

    async getOne() {
        if (null === items[this.type]) {
            items[this.type] = await this.getAll();
        }

        let item = null;
        if (items[this.type] instanceof Array) {
            item = items[this.type].shift();
        }
        else {
            item = items[this.type];
        }

        if (typeof item === 'undefined') {
            return null;
        }

        return item;
    }

    async add(item) {
        if (null === items[this.type]) {
            items[this.type] = await this.getAll();
        }

        items[this.type].push(item);

        return this.set(items[this.type]);
    }

    async remove(id) {
        if (null === items[this.type]) {
            items = await this.getAll();
        }

        items[this.type] = items[this.type].filter(items => items.id !== id);

        return this.set(items[this.type]);
    }

    async set(items) {
        return AsyncStorage.setItem(this.type, JSON.stringify(items));
    }
}