export default class Purchase {
    constructor(name, price) {
        this.name      = name;
        this.price     = price;
        this.createdAt = new Date();
    }
}