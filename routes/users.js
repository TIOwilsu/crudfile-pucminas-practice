const fs = require('fs')
const chalk = require('chalk')
const file = 'users.json'
const filePath = getPath(file, '../')
const { replaceAll } = require('../util/string')
const { getPath, hasFile, hasContent, read } = require('../util/file')

const create = (item) => {
    try{ 
        const validate = hasFile(filePath) && hasContent(filePath)
        const find = /},/
        const replace = '},\r\n'
        let items = []
        if (validate) items = get()
        items.push(item)
        let str = JSON.stringify(items)
        let content = replaceAll(str, find, replace)
        fs.writeFileSync(file, content)
        console.log(chalk.bold.green('Usuário criado com sucesso!'))
    } catch (err){
        console.log(chalk.bold.red('Ouve um problema! Não foi possivel criar um usuario.', err))
    }
}

const update = ({ _id, fields }) => {
    try{
        let items = get()
        Object.keys(fields).forEach((fKey) => { 
            items.map((item) => {
                Object.keys(item).forEach((iKey) => {
                    const validate = item._id === _id && fKey === iKey && fields[fKey] !== item[iKey]
                    if(validate) item[iKey] = fields[fKey]
                })
            }) 
        })
        let string = items.map(item => JSON.stringify(item)).join('\r\n')
        fs.writeFileSync(file, string)
        console.log(chalk.bold.green('Usuário atualizado com sucesso!'))
    } catch(err){
        console.log(chalk.bold.red('Ouve um problema! Não foi possivel atualizar um usuario.'))
    }
}

const remove = (value) => {
    try{
        let items = get()
        let filter = items.filter(({ _id }) => _id !== value).
            map(item => JSON.stringify(item)).
            join('\r\n')

        fs.writeFileSync(file, filter)
        console.log(chalk.bold.green('Usuário removido com sucesso!'))
    } catch(err){
        console.log(chalk.bold.red('Ouve um problema! Não foi possivel remover o usuario.'))
    }
}

const get = (id) => {
    const content = read(filePath)
    let items = JSON.parse(content)
    
    if (id){
        const item = items.find(({ _id }) => _id === id)
        return item
    }
    
    return items
}

module.exports = { 
    create, 
    update,
    remove,
    get
}