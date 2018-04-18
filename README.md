# jsoncolor

Configurable and simple JSON colorizer

I had various issues with other JSON-color libraries (they choke on certain characters, etc.) I wanted something lightweight, easily configurable and simple that works, so I made this.

It handles JSON, and JSON-serializable objects.

## installation

```sh
npm i jsoncolor
```

## usage

```js
const jsoncolor = require('jsoncolor')
console.log(jsoncolor(process.env))
```

You can also change the colors. Just set the right fields in `colors` to functions that colorize your text. These are the defaults, but you can use anything:

```js
jsoncolor.colors = {
  number: chalk.hex('#ff6188'),
  key: chalk.hex('#ffd866'),
  string: chalk.hex('#a9dc76'),
  boolean: chalk.hex('#ab9df2'),
  null: chalk.hex('#ab9df2')
}
```

If you wanted to use more basic colors:

```js
jsoncolor.colors = {
  number: chalk.red,
  key: chalk.magenta,
  string: chalk.green,
  boolean: chalk.blue,
  null: chalk.cyan,
}
```

If you wanted to output HTML:

```js
jsoncolor.colors = {
  number: o => `<span class="number">${o}</span>`,
  key: o => `<span class="key">${o}</span>`,
  string: o => `<span class="string">${o}</span>`,
  boolean: o => `<span class="boolean">${o}</span>`,
  null: o => `<span class="null">${o}</span>`
}
```

if you don't care about colors or JSON at all:

```js
jsoncolor.colors = {
  number: o => `NUMBER(${o})`,
  key: o => `KEY(${o})`,
  string: o => `STRING(${o})`,
  boolean: o => `BOOLEAN(${o})`,
  null: o => `NULL`,
}
```
