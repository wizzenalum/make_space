const Time = require("./Time.js");

const getBufferTimeList = function () {
  let BufferTimeList = [
    { startAt: "09:00", overAt: "09:15" },
    { startAt: "13:15", overAt: "13:45" },
    { startAt: "18:45", overAt: "19:00" },
  ];
  for (let BufferTime of BufferTimeList) {
    BufferTime.startAt = Time.parse(BufferTime.startAt);
    BufferTime.overAt = Time.parse(BufferTime.overAt);
  }
  return BufferTimeList;
};

module.exports = getBufferTimeList;
