const yargs = require('yargs')
const commands = require('./helpers/commands')

commands.forEach(command =>  yargs.command(command))

yargs.parse()
