const exec = require('child_process').execFile
const tap = require('tap')
const getHelpText = require('../lib/get-help-text')
const pkgVersion = require('../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithH (test) {
  exec('./index.js', ['--help'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns version with --version flag', function versionWithV (test) {
  exec('./index.js', ['--version'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns result if argumet supplied',
  function seeiendomDefault (test) {
    exec('./index.js', ['0806-60/77'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.ok(stdout.toString().trim(), 'true')
        test.end()
      }
    })
  }
)

tap.test('It returns nothing if argumet supplied',
  function seeiendomDefault (test) {
    exec('./index.js', ['jubadubaskogen'], function getDefault (error, stdout, stderr) {
      if (error) {
        console.error(stderr.toString())
        throw error
      } else {
        test.ok(stdout.toString().trim(), '')
        test.end()
      }
    })
  }
)

tap.test('It throws error if argument not supplied',
  function cliDefault (test) {
    exec('./index.js', function getDefault (error, stdout, stderr) {
      test.ok(error, 'Error OK')
      test.end()
    })
  }
)
