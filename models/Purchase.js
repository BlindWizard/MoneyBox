import UUID from 'uuid/v4';

export class Purchase {
    constructor(id, name, price, date) {
        if (null === id) {
            id = UUID();
        }

        if (null === date) {
            date = new Date();
        }

        this.id        = id;
        this.name      = name;
        this.price     = price;
        this.createdAt = date;
    }
}