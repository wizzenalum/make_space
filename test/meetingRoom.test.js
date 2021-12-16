const assert = require("assert");
const MeetingRoom = require("../database/MeetingRoom.js");

describe("TEST meetingroom module ", () => {
  describe("test constructor() ", () => {
    let r1 = new MeetingRoom("r1", 4);
    let r2 = new MeetingRoom("r2", 20);
    it("should return object", () => {
      let expect = { name: "r1", capacity: 4, meetingList: [] };
      assert.deepEqual(expect, r1);
    });
    it("should return object", () => {
      let expect = { name: "r2", capacity: 20, meetingList: [] };
      assert.deepEqual(expect, r2);
    });
  });

  describe("test addMeeting() ", () => {
    let room1 = new MeetingRoom("room1", 4);
    room1.addMeeting("meeting1");
    let meetingList = room1.meetingList;
    it("should return array of length 1", () => {
      assert.equal(1, meetingList.length);
      assert.deepEqual("meeting1", meetingList[0]);
    });
  });
  //   describe("test removeMeeting() ", () => {
  //     let room2 = new MeetingRoom("room2", 20);
  //     it("should removet", () => {
  //       room2.addMeeting("meeting1");
  //       room2.removeMeeting("meeting1");
  //       let meetingList = room1.meetingList;
  //       assert.equal(0, meetingList.length);
  //       //   assert.deepEqual("meeting1", meetingList[0]);
  //     });
  //   });
});
