const file = require('./file')
const user = require('./user')

const insert = { 
    name: 'Luccas Meireles',
    email: 'luccas.meireles@gmail.com',
    password: '12345',
    gender: 'male'
}

const createdUser = user.create(insert)

file.create(createdUser)

//file.remove(0.38326579984807685)

const update = {
    id: 0.49704456736460667,
    fields: {
        name: 'Leonardo Queiroz Rocha',
        email: 'pirocudo2000@gmail.com',
        password: '123456'
    }
}
//file.update(update)
