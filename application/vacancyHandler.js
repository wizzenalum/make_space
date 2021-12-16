const controller = require("../controller/index.js");
const validate = require("./validate.js");
const Time = require("../utils/Time.js");
const { INCORRECT_INPUT, NO_VACANT_ROOM } = require("../utils/messages.js");

const vacancy = function (option) {
  let parsedOption = parseVacancyOption(option);
  let isCorrect = validate.isInputCorrect(parsedOption);
  if (!isCorrect) {
    return INCORRECT_INPUT;
  }
  let isValid = isOptionValid(parsedOption);
  if (!isValid) {
    return NO_VACANT_ROOM;
  }
  const { startAt, overAt } = parsedOption;
  return controller.vacancy(startAt, overAt);
};

const parseVacancyOption = function (option) {
  try {
    let parsedOption = {};
    let filteredOption = option.trim();
    let [startAt, overAt] = filteredOption.split(" ");
    parsedOption.startAt = Time.parse(startAt);
    parsedOption.overAt = Time.parse(overAt);
    return parsedOption;
  } catch (error) {
    throw new Error("option is not formatted");
  }
};

const isOptionValid = function (option) {
  if (validate.isSlotValid(option.startAt, option.overAt)) {
    return true;
  }
  return false;
};

module.exports = { vacancy, parseVacancyOption, isOptionValid };
