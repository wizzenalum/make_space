const database = require("../database");
const {
  ADD_MEETING,
  IS_SLOT_AVAILABLE,
  GET_ROOM_LIST,
} = require("../database/actionTypes.js");
const NO_VACANT_ROOM = "NO_VACANT_ROOM";

const book = function (startAt, overAt, attendeeCount) {
  const roomRef = getAvailableRoom(startAt, overAt, attendeeCount);
  if (roomRef == null) {
    return NO_VACANT_ROOM;
  }
  const option = {
    startAt,
    overAt,
    attendeeCount,
    roomRef,
  };
  database(ADD_MEETING, option);
  return roomRef.name;
};
const getAvailableRoom = function (startAt, overAt, attendeeCount) {
  const roomList = database(GET_ROOM_LIST, { min: attendeeCount });
  let availableRoom = null;
  for (let roomRef of roomList) {
    let option = {
      startAt,
      overAt,
      roomRef,
    };
    let isAvailable = database(IS_SLOT_AVAILABLE, option);
    if (isAvailable) {
      availableRoom = roomRef;
      break;
    }
  }
  return availableRoom;
};

module.exports = { book, getAvailableRoom };
