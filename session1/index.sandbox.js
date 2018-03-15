const {
    reverseStringWithValidators: reverseString,
    isPalindromeWithValidators: isPalindrome,
    reverseIntWithValidators: reverseInt,
    capitaliseLettersWithValidators: capitaliseLetters,
    maxCharacterWithValidators: maxCharacter,
    fizzBuzz,
} = require( './index' );


// Test data

const testWords = [
    '',
    'a',
    'hello',
    'racecar',
    'potato',
    'javascript',
    123,
];

const testStrings = [
    '',
    'hEllo, THIS is A tesT',
    '1 a string with numbers 2',
    'one',
    123,
]

const testInt = [
    0,
    42,
    12345678,
    10,
    101,
    -5,
    -987,
    'a',
];



// Create a generic test runner

const runTests = (fns, testArray) =>
    testArray.forEach( n => {
        console.log(`Testing ${n}`);

        Object.getOwnPropertyNames(fns).forEach( (fn,i) => {
            try {
                const currentfn = fns[fn];
                const result = currentfn(n);

                console.log(`  Method ${i + 1} = ${result}`);
            } catch(e) {
                console.log(` ERROR -> ${e.message}`)
            }
        })

    });


// Run tests

console.log('\n Reverse String ******** \n');
runTests(reverseString, testWords);

console.log('\n Is Palindrome ******** \n');
runTests(isPalindrome, testWords);

console.log('\n Reverse Int ******** \n');
runTests(reverseInt, testInt);

console.log('\n Capitalise letters  ******** \n');
runTests(capitaliseLetters, testStrings);

console.log('\n Max Character  ******** \n');
runTests(maxCharacter, testWords);

console.log('\n FizzBuzz  ******** \n');
runTests(fizzBuzz, [undefined]);
