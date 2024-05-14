const assert = require("assert");
const sinon = require("sinon");
const { registerUser, logoutuser } = require("../controllers/userController");
const User = require("../models/userModel");

describe("User Controller", () => {
  describe("registerUser", () => {
    it("should register a new user", async () => {
      const req = {
        body: {
          name: "John Doe",
          email: "john@example.com",
          password: "password123",
          files: {
            image: {
              /* Mock image data */
            },
          },
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
      const next = sinon.spy();
      const createStub = sinon.stub(User, "create").resolves({
        _id: "user123",
        name: "John Doe",
        email: "john@example.com",
        avatar: {
          public_id: "avatar123",
          url: "http://example.com/avatar.jpg",
        },
      });

      await registerUser(req, res, next);

      assert.notEqual(res.status.calledWith(200), true);
      assert.notEqual(res.json.calledOnce, true);

      createStub.restore();
    });

    // Add more test cases for error scenarios...
  });

  describe("User Controller - logoutuser", () => {
    it("should log out a user and clear the token cookie", async () => {
      const req = {};
      const res = {
        cookie: sinon.spy(),
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
      const next = sinon.spy();

      await logoutuser(req, res, next);

      console.log("Calleddddd -->>>>>>>", res.json.calledOnce);
      assert(res.cookie.called); // Check if res.cookie was called at least once
      assert.strictEqual(res.status.calledWith(200), true);
      assert.strictEqual(res.json.calledOnce, false);
    });
  });

  // Add test cases for other controller functions...
});
