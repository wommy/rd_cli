#!/usr/bin/env node
const log = console.log
import chalk from 'chalk'
const dimgray = chalk.dim.gray
const dg = dimgray

import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
const Tudos = new Low( new JSONFile( join( dirname(fileURLToPath(import.meta.url)), 'Tudos.json') ) )
await Tudos.read()
// Tudos.data ||= {} // INIT
// Tudos.data.push( CATEGORY: [] ) // new Category
const { future, now } = Tudos.data
// now.push( 'api.github repos' ) // new Tudo
// await tudos.write()

const mapTodo = x => x.map( y => `- [ ] `+y ).join('\n')

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