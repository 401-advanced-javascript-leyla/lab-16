'use strict';

/**
 * This function will convert the content to uppercase (stringfy it first, then upper case it and re-buffer-ize it)
 * @param {object} data
 * @returns {object} text
 */
const toUpperCase = (data)=>{
  let text = data.toString().toUpperCase();
  return Buffer.from(text);
};

module.exports = toUpperCase;

