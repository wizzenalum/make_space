const bufferTimeList = require("../utils/bufferTimeList.js")();

const database = require("../database");

const isTimeCorrect = function (time) {
  // confirms that time is discrite and has min util of 15min.
  if (time.inMinutes() % 15 === 0) {
    return true;
  }
  return false;
};
const isSlotValid = function (startAt, overAt) {
  // confirm  that
  for (let bufferTime of bufferTimeList) {
    let bufferStart = bufferTime.startAt;
    let bufferOver = bufferTime.overAt;
    if (!(!bufferStart.isBefore(overAt) || !bufferOver.isAfter(startAt))) {
      return false;
    }
  }
  return true;
};
const isAttendeeCountValid = function (attendeeCount) {
  const limits = database("GET_ROOM_CAPACITY_LIMIT");
  const MIN_PERSON_CAPACITY = limits.min;
  const MAX_PERSON_CAPACITY = limits.max;
  if (attendeeCount < MIN_PERSON_CAPACITY) {
    return false;
  }
  if (attendeeCount > MAX_PERSON_CAPACITY) {
    return false;
  }
  return true;
};

const isInputCorrect = function (option) {
  if (
    isTimeCorrect(option.startAt) &&
    isTimeCorrect(option.overAt) &&
    option.startAt.isBefore(option.overAt)
  ) {
    return true;
  }
  return false;
};

module.exports = {
  isTimeCorrect,
  isSlotValid,
  isAttendeeCountValid,
  isInputCorrect,
};
