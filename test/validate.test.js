const assert = require("assert");
const Time = require("../utils/Time.js");
const validate = require("../application/validate.js");
const databaseInitiate = require("../utils/initiateDatabase");

describe("TEST validate.js ", () => {
  const t1 = new Time(9, 15);
  const t2 = new Time(10, 50);
  const t3 = new Time(13, 15);
  const t4 = new Time(8, 45);
  describe("isTimeCorrect()", () => {
    it("should return true", () => {
      assert.equal(true, validate.isTimeCorrect(t1));
    });
    it("should return false", () => {
      assert.equal(false, validate.isTimeCorrect(t2));
    });
  });
  describe("isSlotValid()", () => {
    it("should return true", () => {
      assert.equal(true, validate.isSlotValid(t1, t3));
    });
    it("should return false", () => {
      assert.equal(false, validate.isSlotValid(t4, t1));
    });
  });
  describe("isInputCorrect()", () => {
    it("should return true", () => {
      let option = { startAt: t1, overAt: t3 };
      let ret = validate.isInputCorrect(option);
      assert.equal(true, ret);
    });
    it("should return false", () => {
      let option = { startAt: t1, overAt: t2 };
      let ret = validate.isInputCorrect(option);
      assert.equal(false, ret);
    });
    it("should return false", () => {
      let option = { startAt: t3, overAt: t2 };
      let ret = validate.isInputCorrect(option);
      assert.equal(false, ret);
    });
  });
  describe("isAttendeeCountValid()", () => {
    databaseInitiate();
    it("should return true", () => {
      let ret = validate.isAttendeeCountValid(2);
      assert.equal(true, ret);
    });
    it("should return true", () => {
      let ret = validate.isAttendeeCountValid(20);
      assert.equal(true, ret);
    });
    it("should return true", () => {
      let ret = validate.isAttendeeCountValid(10);
      assert.equal(true, ret);
    });
    it("should return false", () => {
      let ret = validate.isAttendeeCountValid(30);
      assert.equal(false, ret);
    });
    it("should return false", () => {
      let ret = validate.isAttendeeCountValid(1);
      assert.equal(false, ret);
    });
  });
});
