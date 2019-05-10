// Not anonymous
function square(x) {
    return x * x
}
console.log(square(8))

// Arrow functions are always anonymous
// Verbose arrow function
const squareArrow = (x) => {
    return x * x
}
console.log(squareArrow(8))

// Arrow function expression "concise"
// "x * x" expression is explicitly returned
const squareArrow2 = (x) => x * x


const fullName = 'Mike Jones'
let firstName
const getFirstName = (fullName) => {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}
getFirstName(fullName)

// Concise
const getLastName = (fullName2) => fullName2.split(' ')[1]
console.log(getLastName('Mike Jones'))
