/* global describe, it, expect */
var jsoncolor = require('./index')
var test = require('./test.json')
var chalk = require('chalk')

var defaultColors = Object.assign({}, jsoncolor.colors)

describe('jsoncolor', () => {
  it('should handle basic syntax', function () {
    expect(jsoncolor(test)).toMatchSnapshot()
  })

  it('should allow custom colors', () => {
    jsoncolor.colors = {
      number: chalk.red,
      key: chalk.magenta,
      string: chalk.green,
      boolean: chalk.blue,
      null: chalk.cyan
    }
    expect(jsoncolor(test)).toMatchSnapshot()
    jsoncolor.colors = defaultColors
  })

  it('should allow HTML colors', () => {
    jsoncolor.colors = {
      number: o => `<span class="number">${o}</span>`,
      key: o => `<span class="key">${o}</span>`,
      string: o => `<span class="string">${o}</span>`,
      boolean: o => `<span class="boolean">${o}</span>`,
      null: o => `<span class="null">${o}</span>`
    }
    expect(jsoncolor(test)).toMatchSnapshot()
    jsoncolor.colors = defaultColors
  })
})
