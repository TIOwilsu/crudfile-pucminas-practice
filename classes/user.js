const user = class User {
    constructor({ name , email , password , gender }) {
        this._id = Math.random().toString(),
        this._name = name,
        this._email = email,
        this._password = password,
        this._gender = gender,
        this._date = new Date()
    }
    get name() {
        return this._name
    }
    set name(value){
        this._name = value
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password = value
    }
    get gender(){
        return this._gender
    }
    set gender(value){
        this._gender = value
    }
}

module.exports = user 

