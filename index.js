module.exports = {
  '.babel.js': function (opts) {
    return require('babel-core').transform(opts.fileContents, {filename: opts.filePath}).code
  },
  '.coffee': function (opts) {
    return require('coffee-script').compile(opts.fileContents, {filename: opts.filePath})
  },
  '.ls': function (opts) {
    return require('livescript').compile(opts.fileContents, {filename: opts.filePath})
  }
}
