const Meeting = function (startAt, overAt, attendeeCount, meetingRoomRef) {
  this.startAt = startAt;
  this.overAt = overAt;
  this.attendeeCount = attendeeCount;
  this.meetingRoomRef = meetingRoomRef;
};
module.exports = Meeting;
