/** for all the queries validation layer do following function in step by step manner.
 * check is query type
 * check the option format is correct.
 * check is they valid(follow the prodive rules);
 * if any of above fails it will respond accordingly,
 * for success, this layer convert option in json format and send to next layer.

send the query in jason format to controllers.
 */

const { book } = require("./bookingHandler.js");
const { vacancy } = require("./vacancyHandler.js");
const { BOOK, VACANCY } = require("./actionTypes.js");

const app = function app(actionType, option) {
  switch (actionType) {
    case BOOK:
      return book(option);
    case VACANCY:
      return vacancy(option);
    default:
      throw new Error(`${actionType} not a valid action type`);
  }
};

module.exports = app;
