'use strict';

var ENV = process.env.SERVER || false;
if (ENV) {
    console.log(ENV);
    module.exports = require('./' + ENV + '.js') || {};
} else {
    console.log("There are no servers currently selected...")
}