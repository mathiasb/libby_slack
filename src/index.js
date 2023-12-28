const libby_config = require('./config.js');

credentials = libby_config.setup();

console.log('c.1 = ' + credentials.token);