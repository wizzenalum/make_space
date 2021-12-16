const {
  ADD_MEETING_ROOM,
  ADD_MEETING,
  IS_SLOT_AVAILABLE,
  GET_ROOM_LIST,
  GET_ROOM_CAPACITY_LIMIT,
} = require("./actionTypes");
const {
  addMeetingRoom,
  addMeeting,
  getRoomList,
  isSlotAvailable,
  getRoomCapacityLimit,
} = require("./actionHandler");

const database = function (actionType, option) {
  switch (actionType) {
    case GET_ROOM_CAPACITY_LIMIT:
      return getRoomCapacityLimit();
    case ADD_MEETING_ROOM:
      return addMeetingRoom(option.name, option.capacity);
    case ADD_MEETING:
      return addMeeting(
        option.startAt,
        option.overAt,
        option.attendeeCount,
        option.roomRef
      );
    case GET_ROOM_LIST:
      // option = {min_capacity,max_capacity}
      let { min, max } = option;
      return getRoomList(option.min, option.max);
    case IS_SLOT_AVAILABLE:
      return isSlotAvailable(option.startAt, option.overAt, option.roomRef);
    default:
      throw new Error(`${actionType} is not valid`);
  }
};

module.exports = database;
