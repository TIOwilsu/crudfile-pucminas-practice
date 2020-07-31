const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'lança perfume',
    handler: () => {
        console.log('sodsjf')
    }
})

console.log(yargs.argv)
