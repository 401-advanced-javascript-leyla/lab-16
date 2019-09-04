'use strict';
const fs = require('fs');
const util = require('util');

/**
* This function will read the file and convert the content to uppercase
* @param {object} file
*/
const readFile = util.promisify(fs.readFile);

module.exports = readFile;
