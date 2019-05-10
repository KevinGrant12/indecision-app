// '=' is assignment operator

// Can be duplicated
var nameVar = 'Kevin'
nameVar = 'Mick'
var nameVar = 'poop'
console.log('nameVar', nameVar)

// Can be reassigned but not redefined
let nameLet = 'Jon'
nameLet = 'Seanjon'
console.log('nameLet', nameLet)


const nameConst = 'Cripdip'
console.log('nameConst', nameConst)

// Block scoping
var fullName = 'Kevin Grant'

if(fullName) {

    // Block scoped
    const firstName = fullName.split(' ')[0]
    console.log(firstName)
}