'use strict';

const events = require('./events.js');

events.on('save', file=>log('save',file));



/**
 *This will let us know that we saved the file
 *
 * @param {object} event
 * @param {object} file
 */
function log(event,file){
  console.log(`${file} saved`);
}
