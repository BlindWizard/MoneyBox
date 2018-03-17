import UUID from 'uuid/v4';

export class Action {
    constructor(id, name, price, type, date) {
        if (null === id) {
            id = UUID();
        }

        if (null === date) {
            date = new Date();
        }

        if (null === type) {
            type = Action.getDefaultType();
        }

        this.id        = id;
        this.name      = name;
        this.price     = price;
        this.type      = type;
        this.createdAt = date;

        console.log(this);
    }

    static getTypes() {
        return {
            income: 1,
            spend:  2,
        }
    }

    static getDefaultType() {
        return Action.getTypes().spend;
    }
}