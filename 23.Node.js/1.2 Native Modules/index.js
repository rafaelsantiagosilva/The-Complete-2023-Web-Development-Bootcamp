const fs = require('fs');

fs.writeFile("message.txt", "Hello World! Ps: From NodeJS", (err) => {
     if (err) throw err;
     console.log("The file has been saved!");
});

fs.readFile("message.txt", (err, data) => {
     if (err) throw err;
     console.log('The file has been read: ' + data);
});