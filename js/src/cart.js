class Cart {
    constructor() {
        this.price = 8
        this.books = []
    }

    addBook(title) {
        this.books.push(title)
    }

    getPrice() {
        let discount = (this.books.length - 1)*0.05;
        return this.price * this.books.length * (1-discount);
        // switch (this.books.length) {
        //     case 0:
        //         return 0
        //     case 1:
        //         return this.price
        //     case 2:
        //         return this.price * 2 * 0.95
        //     case 3:
        //         return this.price * 3 * 0.90
        //     case 4:
        //         return this.price * 4 * 0.85
        //     case 5:
        //         return this.price * 5 * 0.80
        //     case 6:
        //         return this.price * 6 * 0.75
        //     case 7:
        //         return this.price * 7 * 0.70
        // }

    }
}

module.exports = Cart;
