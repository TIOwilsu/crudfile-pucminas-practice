const file = require('./file')
const User = require('./user')

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
            file.create(user) 
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
            file.update(request)
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
            file.remove(id) 
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
            file.get(id) 
        }
    }
]

module.exports = commands