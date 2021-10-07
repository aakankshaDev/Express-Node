// Implement your web server here


const express = require('express');

'use strict';

const fs = require('fs');
const path = require('path');
let rawdata = fs.readFileSync(path.resolve(__dirname, './data/personnel.json'));
let student = JSON.parse(rawdata);


// console.log(student);
const PORT = 8001;
const app = express();

app.listen(PORT, () => console.log(`App running at http://localhost on port ${PORT}`));
app.get('/api/personnel', (req, res) => { 
      res.send({student});
  });