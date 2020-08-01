const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const file = 'users.txt'


const getPath = (file) => {
    return path.join(__dirname, file)
}

const create = (item) => {
    try{
        const filePath = getPath(file)
        const validate = fs.existsSync(filePath) && hasContent(file)
        let itemString = JSON.stringify(item)
        var string = `${itemString}`
        if(validate) string = `\r\n${string}`
        fs.appendFileSync(file, string)
        console.log(chalk.bold.green('Usuário criado com sucesso!'))
    } catch{
        console.log(chalk.bold.red('Ouve um problema! Não foi possivel criar um usuario.'))
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
    const content = read(file)
    let items = content.split('\r\n')
    items = items.map(item => JSON.parse(item))

    if (id){
        const item = items.find(({ _id }) => _id === id)
        return item
    }
    
    return items
}

const read = (file) => {
    try{
        const filePath = getPath(file)
        return fs.readFileSync(filePath, { encoding: 'utf8' })
    }
    catch(err){
        console.log(chalk.bold.red('Não foi possivel encontrar o arquivo!'))
    }
}

const hasContent = (file) => {
    try{
        const filePath = getPath(file)
        const content = fs.readFileSync(filePath, { encoding: 'utf8' })
        if(content) return true
        else return false
    }
    catch(err) {
        console.log(chalk.bold.red('Não foi possivel encontrar o arquivo!'))
        return false
    }
}

module.exports = { 
    create, 
    update,
    remove,
    getPath,
    get
}