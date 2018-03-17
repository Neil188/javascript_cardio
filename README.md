# JavaScript Cardio

JavaScript challenges from various sources.

Session 1 & 2 adapted from [Traversy Media's Javascript Cardio](https://github.com/bradtraversy/javascript_cardio)
Session 3 from HackerRank

The aim is to give multiple solutions to each problem, each demonstrating a different solution method.

## Installation Instructions

1. Clone locally using:

    `git clone https://github.com/Neil188/javascript_cardio.git`

2. Install dependencies:

    `npm install`

## Structure

As the aim is to provide multiple solutions for each challenge each challenge is set up as an object, within which the different solutions should be provided as methods.  For example, a write something to the console challenge could have the following solutions:

```javascript
// CHALLENGE: WRITE TO CONSOLE
const writeConsole = {
    method1: () => console.log('Hello'),

    method2: () => console.warn('Hello')
}
```

This allows new methods to be added without commenting out the previous solutions.  Plus tests can iterate over the object running each method, without needing to change anything each time a new solution is added.

The original questions with no solutions will be in the 'master' branch, and the solutions will be stored under the 'solutions' branch.

### Validating

In the solutions branch each answer assumes pre-validated arguments to simplify the code.  Then a set of higher-order functions are used to add basic validation to each method, producing a 'WithValidators' version.

### Sandbox files

These files import the solutions then perform some basic test runs on each method writing the output to the console.  Provides a simple way of seeing how the functions can be used, and what they produce (each method within a challenge should produce the same output).
