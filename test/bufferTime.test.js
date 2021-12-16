const assert = require("assert");
const getBufferTimeList = require("../utils/bufferTimeList.js");

describe("TEST getBufferTimeList()", () => {
  it("should return a array of length 3 ", () => {
    const array = getBufferTimeList();
    // const expect = [
    //     {
    //       startAt: Time { hour: 9, minute: 0 },
    //       overAt: Time { hour: 9, minute: 15 }
    //     },
    //     {
    //       startAt: Time { hour: 13, minute: 15 },
    //       overAt: Time { hour: 13, minute: 45 }
    //     },
    //     {
    //       startAt: Time { hour: 18, minute: 45 },
    //       overAt: Time { hour: 19, minute: 0 }
    //     }
    //   ]
    assert.equal(3, array.length);
    assert.equal("object", typeof array[0]);
  });
});
