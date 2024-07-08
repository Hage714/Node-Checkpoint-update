//First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".

const fs = require('fs');
const createFile = (fileName, fileContent) => {
try {
    fs.writeFileSync(fileName, fileContent);
    console.log(`File ${fileName} created successfully`);
} catch (error) {
    console.error(`Error creating ${fileName}`, error);
}
}
createFile('welcome.txt', 'welcome.txt created successfully');
createFile('welcome.txt', 'Hello Node');


//create a program that reads and console.log data from hello.txt
const readDataFromFile = (fileName) => {
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(`Data from ${fileName}:`, data);
} catch (error) {
    console.error(`Error reading ${fileName}`, error);
}
}

readDataFromFile('welcome.txt');
