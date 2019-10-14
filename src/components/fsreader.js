// import React from 'react';
const fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer.from(bitmap).toString('base64');
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));

// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });



const bigbase64 = base64_encode('../resources/highresface.jpg');

fs.writeFile('./thangie.txt',bigbase64, (err) => {
    if(err) throw err;
    console.log('it worked')
})

