'use strict'

function getHelptext () {
  var help = require('./data/helptext.json')
  return help.join('\n')
}

module.exports = getHelptext
