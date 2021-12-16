const controller = require("../controller");
const validate = require("./validate.js");
const Time = require("../utils/Time.js");
const { INCORRECT_INPUT, NO_VACANT_ROOM } = require("../utils/messages.js");

const book = function (option) {
  let parsedOption = parseBookingOption(option);
  let isCorrect = validate.isInputCorrect(parsedOption);
  if (!isCorrect) {
    return INCORRECT_INPUT;
  }
  let isValid = isOptionValid(parsedOption);
  if (!isValid) {
    return NO_VACANT_ROOM;
  }

  const { startAt, overAt, attendeeCount } = parsedOption;
  return controller.book(startAt, overAt, attendeeCount);
};

const parseBookingOption = function (option) {
  try {
    let parsedOption = {};
    let filteredOption = option.trim();
    let [startAt, overAt, personCapacity] = filteredOption.split(" ");
    parsedOption.startAt = Time.parse(startAt);
    parsedOption.overAt = Time.parse(overAt);
    const matchingRegx = /^([0-9])[0-9]*$/;
    if (!matchingRegx.test(personCapacity)) {
      throw new Error(`${personCapacity} is not number`);
    }
    parsedOption.attendeeCount = parseInt(personCapacity);
    return parsedOption;
  } catch (error) {
    throw new Error("option is not formatted");
  }
};

const isOptionValid = function (option) {
  if (
    validate.isSlotValid(option.startAt, option.overAt) &&
    validate.isAttendeeCountValid(option.attendeeCount)
  ) {
    return true;
  }
  return false;
};

module.exports = {
  book,
  parseBookingOption,
  isOptionValid,
};
