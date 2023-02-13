const http = require("http");

const app = require("./src/server");

const port = process.env.PORT || 3333;

const server = http.createServer(app);
