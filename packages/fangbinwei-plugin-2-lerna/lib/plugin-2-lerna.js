'use strict';

const plugin1 = require('plugin-1-lerna')

console.log('load ', plugin1.name, ' in plugin2')
module.exports = {
  name: 'plugin2'
}

const fix = 'plugin2 fix bug'
const feat = 'plugin2 feat'
const feat2 = 'plugin2 feat2'