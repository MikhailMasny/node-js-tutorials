const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {

    let filePath = path.join(__dirname, "src", request.url === "/" ? "index.html" : request.url);
    const extension = path.extname(filePath);
    let contentType = "text/html";

    switch (extension) {
        case ".css": {
            contentType = "text/css";
        } break;

        case ".js": {
            contentType = "text/javascript";
        } break;

        default: {
            contentType = "text/html";
        } break;
    }

    if (!extension) {
        filePath += ".html";
    }

    console.log(filePath);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
                if (err) {
                    response.writeHead(500);
                    response.end("Server error.");
                } else {
                    response.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    response.end(data);
                }
            })
        } else {
            response.writeHead(200, {
                "Content-Type": contentType
            });
            response.end(content);
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});
