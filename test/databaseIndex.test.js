const assert = require("assert");
const Time = require("../utils/Time.js");
const database = require("../database");
const databaseInitiate = require("../utils/initiateDatabase");
databaseInitiate();
describe("TEST index.js ", () => {
  const t1 = new Time(9, 15);
  const t2 = new Time(10, 30);
  describe("GET_ROOM_CAPACITY_LIMIT", () => {
    it("should return the min max", () => {
      const { min, max } = database("GET_ROOM_CAPACITY_LIMIT");
      assert.equal(2, min);
      assert.equal(20, max);
    });
  });
  describe("GET_ROOM_LIST", () => {
    it("should return all list", () => {
      const list = database("GET_ROOM_LIST", {});
      assert.equal("object", typeof list);
    });
    // it("should return roomlist with capacity greater than 5", () => {
    //   const list = database("GET_ROOM_LIST", { min: 5 });
    //   assert.equal(3, list.length);
    // });
    // it("should return roomlist with capacity lesser than 10", () => {
    //   const list = database("GET_ROOM_LIST", { max: 10 });
    //   assert.equal(4, list.length);
    // });
    // it("should return list intersectio of above", () => {
    //   const list = database("GET_ROOM_LIST", { min: 5, max: 10 });
    //   assert.equal(2, list.length);
    // });
  });
  describe("test action ADD_MEETING_ROOM", () => {
    let r1 = database("ADD_MEETING_ROOM", { name: "r1", capacity: 4 });
    let r2 = database("ADD_MEETING_ROOM", { name: "r2", capacity: 20 });
    it("should return object", () => {
      let expect = { name: "r1", capacity: 4, meetingList: [] };
      assert.deepEqual(expect, r1);
    });
    it("should return object", () => {
      let expect = { name: "r2", capacity: 20, meetingList: [] };
      assert.deepEqual(expect, r2);
    });
  });
  describe("test action ADD_MEETING", () => {
    let roomRef = database("ADD_MEETING_ROOM", { name: "r1", capacity: 4 });
    let r1 = database("ADD_MEETING", {
      startAt: "10",
      overAt: "20",
      attendeeCount: 3,
      roomRef: roomRef,
    });
    it("should return object", () => {
      let expect = {
        startAt: "10",
        overAt: "20",
        attendeeCount: 3,
        meetingRoomRef: roomRef,
      };
      assert.deepEqual(expect, r1);
    });
  });
});
