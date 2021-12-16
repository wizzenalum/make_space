const database = require("../database");
const {
  IS_SLOT_AVAILABLE,
  GET_ROOM_LIST,
} = require("../database/actionTypes.js");
const NO_VACANT_ROOM = "NO_VACANT_ROOM";

const vacancy = function (startAt, overAt) {
  const roomRefList = getAvailableRoom(startAt, overAt);
  if (roomRefList.length <= 0) {
    return NO_VACANT_ROOM;
  }
  return roomRefList.join(" ");
};
const getAvailableRoom = function (startAt, overAt) {
  const roomList = database(GET_ROOM_LIST, {});
  const availableRoomList = [];
  for (let roomRef of roomList) {
    let option = {
      startAt,
      overAt,
      roomRef,
    };
    let isAvailable = database(IS_SLOT_AVAILABLE, option);
    if (isAvailable) {
      availableRoomList.push(roomRef.name);
    }
  }
  return availableRoomList;
};

module.exports = { vacancy, getAvailableRoom };
