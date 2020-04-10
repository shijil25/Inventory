// import { CartController } from '../application/controllers/cart.controller';
// import { CartRepository } from '../data/repositories/cart.repository';
// const chai = require("chai");
// const sinon = require("sinon");
// const faker = require("faker");
// const expect = chai.expect;
// describe("UserController", function() {
//     describe("getCart", function() {
//       let req;
//       let res;
//       let cartRepo;
//       beforeEach(() => {
//         req = { params: { id: faker.random.uuid() } };
//         res = { json: function() {} };
//         const userRepo = sinon.spy();
//         cartRepo = new CartRepository();
//       });
//       it("should return a user that matches the id param", async function() {
//         const stubValue = {
//           CartID: req.params.id
//         };
//         const mock = sinon.mock(res);
//         mock
//           .expects("json")
//           .once()
//           .withExactArgs({ data: stubValue });
//         const stub = sinon.stub(cartRepo, "findById").returns(stubValue);
//         let userController = new CartController(cartRepo,sinon.spy(),sinon.spy());
//         const user = await userController.getOrder(req, res);
//         expect(stub.calledOnce).to.be.true;
//         mock.verify();
//       });
//     });
//   });
//# sourceMappingURL=cart-controller.test.js.map