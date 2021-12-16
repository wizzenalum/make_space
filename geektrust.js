const { inputParser } = require("./input_parser/index.js");
const app = require("./application");
const initiateDatabase = require("./utils/initiateDatabase.js");

try {
  initiateDatabase();
  const inputFilePath = process.argv[2];
  //inputParser break
  const actionList = inputParser(inputFilePath);
  for (let action of actionList) {
    const res = app(action.type, action.option);
    console.log(res);
  }
} catch (error) {
  throw error;
}
