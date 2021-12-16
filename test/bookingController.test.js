const assert = require("assert");
const Time = require("../utils/Time.js");
const bookingHandler = require("../controller/bookingHandler");
const databaseInitiate = require("../utils/initiateDatabase");
databaseInitiate();

describe("TEST bookingHandler.js ", () => {
  describe("test getAvailableRoom", () => {
    const t1 = new Time(9, 15);
    const t2 = new Time(10, 30);
    it("should return array ", () => {
      const list = bookingHandler.getAvailableRoom(t1, t1, 3);
      let expect = {
        capacity: 3,
        meetingList: [],
        name: "C-CAVE",
      };
      assert.deepEqual(expect, list);
    });
    it("should return array ", () => {
      const list = bookingHandler.getAvailableRoom(t1, t1, 15);
      let expect = {
        capacity: 20,
        meetingList: [],
        name: "G-Mansion",
      };
      assert.deepEqual(expect, list);
    });
  });
  describe("test book", () => {
    const t3 = new Time(9, 15);
    const t4 = new Time(10, 30);
    it("should return array ", () => {
      const name = bookingHandler.book(t3, t4, 3);
      assert.deepEqual("C-CAVE", name);
    });
    it("should return array ", () => {
      const name1 = bookingHandler.book(t3, t4, 6);
      assert.deepEqual("D-Tower", name1);
    });
  });
});
