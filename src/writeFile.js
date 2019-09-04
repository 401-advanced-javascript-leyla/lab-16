'use strict';
const fs = require('fs');
const util = require('util');

/**
 * This function will read the file and convert the content to uppercase
 * @param {object} file
 * @returns {object} data
 */
const writeFile = util.promisify(fs.writeFile);

module.exports = writeFile;
