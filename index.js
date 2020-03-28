const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hello NodeJS!");
});

server.listen("5000", () => {
    console.log("Server has been started...");
});
