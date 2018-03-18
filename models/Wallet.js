import UUID from 'uuid/v4';

export class Wallet {
    constructor(id, name) {
        if (null === id) {
            id = UUID();
        }

        this.id   = id;
        this.name = name;
    }
}