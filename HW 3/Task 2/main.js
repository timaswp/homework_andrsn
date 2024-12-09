//without prototypes

function getPersons(name, age) {
    return [
        {name, age},
        Object.assign({}, {name, age}),
        Object.create(null, {
            name: {value: name},
            age: {value: age}
        })
    ];
}

console.log(getPersons('Tima', 22));

//with prototypes

function getPersonsNew(name, age) {
    const personPrototype = {
        getName() {
            return this.name;
        },
        getAge() {
            return this.age;
        }
    };

    const obj1 = Object.create(personPrototype);
    obj1.name = name;
    obj1.age = age;

    const obj2 = Object.assign(Object.create(personPrototype), {name, age});

    const obj3 = new Object({name, age});

    return [obj1, obj2, obj3];
}

console.log(getPersonsNew('Tima', 22));