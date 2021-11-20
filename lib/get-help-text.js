'use strict'

function getHelptext () {
  const help = require('./data/helptext.json')
  return help.join('\n')
}

module.exports = getHelptext
