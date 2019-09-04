'use strict';

//event listener setup
const events = require('./events.js');
require('./logger.js');

const readFile = require('./readFile');
const writeFile = require('./writeFile');
const toUpperCase = require('./toUpperCase');


const fs = require('fs');
const util = require('util');


/**
 * This function will read the File and then convert the content to uppercase, then save the file
 * @param {object} file
 */

const alterFile = (file) => {
  let text = null;

  readFile(file)
    .then(data =>{
      text = toUpperCase(data);
      return writeFile(file, text)
        .then(()=>{
          events.emit('save', file);
        });
    })
    .catch(err=>{
      throw err;
    });

};

//When testing at terminal, need to write 'node src/app.js test.txt'
let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = alterFile;
