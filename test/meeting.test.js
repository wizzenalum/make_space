const assert = require("assert");
const Meeting = require("../database/Meeting.js");

describe("TEST meeting class ", () => {
  let m1 = new Meeting("10", "20", 3, "434");
  it("should return object", () => {
    let expect = {
      startAt: "10",
      overAt: "20",
      attendeeCount: 3,
      meetingRoomRef: "434",
    };
    assert.deepEqual(expect, m1);
  });
});
