const assert = require("assert");
const Time = require("../utils/Time.js");

describe("TEST time class ", () => {
  const t1 = new Time(20, 30);
  const t2 = new Time(10, 00);
  describe("TEST constructor()", () => {
    it("should return time object", () => {
      const time = new Time(20, 30);
      assert.equal(20, time.hour);
      assert.equal(30, time.minute);
    });
  });
  describe("TEST toString()", () => {
    it("should return 20:30", () => {
      assert.equal("20:30", t1.toString());
    });
    it("should return 10:00", () => {
      assert.equal("10:00", t2.toString());
    });
  });
  describe("TEST parse()", () => {
    it("should return time object", () => {
      const time = Time.parse("20:30");
      assert.equal(20, time.hour);
      assert.equal(30, time.minute);
    });
    it("should return 10:00", () => {
      const time = Time.parse("10:00");
      assert.equal(10, time.hour);
      assert.equal(0, time.minute);
    });
  });
  describe("TEST inMinute()", () => {
    it("should return 600", () => {
      assert.equal(600, t2.inMinutes());
    });
    it("should return 1230", () => {
      assert.equal(1230, t1.inMinutes());
    });
  });
  describe("TEST isAfter()", () => {
    it("should return true", () => {
      assert.equal(true, t1.isAfter(t2));
    });
    it("should return false", () => {
      assert.equal(false, t2.isAfter(t1));
    });
  });
  describe("TEST isAfterSame()", () => {
    it("should return true", () => {
      assert.equal(true, t1.isAfterSame(t2));
    });
    it("should return false", () => {
      assert.equal(false, t2.isAfterSame(t1));
    });
  });
  describe("TEST isBeforeSame()", () => {
    it("should return false", () => {
      assert.equal(false, t1.isBeforeSame(t2));
    });
    it("should return true", () => {
      assert.equal(true, t2.isBeforeSame(t1));
    });
  });
  describe("TEST isBefore()", () => {
    it("should return false", () => {
      assert.equal(false, t1.isBefore(t2));
    });
    it("should return true", () => {
      assert.equal(true, t2.isBefore(t1));
    });
  });
});
