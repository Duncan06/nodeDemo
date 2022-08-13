import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);

// Create folder
// fs.mkdir(path.join(path.dirname(__filename), '/test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder created...');
// });

// Create folder
fs.writeFile(
  path.join(path.dirname(__filename), "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("Folder written to...");
    // Create folder
    fs.appendFile(
      path.join(path.dirname(__filename), "/test", "hello.txt"),
      " I love node.js!",
      (err) => {
        if (err) throw err;
        console.log("Folder written to...");
      }
    );
  }
);

// Read file
fs.readFile(
  path.join(path.dirname(__filename), "/test", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename file
// Read file
fs.rename(
  path.join(path.dirname(__filename), "/test", "hello.txt"),
  path.join(path.dirname(__filename), "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
