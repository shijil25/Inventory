import { getManager } from 'typeorm';
import { Product } from '../data/entities/product.entity';
import { User } from '../data/entities/user.entity';
import { CartRepository } from '../data/repositories/cart.repository';
import { Cart } from '../data/entities/cart.entity';
import { EntityManager } from 'typeorm';
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");

describe("CartRepository", function() {
    const stubValue = {
      CartID: faker.random.uuid(),
      User: new User(),
      Product: new Product(),
      Quantity: 1,
      Total:10
    };

    describe("create", function() {
        it("should add a new cart to the db", async function() {
          
          const stub = sinon.stub(getManager(), "query").returns(stubValue);
          const cartRepository = new CartRepository();
          const cart = await cartRepository.create(stubValue);
          expect(stub.calledOnce).to.be.true;
          expect(cart.CartID).to.equal(stubValue.CartID);
          expect(cart.Quantity).to.equal(stubValue.Quantity);
        });
      });
});