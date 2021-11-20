'use strict'

const tap = require('tap')
const getHelpText = require('../lib/get-help-text')
const helpText = require('../lib/data/helptext.json').join('\n')

tap.equal(helpText, getHelpText(), 'It returns correct helptext')
