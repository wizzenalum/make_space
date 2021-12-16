const Meeting = require("./Meeting.js");
const MeetingRoom = require("./MeetingRoom.js");

let roomRefList = [];
const MIN_PERSON_CAPACITY = 2;
let MAX_PERSON_CAPACITY = 0;

module.exports.getRoomCapacityLimit = function () {
  return { min: MIN_PERSON_CAPACITY, max: MAX_PERSON_CAPACITY };
};

module.exports.addMeetingRoom = function (name, capacity) {
  const roomRef = new MeetingRoom(name, capacity);
  roomRefList.push(roomRef);
  if (capacity > MAX_PERSON_CAPACITY) {
    MAX_PERSON_CAPACITY = capacity;
  }
  // this will make meeting room in sorteed order of capacity.
  roomRefList.sort((a, b) => a.capacity - b.capacity);
  return roomRef;
};

module.exports.addMeeting = function (startAt, overAt, attendeeCount, roomRef) {
  const meeting = new Meeting(startAt, overAt, attendeeCount, roomRef);
  let { meetingList } = roomRef;
  meetingList.push(meeting);
  // this will sort all meeting for peticular room is shorted order of starting time.
  meetingList.sort((a, b) => {
    let time1 = a.startAt.inMinutes();
    let time2 = b.startAt.inMinutes();
    return time1 - time2;
  });
  return meeting;
};

module.exports.getRoomList = function (minCapacity, maxCapacity) {
  minCapacity = minCapacity || MIN_PERSON_CAPACITY;
  maxCapacity = maxCapacity || MAX_PERSON_CAPACITY;
  let startIndex = null,
    endIndex = null;
  let roomList = [...roomRefList];
  for (let index in roomList) {
    let currentCapacity = roomList[index].capacity;
    if (startIndex === null && currentCapacity >= minCapacity) {
      startIndex = index;
    }
    if (currentCapacity <= maxCapacity) {
      endIndex = index;
    }
  }
  if (startIndex == null || endIndex == null) {
    return [];
  }
  return roomList.splice(startIndex, endIndex + 1);
};

module.exports.isSlotAvailable = function (slotStartAt, slotOverAt, roomRef) {
  let { meetingList } = roomRef;
  let size = meetingList.length;
  // if slot lie before of at the end of available meetings
  if (meetingList.length === 0) return true;
  if (
    slotOverAt.isBeforeSame(meetingList[0].startAt) ||
    slotStartAt.isAfterSame(meetingList[size - 1].overAt)
  ) {
    return true;
  }

  for (let index = 1; index < size; index++) {
    let prev = meetingList[index - 1];
    let current = meetingList[index];
    if (
      slotStartAt.isAfterSame(prev.overAt) &&
      slotOverAt.isBeforeSame(current.startAt)
    ) {
      return true;
    }
  }
  return false;
};
