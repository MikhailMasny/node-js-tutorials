const fileSystem = require("fs");
const path = require("path");

fileSystem.mkdir(path.join(__dirname, "test"), (error) => {
    if (error) {
        throw error;
    }

    console.log("Folder created.");
});

const filePath = path.join(__dirname, "test", "text.txt");

fileSystem.writeFile(filePath, "Hello NodeJS", (error) => {
    if (error) {
        throw error;
    }

    console.log("File created.");
});

fileSystem.appendFile(filePath, "\nNew line.", (error) => {
    if (error) {
        throw error;
    }

    console.log("File created.");
});

fileSystem.readFile(filePath, (error, content) => {
    if (error) {
        throw error;
    }

    const data = Buffer.from(content);
    console.log("Content: ", data.toString());
});

fileSystem.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
        throw error;
    }

    console.log("Content: ", content);
});
