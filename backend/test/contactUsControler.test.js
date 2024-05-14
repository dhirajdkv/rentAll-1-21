const assert = require("assert");
const sinon = require("sinon");
const {
  createMessage,
  getAllMessages,
} = require("../controllers/contactUsControler");
const ContactUs = require("../models/contactUsModel");

describe("Contact Us Controller", () => {
  describe("createMessage", () => {
    it("should create a new message", async () => {
      const req = {
        body: { message: "Test message" },
        user: { _id: "user123", name: "John Doe", email: "john@example.com" },
      };
      const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };

      const saveStub = sinon.stub(ContactUs.prototype, "save").resolves({
        _id: "message123",
        user: "user123",
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
      });

      await createMessage(req, res);

      assert.strictEqual(res.status.calledWith(201), true);
      assert.strictEqual(res.json.calledOnce, true);
      assert.deepStrictEqual(res.json.firstCall.args[0], {
        success: true,
        message: "Message created successfully.",
        data: {
          _id: "message123",
          user: "user123",
          name: "John Doe",
          email: "john@example.com",
          message: "Test message",
        },
      });

      saveStub.restore();
    });

    // Add more test cases for error scenarios...
  });

  describe("getAllMessages", () => {
    it("should fetch all messages", async () => {
      const req = {};
      const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };

      const messages = [
        {
          _id: "message123",
          user: "user123",
          name: "John Doe",
          email: "john@example.com",
          message: "Test message",
        },
      ];
      const findStub = sinon.stub(ContactUs, "find").resolves(messages);

      await getAllMessages(req, res);

      assert.strictEqual(res.status.calledWith(200), true);
      assert.strictEqual(res.json.calledOnce, true);
      assert.deepStrictEqual(res.json.firstCall.args[0], {
        success: true,
        data: messages,
      });

      findStub.restore();
    });

    // Add more test cases for error scenarios...
  });
});
