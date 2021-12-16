const assert = require("assert");
const input_parser = require("../input_parser/index.js");
const path = require("path");

describe("TEST input_parser ", () => {
  describe("TEST processLine()", () => {
    it("should return processed query", () => {
      input_parser.processLine("hello kfsd", (error, data) => {
        assert.equal(false, error);
        assert.deepEqual({ name: "HELLO", option: "kfsd" }, data);
      });
    });
    it("should return emptyObject", () => {
      input_parser.processLine("", (error, data) => {
        assert.equal(false, error);
        assert.deepEqual({ name: "", option: "" }, data);
      });
    });
  });
  describe("TEST inputParser()", () => {
    it("should return prased object for sample1", () => {
      const filePath = path.join(__dirname, "../sample_input/sample1.txt");
      const expect = [
        { type: "VACANCY", option: "10:00 12:00" },
        { type: "BOOK", option: "11:00 11:45 2" },
        { type: "BOOK", option: "11:30 13:00 35" },
        { type: "BOOK", option: "11:30 13:00 15" },
        { type: "VACANCY", option: "11:30 12:00" },
        { type: "BOOK", option: "14:00 15:30 3" },
        { type: "BOOK", option: "15:00 16:30 2" },
        { type: "BOOK", option: "15:15 12:15 12" },
        { type: "VACANCY", option: "15:30 16:00" },
        { type: "BOOK", option: "15:30 16:30 2" },
        { type: "VACANCY", option: "15:45 16:00" },
        { type: "BOOK", option: "16:00 17:00 5" },
        { type: "VACANCY", option: "18:00 19:00" },
      ];
      const parsedData = input_parser.inputParser(filePath);
      assert.equal("object", typeof parsedData);
      assert.deepEqual(expect, parsedData);
    });
    it("should return prased object for sample2.", () => {
      const filePath = path.join(__dirname, "../sample_input/sample2.txt");
      const expect = [
        { type: "BOOK", option: "09:30 13:15 2" },
        { type: "BOOK", option: "13:45 18:45 2" },
        { type: "BOOK", option: "12:55 14:00 3" },
        { type: "BOOK", option: "13:45 17:15 6" },
        { type: "VACANCY", option: "13:45 15:00" },
        { type: "BOOK", option: "14:00 15:00 2" },
        { type: "BOOK", option: "17:00 18:30 12" },
        { type: "VACANCY", option: "17:00 18:00" },
        { type: "VACANCY", option: "17:30 18:00" },
        { type: "BOOK", option: "17:00 18:30 12" },
        { type: "BOOK", option: "15:35 16:35 12" },
      ];
      const parsedData = input_parser.inputParser(filePath);
      assert.equal("object", typeof parsedData);
      assert.deepEqual(expect, parsedData);
    });
    it("should return ERR_INVALID_ARG_TYPE", () => {
      try {
        const parsedData = input_parser.inputParser();
      } catch (error) {
        assert.equal("ERR_INVALID_ARG_TYPE", error.code);
      }
    });

    it("should return path is wrong  ENOENT", () => {
      try {
        const parsedData = input_parser.inputParser("/sample/line");
      } catch (error) {
        assert.equal("ENOENT", error.code);
      }
    });
  });
});
