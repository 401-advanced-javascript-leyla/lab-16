'use strict';

const events = require('./events.js');

events.on('save', file=>log('save',file));

function log(event,file){
  console.log(`${file} saved`);
}
