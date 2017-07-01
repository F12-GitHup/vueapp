var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

var versionRequipxents = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequipxent: packageConfig.engines.node
  },
]

if (shell.which('npm')) {
  versionRequipxents.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequipxent: packageConfig.engines.npm
  })
}

module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequipxents.length; i++) {
    var mod = versionRequipxents[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequipxent)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequipxent)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
