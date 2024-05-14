const assert = require("assert");
const ApiFeatures = require("../utils/apiFeatures");

describe("ApiFeatures - search", () => {
  it("should add search keyword to query", () => {
    const query = {
      find: function () {
        return this;
      },
    };
    const queryStr = { keyword: "test" };
    const apiFeatures = new ApiFeatures(query, queryStr);

    const result = apiFeatures.search();

    assert.strictEqual(result instanceof ApiFeatures, true);
    assert.deepStrictEqual(
      query.find({
        $or: [
          { name: { $regex: "test", $options: "i" } },
          { category: { $regex: "test", $options: "i" } },
        ],
      }),
      query
    );
  });
});

describe("ApiFeatures - condition", () => {
  it("should add condition to query", () => {
    const query = {
      find: function () {
        return this;
      },
    };
    const queryStr = { condition: "new" };
    const apiFeatures = new ApiFeatures(query, queryStr);

    const result = apiFeatures.condition();

    assert.strictEqual(result instanceof ApiFeatures, true);
    assert.deepStrictEqual(query.find({ itemCondition: "new" }), query);
  });
});

describe("ApiFeatures - filter", () => {
  it("should filter query based on provided filters", () => {
    const query = {
      find: function () {
        return this;
      },
    };
    const queryStr = { price: { gt: 50 }, rating: { gte: 4 } };
    const apiFeatures = new ApiFeatures(query, queryStr);

    const result = apiFeatures.filter();

    assert.strictEqual(result instanceof ApiFeatures, true);
    assert.deepStrictEqual(
      query.find({ price: { $gt: 50 }, rating: { $gte: 4 } }),
      query
    );
  });
});
