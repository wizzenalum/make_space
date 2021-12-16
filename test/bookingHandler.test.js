const assert = require("assert");
const Time = require("../utils/Time.js");
const bookingHandler = require("../application/bookingHandler");
const databaseInitiate = require("../utils/initiateDatabase");

describe("TEST bookingHandler.js ", () => {
  const t1 = new Time(9, 15);
  const t2 = new Time(10, 50);
  const t3 = new Time(13, 15);
  const t4 = new Time(8, 45);

  describe("isOptionValid()", () => {
    databaseInitiate();
    it("should return true", () => {
      let option = { startAt: t1, overAt: t3, attendeeCount: 17 };
      assert.equal(true, bookingHandler.isOptionValid(option));
    });
    it("should return false", () => {
      let option = { startAt: t4, overAt: t1 };
      assert.equal(false, bookingHandler.isOptionValid(option));
    });
  });
  describe("parseBookingOption()", () => {
    it("should return slot object", () => {
      let ret = bookingHandler.parseBookingOption("10:30 01:15 2");
      assert.equal(10, ret.startAt.hour);
      assert.equal(30, ret.startAt.minute);
      assert.equal(2, ret.attendeeCount);
    });
  });
});
