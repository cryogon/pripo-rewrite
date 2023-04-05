import { readFileSync } from "fs";

let count = 0;
export default defineEventHandler((req) => {
  count = count + 1;
  const file = readFileSync("./demo.json","utf-8");
  return {
    count,file
  };
});
