import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))

class OldSyntax {
  constructor() {
    this.name = 'Lani'
  }
}

const oldSyntax = new OldSyntax()
console.log(oldSyntax)



class NewSyntax {
  name = 'Zeus'
  getGreeting = () => {
    return `Hi, I am the  great ${this.name}.`
  }
}
const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
console.log(newSyntax)