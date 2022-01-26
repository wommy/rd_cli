#!/usr/bin/env node
import chalk from 'chalk'
const log = console.log
const dimgray = chalk.dim.gray
const dg = dimgray

const todo = `- [ ] `
const mapTodo = x => x.map( y => todo+y ).join('\n')
const future = [
	`write RD-tudo`
]
const now = [
	`get the date`,
	`write to new file`,
	`todo --new`,
	`rd --new`,
	`rd __ => cd /rd && rd --new`,
]

console.clear()
log(dg(`
${
process.argv.slice(2).indexOf('--no-future') === -1 
	? mapTodo(future)
	: ``
}

TODO:
${mapTodo(now)}

`))
log(`args:`, process.argv.slice(2))