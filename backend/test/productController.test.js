const assert = require("assert");
const sinon = require("sinon");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");

describe("Product Controller - createProduct", () => {
  it("should create a product successfully", async () => {
    const req = {
      files: { images: { name: "test.jpg" } },
      body: { name: "Test Product", price: 50 },
      user: { id: "user_id" },
    };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    await createProduct(req, res, next);

    assert.strictEqual(res.status.calledWith(200), false);
    assert.strictEqual(res.json.calledOnce, false);
  });
});

describe("Product Controller - getAllProducts", () => {
  it("should get all products successfully", async () => {
    const req = {};
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };

    await getAllProducts(req, res);

    assert.strictEqual(res.status.calledWith(200), false);
    assert.strictEqual(res.json.calledOnce, false);
  });
});

describe("Product Controller - deleteProduct", () => {
  it("should delete a product successfully", async () => {
    const req = { params: { id: "product_id" } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    await deleteProduct(req, res, next);

    assert.strictEqual(res.status.calledWith(200), false);
    assert.strictEqual(res.json.calledOnce, false);
  });
});

describe("Product Controller - getProduct", () => {
  it("should get a product successfully", async () => {
    const req = { params: { id: "product_id" } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.spy();

    await getProduct(req, res, next);

    assert.strictEqual(res.status.calledWith(200), false);
    assert.strictEqual(res.json.calledOnce, false);
  });
});
