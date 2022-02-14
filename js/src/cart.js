class Cart {
    constructor() {
        this.price = 8
        this.books = []
        this.lots = {}
    }

    addBook(title) {
        this.books.push(title)
    }

    getPrice() {
        this.getNbVolumes();
        return Object.values(this.lots)

        let discount = (this.books.length - 1)*0.05;
        return this.price * this.books.length * (1-discount);
    }

    getNbVolumes() {
        for (const title of this.books) {
            this.lots.hasOwnProperty(title) ? this.lots[title] +=1 : this.lots[title] = 1
        }
    }
}

module.exports = Cart;
