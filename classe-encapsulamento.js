class Person {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name (value) {
        this._name = value;
    }
}

let person = new Person ('Fernanda');
person.name = 'Nanda'
console.log(person.name);