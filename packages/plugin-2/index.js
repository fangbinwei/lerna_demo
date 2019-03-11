console.log('plugin2')
const plugin1 = require('plugin-1')

console.log('load ', plugin1.name, ' in plugin2')
module.exports = {
  name: 'plugin2'
}
