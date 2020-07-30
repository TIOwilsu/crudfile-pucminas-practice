const create = ({ name, email, password, genre }) => {
    return {
        id: Math.random(),
        name: name,
        email: email,
        password: password,
        genre: genre
    }
}

module.exports = {
    create
}