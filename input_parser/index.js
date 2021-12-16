const { EventEmitter } = require("events");
const fs = require("fs");

const inputParser = (filePath) => {
  try {
    // reading the file
    const fileRowData = fs.readFileSync(filePath, "utf-8");
    const lines = fileRowData.split(/\r?\n/);
    // creaeing list of parsed action
    let actionList = [];
    for (let line of lines) {
      const processedAction = processLine(line);
      actionList.push(processedAction);
    }
    return actionList;
  } catch (error) {
    throw error;
  }
};

const processLine = function processLine(line) {
  // for each line seprate the action type(BOOK,VACANCY)from given option.
  try {
    if (typeof line !== "string") {
      callback(new Error("expected string as input"));
      return;
    }
    let action = {};
    let filteredLine = line.trim();
    let seprationIndex = filteredLine.indexOf(" ");
    let actionType = filteredLine.substr(0, seprationIndex);
    actionType = actionType.toUpperCase();
    let option = filteredLine.substr(seprationIndex + 1);
    option = option.trim().toLowerCase();
    action.type = actionType;
    action.option = option;
    return action;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  processLine,
  inputParser,
};
