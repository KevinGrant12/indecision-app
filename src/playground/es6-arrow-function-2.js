// arguments object - no longer bound with arrow function
const add = (a, b) => {
    // console.log(arguments)
    return a + b
}
console.log(add(55, 1))


// this keyword is no longer bound
const user = {
	name: 'Kevin',
	cities: ['Chicago', 'Waukegan', 'Tempe'],

	// New way for creating method
	printPlaceLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city)
	}
}
console.log(user.printPlaceLived())

const multiplier = {
	numbers: [55, 65, 70],
	multiplyBy: 76,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy)
	}
}
console.log(multiplier.multiply())