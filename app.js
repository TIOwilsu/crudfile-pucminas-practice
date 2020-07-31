const file = require('./file')
const yargs = require('yargs')
const User = require('./user')

yargs.command({
    command: 'add',
    describe: 'Cria um usuário no arquivo.',
    handler: ({ name, email, password, gender }) =>  {
        const params = { name, email, password, gender }
        const user  = new User(params)
        file.create(user) 
    }
})

yargs.command({
    command: 'update',
    describe: 'Atualiza um usuário no arquivo.',
    handler: ({ id, name, email, password, gender }) => {
        const request = {
            _id: id,
            fields: {
                _name: name,
                _email: email,
                _password: password,
                _gender: gender
            }
        }
        file.update(request)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remover um usuário no arquivo.',
    handler: ({ id }) =>  {
        file.remove(id) 
    }
})

