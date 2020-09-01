const replaceAll = (str, find, replace) => {
    const regex = new RegExp(find, 'g')
    return str.replace(regex, replace)
}

const toJson = (str) => {
    const find = /},/
    const replace = '},\r\n'
    return replaceAll(str, find, replace)
}

module.exports = {
    replaceAll,
    toJson
}