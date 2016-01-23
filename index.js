#! /usr/bin/env node
'use strict'

var seeiendom = require('seeiendom')
var getHelpText = require('./lib/get-help-text')
var query = process.argv[2]
var pkg = require('./package.json')
var options = {
  query: query
}

if (query === '-v' || query === '--version') {
  console.log(pkg.version)
  process.exit(0)
}

if (query === '-h' || query === '--help') {
  console.log(getHelpText())
  process.exit(0)
}

seeiendom(options, function (error, data) {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log(data)
  }
})
