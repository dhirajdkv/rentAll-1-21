const assert = require("assert");
const getDataUri = require("../utils/dataUri");

describe("getDataUri", () => {
  it("should return a data URI string", () => {
    const file = {
      name: "image.jpg",
      data: Buffer.from("fakeImageData", "utf-8"),
    };

    const result = getDataUri(file);

    // Assert that the result is a string
    assert.strictEqual(typeof result, "string");
  });

  it("should return a data URI string for PNG image", () => {
    const file = {
      name: "image.png",
      data: Buffer.from("fakeImageData", "utf-8"),
    };

    const result = getDataUri(file);

    // Assert that the result is a string
    assert.strictEqual(typeof result, "string");
  });

  it("should return a data URI string for text file", () => {
    const file = {
      name: "document.txt",
      data: Buffer.from("Hello, world!", "utf-8"),
    };

    const result = getDataUri(file);

    // Assert that the result is a string
    assert.strictEqual(typeof result, "string");
  });
});
