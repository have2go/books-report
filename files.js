const fs = require('fs');

function handleReadingFile() {
    let fileContent = fs.readFileSync('./file.txt', 'utf8');
    console.log(fileContent);
}

export default handleReadingFile;
