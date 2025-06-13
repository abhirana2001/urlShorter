// const path = require("path");
// const { join } = path;
// const fileName = join("folder", "dddd", "data", "file.css");

// const parse = path.parse(fileName);
// const extname = path.extname(fileName);
// const resolve = path.basename(fileName);
// const dirName = path.dirname(fileName);

// console.log({ parse, resolve, extname, dirName, seprator: path.sep });

// OS Modules:-

// const os = require("os");

// console.log(os.uptime() / 60 / 24/6);

//crypto

// const crypto = require("crypto");

// const random = crypto.randomBytes(1).toString("hex");

// let hash = crypto.createHash("sha256").update("Abhishek").digest("hex");
// let hash1 = crypto.createHash("sha256").update("Abhishek").digest("hex");

// console.log(hash);
// console.log(hash1);
// console.log(hash === hash1);

// FS module:-
// Sync
// const fs = require("fs/promises");
// const path = require("path");

// const fileName = "index.txt";
// const newPath = path.join("data", fileName);

// const readFile = fs.unlinkSync("data.css");

// console.log(readFile);

// Async

// fs.rename(fileName, "done.css", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file deleted successfully");
// });

//Promise based Api

// fs.readdir(`${__dirname}`)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//  Event in node js

// const EventEmitter = require("events");
// const userEvent = require("./event");

// const emitter = new EventEmitter();

// emitter.on("user-login", (userName) => {
//   userEvent.userLogin++;
//   console.log(`${userName} logged in`);
// });

// emitter.on("user-purchase", (userName, purchase) => {
//   userEvent.userPurchase++;
//   console.log(`${userName} purchased ${purchase}`);
// });

// emitter.on("profile-update", (userName, update) => {
//   userEvent.userUpdate++;
//   console.log(`${userName} updated their ${update}`);
// });

// emitter.on("user-logout", (userName) => {
//   userEvent.userLogout++;
//   console.log(`${userName} logged out`);
// });

// emitter.on("summary", () => {
//   console.log(userEvent);
//   fs.writeFile(
//     "event.js",
//     `const userEvent = ${JSON.stringify(
//       userEvent
//     )} \nmodule.exports = userEvent; `,
//     "utf-8"
//   )
//     .then(() => console.log("summery updated successfully"))
//     .catch((err) => console.error(err));
// });

// emitter.emit("user-login", "abhishek");
// emitter.emit("user-purchase", "abhishek", "laptop");
// emitter.emit("profile-update", "abhishek", "email");
// emitter.emit("user-logout", "abhishek");

// emitter.emit("summary");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/steam") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1 style='color:red'>hi how are u<h1>");
//     res.end();
//   }
//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1 style='color:red'>hplaneu<h1>");
//     res.end();
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1 style='color:red'>notk found<h1>");
//     res.end();
//   }
// });

// server.listen(8080, () => {
//   console.log("server is connected");
// });

// / ////todo list
import { createInterface } from "readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const showMenu = () => {
//   console.log("\n1:Add Task");
//   console.log("2:View Task");
//   console.log("3:Exit");
//   rl.question("Choose an option: ", handleMenu);
// };

// const todoList = [];

// const handleMenu = (option) => {
//   switch (option) {
//     case "1":
//       rl.question("Enter the task : ", (task) => {
//         todoList.push(task);
//         console.log(`you added a task : ${task}`);

//         showMenu();
//       });
//       break;
//     case "2":
//       console.log("\nyour to do list");

//       todoList.map((item, index) => {
//         console.log(`${index + 1}: ${item}`);
//       });
//       showMenu();
//       break;
//     case "3":
//       console.log("thanks for using todo app");
//       rl.close();
//       break;
//     default:
//       console.log("invalid input");
//       showMenu();
//   }
// };

// showMenu();

// import fs from "fs";

// const createFile = () => {
//   rl.question("Enter the file name: ", (fileName) => {
//     rl.question("Enter the content for the file: ", async (content) => {
//       await fs.promises.writeFile(`${fileName}.txt`, `${content}`, "utf-8");
//       console.log(`File  "${fileName}.txt" created successfully`);
//       rl.close();
//     });
//   });
// };

// createFile();

//  random kokes

import https from "https";
import { json } from "stream/consumers";
import chalk from "chalk";

// const getJokes = () => {
//   http.get("http://official-joke-api.appspot.com/random_joke", (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data = data + chunk;
//     });
//     res.on("end", () => {
//       let joke = JSON.parse(data);
//       console.log(`there is a random ${joke.type} joke :`);
//       console.log(chalk.red(joke.setup));
//       console.log(chalk.blue.bgWhite.bold(joke.punchline));
//     });
//     res.on("error", (err) => console.log("error you got", err.message));
//   });
// };

// getJokes();

// const convertCurrency = (amount, currConvertorVal) => {
//   return (amount * currConvertorVal).toFixed(2);
// };

// const currencyConverter = () => {
//   const apiKey = "8b4edfea3b0d46e9bb4d238a62e43798";

//   https.get(
//     `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`,
//     (res) => {
//       let data = "";
//       res.on("data", (chunk) => {
//         data += chunk;
//       });
//       res.on("end", () => {
//         const allCurrencyData = JSON.parse(data).rates;
//         rl.question(
//           "which countries currency you want to convert (e.g., INR, EUR , NPR) :",
//           (currencyFrom) => {
//             let currFrom = allCurrencyData[currencyFrom.toUpperCase()];
//             if (currFrom) {
//               rl.question(
//                 `Enter the amount in ${currencyFrom.toUpperCase()} :`,
//                 (amount) => {
//                   rl.question(
//                     "Enter the target currency (e.g., INR, EUR , NPR) :",
//                     (currencyTO) => {
//                       let currTo = allCurrencyData[currencyTO.toUpperCase()];

//                       let currConvertorVal = "";

//                       if (currencyFrom.toUpperCase() == "USD") {
//                         currConvertorVal = currTo;
//                       } else {
//                         currConvertorVal = 1 / currFrom;
//                       }

//                       if (currTo) {
//                         console.log(
//                           `${amount} ${currencyFrom.toUpperCase()} is approximately ${convertCurrency(
//                             amount,
//                             currConvertorVal
//                           )} ${currencyTO.toUpperCase()}`
//                         );
//                       } else {
//                         console.log("invale currency code");
//                       }
//                     }
//                   );
//                 }
//               );
//             } else {
//               console.log("invaled currency code");
//             }
//           }
//         );
//       });
//     }
//   );
// };

// currencyConverter();

// const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
// const apiKey = "a05e33d0ec0f92fdf817de41eb37d432";

// const getWeather = async (city) => {
//   const url = `${baseUrl}?q=${city}&appid=${apiKey}`;
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("city not found please check the city name");
//     }
//     const weatherData = await res.json();
//     console.log(weatherData);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const city = await rl.question("Enter the city name you want to get weather :");
// await getWeather(city);

//// URL SHORTER

import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import { randomBytes } from "crypto";
import { sourceMapsEnabled } from "process";

const DATA_FILE = "data/links.json";

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, `Content-Type:${contentType}`);
    res.end(data);
  } catch (err) {
    res.writeHead(404, `Content-Type:plain/text`);
    res.end("404 error");
  }
};

const loadLinks = async () => {
  try {
    let data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}), "utf-8");
      return {};
    }
    throw err;
  }
};

const saveLink = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links), "utf-8");
};

const server = createServer(async (req, res) => {
  const links = await loadLinks();

  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, "index.html", "plain/html");
    } else if (req.url === "/shorten") {
      res.writeHead(200, { "content-type": "apllication/json" });
      return res.end(JSON.stringify(links));
    } else if (req.url === "/index.css") {
      return serveFile(res, "index.css", "plain/css");
    } else {
      let link = await loadLinks();
      let shortCode = req.url.slice(1);
      if (link[shortCode]) {
        res.writeHead(302, { location: link[shortCode] });
        return res.end();
      }
      res.writeHead(400, { "Content-type": "text/plain" });
      return res.end("shorterend url is notfound");
    }
  }
  if (req.method === "POST" && req.url === "/shorten") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", async () => {
      const { url, shortCode } = JSON.parse(data);
      if (!url) {
        res.writeHead(400, { "Content-type": "text/plain" });
        return res.end("url is required");
      }

      const finalShortCode = shortCode || randomBytes(4).toString("hex");

      if (links[finalShortCode]) {
        res.writeHead(400, { "Content-type": "text/plain" });
        return res.end("shortCode already exsists . please choose another");
      }

      links[finalShortCode] = url;
      await saveLink(links);
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(
        JSON.stringify({ success: true, shortCode: finalShortCode })
      );
    });
  }
});

server.listen(4323, () => {
  console.log("server is connectrd");
});
