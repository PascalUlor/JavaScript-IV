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
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

const fred = new Person({name: 'Fred', age: 12, gender: 'male', location: 'Bedrock'});
const pascal = new Person({name: 'Pascal', age: 92, gender: 'male', location: 'Lagos'});
console.log(fred.speak());
console.log(pascal.speak());

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr)
        this.specialty = instructorAttr.specialty
        this.favLanguage = instructorAttr.favLanguage
        this.catchPhrase = instructorAttr.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

const joe = new Instructor(
    {
    name: 'Joe',
    age: 12, 
    gender: 'male', 
    location: 'Bedrock',
    specialty: 'Data Science',
    favLanguage: 'Python',
    catchPhrase: 'In God We trust'
});
// Mock of student data
let student={name: 'Paul'}
console.log(joe);
console.log(joe.demo('Java'));
console.log(joe.grade(student, 'Data Science'));


class Student extends Person {
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`a method that receives a subject as an argument and logs out that the ${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`similar to PRAssignment but logs out ${this.name} has begun sprint challenge on ${subject}`)
    }

}

const johnson = new Student({
    name: 'Joe',
    age: 12, 
    gender: 'male', 
    location: 'Bedrock',
    previousBackground: 'Data science background',
    className: 'Math 405',
    favSubjects: ['Java', 'CSS', 'ReactJS', 'Python']
})

console.log(johnson);
console.log(johnson.listsSubjects());
console.log(johnson.PRAssignment('Java'));
console.log(johnson.sprintChallenge('Python'));

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const matt = new ProjectManager({
    name: 'Matt',
    age: 22, 
    gender: 'male', 
    location: 'Bedrock',
    specialty: 'Data Science',
    favLanguage: 'Python',
    catchPhrase: 'In God We trust',
    gradClassName: 'WEBEU2',
    favInstructor: 'Gabe'
})

console.log(matt);
console.log(matt.standUp('WebSprint'));
console.log(matt.debugsCode(johnson, 'Javascript'));