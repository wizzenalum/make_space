const roomList = require("../data/roomList.js");
const database = require("../database/index");

const initiate = function initiate() {
  roomList.map((room, index) => {
    database("ADD_MEETING_ROOM", room);
  });
};

module.exports = initiate;
