'use strict';

//event listener setup
const events = require('./events.js');
require('./logger.js');

const fs = require('fs');
const util = require('util');

/**
* This function will read the file and convert the content to uppercase
* @param {object} file
*/
const readFile = util.promisify(fs.readFile);


/**
 * This function will read the file and convert the content to uppercase
 * @param {object} file
 * @returns {object} data
 */
const writeFile = util.promisify(fs.writeFile);

/**
 * This function will convert the content to uppercase (stringfy it first, then upper case it and re-buffer-ize it)
 * @param {object} data
 * @returns {object} text
 */
const toUpperCase = (data)=>{
  let text = data.toString().toUpperCase();
  return Buffer.from(text);
};

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
