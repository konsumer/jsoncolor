var chalk = require('chalk')

function jsoncolor (json) {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, undefined, 2)
  }
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number'
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key'
      } else {
        cls = 'string'
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean'
    } else if (/null/.test(match)) {
      cls = 'null'
    }
    return jsoncolor.colors[cls](match)
  })
}

jsoncolor.colors = {
  number: chalk.hex('#ff6188'),
  key: chalk.hex('#a9dc76'),
  string: chalk.hex('#ffd866'),
  boolean: chalk.hex('#fc9867'),
  null: chalk.hex('#ab9df2')
}

module.exports = jsoncolor
