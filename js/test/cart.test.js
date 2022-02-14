const { assert}  = require('chai')
const Cart = require('../src/cart.js')

describe('Cart', function() {
    let cart;
    beforeEach(function() {
        cart = new Cart();
    });

    it('should return 0 when empty', function () {
        assert.equal(cart.getPrice(),0)
    })

    it('should return 8 for one book', function () {
        cart.addBook("À l’école des sorciers");
        assert.equal(cart.getPrice(), 8);
    });

    it('should return 15,2 for two books', function () {
        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");
        assert.equal(cart.getPrice(), 16*0.95);
    });

    it('should return 21,6 + 15,2 = 36.8', function () {
        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");
        cart.addBook("Le Prisonnier d'Azkaban");

        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");

        assert.equal(cart.getPrice() , 9);
    });


});
