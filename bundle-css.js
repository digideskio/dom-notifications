var fs = require('fs')

var css = fs.readFileSync('./notifications.css', 'utf-8').replace(/\n+/g, '')
var style = `// Generated by bundle-css.js
module.exports = '${css}'`
fs.writeFileSync('style.js', style)