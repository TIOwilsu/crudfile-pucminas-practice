const replaceAll = (str, find, replace) => {
    const regex = new RegExp(find, 'g')
    return str.replace(regex, replace)
}

module.exports = {
    replaceAll
}