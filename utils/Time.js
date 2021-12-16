class Time {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }
  toString() {
    let str = "";
    if (this.hour < 10) str += "0" + this.hour;
    else str += this.hour;
    if (this.minute < 10) str += ":0" + this.minute;
    else str += ":" + this.minute;
    return str;
  }
  static parse(strTime) {
    // if strTime is 20:24 format than it will reaturn true else false.
    const matchingRegx = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;
    if (!matchingRegx.test(strTime)) {
      throw new Error(`${strTime} is not in format`);
    }
    let lexIndex = strTime.indexOf(":");
    let hour = parseInt(strTime.substr(0, lexIndex));
    let minute = parseInt(strTime.substr(lexIndex + 1));
    let parsedTime = new Time(hour, minute);
    return parsedTime;
  }
  inMinutes() {
    let retMinute = this.minute;
    retMinute += this.hour * 60;
    return retMinute;
  }
  isAfter(time) {
    let thisTime = this.inMinutes();
    let givenTime = time.inMinutes();
    return thisTime > givenTime;
  }
  isSame(time) {
    let thisTime = this.inMinutes();
    let givenTime = time.inMinutes();
    return thisTime === givenTime;
  }
  isBefore(time) {
    let thisTime = this.inMinutes();
    let givenTime = time.inMinutes();
    return thisTime < givenTime;
  }
  isAfterSame(time) {
    let thisTime = this.inMinutes();
    let givenTime = time.inMinutes();
    return thisTime >= givenTime;
  }
  isBeforeSame(time) {
    let thisTime = this.inMinutes();
    let givenTime = time.inMinutes();
    return thisTime <= givenTime;
  }
}

module.exports = Time;
