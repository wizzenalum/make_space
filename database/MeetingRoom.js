class MeetingRoom {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.meetingList = [];
  }
  addMeeting(meeting) {
    if (this.capacity > this.meetingList.length) {
      this.meetingList.push(meeting);
      return true;
    } else {
      throw new Error("");
    }
  }
  removeMeeting(meeting) {
    let index = this.meetingList.indexof(meeting);
    if (index == -1) {
      throw new Error("this meeting not found");
    }
    this.meetingList.splice(index, index + 1);
  }
}
module.exports = MeetingRoom;
