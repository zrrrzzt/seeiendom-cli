'use strict'

var tap = require('tap')
var getHelpText = require('../lib/get-help-text')
var helpText = require('../lib/data/helptext.json').join('\n')

tap.equal(helpText, getHelpText(), 'It returns correct helptext')
