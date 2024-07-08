const fs = require('fs');
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