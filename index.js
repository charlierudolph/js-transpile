module.exports = {
  '.babel.js': function ({fileContents, filePath, nodeModule}) {
    return require('babel-core').transform(fileContents, {filename: filePath}).code
  },
  '.coffee': function ({fileContents, filePath, nodeModule}) {
    return require('coffee-script').compile(fileContents, {filename: filePath})
  },
  '.ls': function ({fileContents, filePath, nodeModule}) {
    return require('livescript').compile(fileContents, {filename: filePath})
  }
}
