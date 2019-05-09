// CODE here for your Lambda Classes
/**
 * Person Class
 */
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.gender = attributes.gender;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

const fred = new Person({name: 'Fred', age: 12, gender: 'male', location: 'Bedrock'});
const pascal = new Person({name: 'Pascal', age: 92, gender: 'male', location: 'Lagos'});
console.log(fred.speak());
console.log(pascal.speak());