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
        return console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

const fred = new Person({name: 'Fred', age: 12, gender: 'male', location: 'Bedrock'});
const pascal = new Person({name: 'Pascal', age: 92, gender: 'male', location: 'Lagos'});
fred.speak();
pascal.speak();

/**
 * Instructor Class
 */
class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr)
        this.specialty = instructorAttr.specialty
        this.favLanguage = instructorAttr.favLanguage
        this.catchPhrase = instructorAttr.catchPhrase
    }
    demo(subject) {
        return console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        return console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    updateGrade(student) {
        const randomIndex =  Math.floor(Math.random()*10);
        if(randomIndex%2 === 0) {
            student.grade += Math.floor(Math.random()*10);
            return console.log(`${student.name} increased to ${student.grade}`)
        } else {
            student.grade -= Math.floor(Math.random()*10);
            return console.log(`${student.name}'s decreased to ${student.grade}`)
        }
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
joe.demo('Java');
joe.grade(student, 'Data Science');


/**
 * Student Class
 */
class Student extends Person {
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects
        this.grade = 75
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            return console.log(subject);
        });
    }
    PRAssignment(subject) {
        return console.log(`a method that receives a subject as an argument and logs out that the ${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        return console.log(`similar to PRAssignment but logs out ${this.name} has begun sprint challenge on ${subject}`)
    }

    graduate(reviewer){
        if (this.grade >= 70){
            return console.log(`congratulations ${this.name} you graduated with ${this.grade}`);
        } else {
            return console.log(`sorry you didn't make the cut off mark ${reviewer.updateGrade(this)}`)
        }
    }

}

const johnson = new Student({
    name: 'Johnson',
    age: 12, 
    gender: 'male', 
    location: 'Bedrock',
    previousBackground: 'Data science background',
    className: 'Math 405',
    favSubjects: ['Java', 'CSS', 'ReactJS', 'Python']
})

console.log(johnson);
johnson.listsSubjects();
johnson.PRAssignment('Java');
johnson.sprintChallenge('Python');
johnson.graduate(joe);

/**
 * Project Manager Class
 */
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel standup times!​​​​​`)
    }

    debugsCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
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
matt.standUp('WebSprint');
matt.debugsCode(johnson, 'Javascript');
matt.updateGrade(johnson);

