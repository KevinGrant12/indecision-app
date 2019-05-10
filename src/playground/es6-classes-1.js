class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hello ho, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old!`
  }
}

// Sub-class
class Student extends Person {
  constructor(name, age, major) {
    // super calls parent constructor function
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  // override description
  getDescription() {
    let description = super.getDescription()
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age)
    this.location = location
  }

  hasLocation() {
    return !!this.location
  }

  // override greeting
  getGreeting() {
    let greeting = super.getGreeting()
    if(this.hasLocation()) {
      greeting += ` I am visiting from ${this.major}.`
    }

    return greeting
  }
}

const lani = new Person('Lani Jean', 1.5)
console.log(lani, lani.getGreeting(), lani.getDescription())

const jessie = new Person('Jessie Kohler', 26)
console.log(jessie, jessie.getGreeting(), jessie.getDescription())

const anonymous = new Person()
console.log(anonymous)

const shamoo = new Student('Shamoo the Whale', 117,'Wale-ology')
console.log(shamoo.hasMajor(), shamoo.getDescription())

const keimon = new Traveler('Keimon Daes', 1500, 'Underworld')
console.log(keimon, keimon.hasLocation(), keimon.getGreeting())

const obner = new Traveler('Obner Kahn', 1700)
console.log(obner, obner.hasLocation(), obner.getGreeting())