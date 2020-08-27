const chalk = require('chalk')
const file = 'users.json'
const { getPath, hasFile, hasContent, read, syncFile } = require('../util/file')
const filePath = getPath(file, '../')

const create = (item) => {
    try{ 
        const validate = hasFile(filePath) && hasContent(filePath)
        let items = []
        if (validate) items = get()
        items.push(item)
        syncFile(file, items)
        console.log(chalk.bold.green('Usuário criado com sucesso!'))
    } catch (err){
        console.log(chalk.bold.red('Ouve um problema! Não foi possivel criar um usuario.'))
    }
}

const update = ({ _id, fields }) => {
    try{
        const items = get()
        Object.keys(fields).forEach((fKey) => { 
            items.map((item) => {
                Object.keys(item).forEach((iKey) => {
                    const validate = item._id === _id && fKey === iKey && fields[fKey] !== item[iKey]
                    if(validate) item[iKey] = fields[fKey]
                })
            }) 
        })
        syncFile(file, items)
        console.log(chalk.bold.green('Usuário atualizado com sucesso!'))
    } catch(err){
        console.log(err)
    }
}

const remove = (value) => {
    try{
        const items = get()
        const filter = items.filter(({ _id }) => _id !== value)
        syncFile(file, filter)
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