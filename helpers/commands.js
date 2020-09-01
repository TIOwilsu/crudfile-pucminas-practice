const users = require('../routes/users')
const User = require('../classes/user')

const commands = [
    {
        command: 'add',
        describe: 'Cria um usuário no arquivo.',
        builder: {
            name: {
                describe: 'Nome do usuário',
                demandOption: true,
                type: 'String'
            },
            email: {
                describe: 'Email do usuário',
                demandOption: true,
                type: 'String'
            },
            password: {
                describe: 'Senha do usuário',
                demandOption: true,
                type: 'String'
            },
            gender: {
                describe: 'Genero do usuário',
                demandOption: true,
                type: 'String'
            }
        },
        handler: ({ name, email, password, gender }) =>  {
            const params = { name, email, password, gender }
            const user  = new User(params)
            users.create(user) 
        } 
    },
    {
        command: 'update',
        describe: 'Atualiza um usuário no arquivo.',
        builder: {
            id: {
                describe: 'Id do usuário',
                demandOption: true,
                type: 'String'
            }
        },
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
            users.update(request)
        }
    },
    {
        command: 'remove',
        describe: 'Remover um usuário no arquivo.',
        builder: {
            id:{
                describe: 'Id do usuário',
                demandOption: true,
                type: 'String'
            }
        },
        handler: ({ id }) =>  {
            users.remove(id) 
        }
    },
    {
        command: 'get',
        describe: 'Pega todos ou um usuário no arquivo',
        builder: {
            id: {
                describe: 'Id do usuário',
                type: 'String'
            }  
        },
        handler: ({ id }) =>  {
            users.get(id) 
        }
    }
]

module.exports = commands