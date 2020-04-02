const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
import CartRepository from './../repositories/cart.repository';
import User from './../entities/user.entity';
import Product from './../entities/product.entity';

describe("CartRepository", function() {
    const stubValue = {
      CartID: faker.random.uuid(),
      User: new User(),
      Product: new Product(),
      Quantity: 1,
      Total:10
    };

    describe("create", function() {
        it("should add a new user to the db", async function() {
          const stub = sinon.stub(Cart, "create").returns(stubValue);
          const cartRepository = new CartRepository();
          const cart = await cartRepository.create(stubValue);
          expect(stub.calledOnce).to.be.true;
          expect(cart.CartID).to.equal(stubValue.CartID);
          expect(cart.Quantity).to.equal(stubValue.Quantity);
        });
      });
});