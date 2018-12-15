#! /usr/bin/env node

const seeiendom = require('seeiendom')
const getHelpText = require('./lib/get-help-text')
const query = process.argv[2]
const pkg = require('./package.json')

if (query === '-v' || query === '--version') {
  console.log(pkg.version)
  process.exit(0)
}

if (query === '-h' || query === '--help') {
  console.log(getHelpText())
  process.exit(0)
}

seeiendom(query, function (error, data) {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log(data)
  }
})
