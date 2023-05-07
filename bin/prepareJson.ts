import * as fs from "fs";
// refer https://github.com/words/an-array-of-english-words
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as rawWords from "./words.json";
import { toNumeronym } from "../src/numeronym/provider";

const prepareJson = () => {
  const result: { [key: string]: string[] } = {};
  rawWords
    .filter((word) => word.length > 2)
    .forEach((word) => {
      const numeronym = toNumeronym(word);
      if (result[numeronym]) {
        result[numeronym].push(word);
      } else {
        result[numeronym] = [word];
      }
    });

  fs.writeFileSync("./wordsLut.json", JSON.stringify(result));
};

prepareJson();
