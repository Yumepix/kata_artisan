class Cart {
    constructor() {
        this.price = 8
        this.books = []
    }

    addBook(title) {
        this.books.push(title)
    }

    getPrice() {

        let total = 0
        this.getNbLots().forEach((nb_books) => {
            let discount = (nb_books - 1) * 0.05
            total += this.price * nb_books* (1 - discount)
        })
        // nécessaire pour éviter les erreurs après la virgule
        return parseFloat(total).toPrecision(6)
    }

    getNbUniqueBooks() {
        let lots = {}
        for (const title of this.books) {
            lots.hasOwnProperty(title) ? lots[title] += 1 : lots[title] = 1
        }

        return Object.values(lots)
    }

    getNbLots() {
        let nb_unique_books = this.getNbUniqueBooks()
        let lots = []

        while (nb_unique_books.some(elem => elem > 0)) {
            let lot = 0
            nb_unique_books.forEach((book, index) => {
                if (book > 0) {
                    nb_unique_books[index]--
                    lot++
                }
            }, 0)
            lots.push(lot)
        }
        return lots
    }

}

module.exports = Cart;
