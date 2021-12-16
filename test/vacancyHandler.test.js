const assert = require("assert");
const Time = require("../utils/Time.js");
const vacancyHandler = require("../application/vacancyHandler");
const databaseInitiate = require("../utils/initiateDatabase");

describe("TEST vacancyHandler.js ", () => {
  const t1 = new Time(9, 15);
  const t2 = new Time(10, 50);
  const t3 = new Time(13, 15);
  const t4 = new Time(8, 45);
  describe("isOptionValid()", () => {
    it("should return true", () => {
      let option = { startAt: t1, overAt: t3 };
      assert.equal(true, vacancyHandler.isOptionValid(option));
    });
    it("should return false", () => {
      let option = { startAt: t4, overAt: t1 };
      assert.equal(false, vacancyHandler.isOptionValid(option));
    });
  });
  describe("parseVacancyOption()", () => {
    it("should return slot object", () => {
      let ret = vacancyHandler.parseVacancyOption("10:30 01:15");
      assert.equal(10, ret.startAt.hour);
      assert.equal(30, ret.startAt.minute);
    });
  });
});
