// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
const reverseString= {
    // use ES6 array methods
    method1: str => str.split('').reverse().join(''),
    // use a for..of loop
    method2: str => {
        let result = '';
        for (const x of str) {result = x + result};
        return result;
    },
    // use recursion
    method3: str =>
        (str.length === 0) ?
            '' : reverseString.method3(str.substr(1)) + str[0],
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = {
    // use ES6 array methods
    method1: str => {
        const rev = s => s.split('').reverse('').join('');
        return str === rev(str);
    },
    // re-use reverseString from above
    method2: str => str === reverseString.method1(str),
    // use for loop
    method3: str => {
        let result = true;
        for (let i=str.length - 1, j=0; i>= 0; i -= 1, j += 1) {
            result = (str[i] !== str[j]) ? false : result
        }
        return result;
    },
    // use recursion
    method4: str => {
        if (!str) return true;
        return (str[0] === str[str.length - 1])
                && isPalindrome.method4(str.substr(1,str.length-2))
    },

}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = {
    // Use array methods, with implicit coersion ('- 0') to return a number
    method1: int => [...int.toString()].reverse().join('') - 0,
    // Use array methods, use explicit coersion (Number())
    method2: int => Number([...int.toString()].reverse().join('')),
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
const capitalizeLetters = {

    // Use array methods
    method1: str =>
        str.toLowerCase()
            .split(' ')
            .map( a => !a ? '' : a[0].toUpperCase() + a.substr(1) )
            .join(' '),

    // User RegEx replace method
    method2: str =>
        str.toLowerCase()
            .replace(/\b\w/gi, x => x.toUpperCase()),

}


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxCharacter = {
    method1: str => {
        if (str.length === 0) return '';
        const charCount =
            str.toLowerCase()
                .split('')
                .reduce( (a,b) => {
                    const accum = a;
                    if (!accum[b]) {accum[b] = 1} else {accum[b] += 1};
                    return accum;
                }, {})

        const sortedList = Object.entries(charCount)
            .sort( (a,b) => b[1] - a[1])
        const highestFrequency = sortedList[0][1] || 0;

        const finalList = sortedList.reduce( (a,b) =>
            b[1] === highestFrequency ? [...a,b[0] ] : a,[])
        return finalList.length > 1 ? finalList : finalList[0];
    },
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz",
// for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5,
// print "FizzBuzz".
function fizzBuzz() {}



// Now set up some validation

const applyValidators = (validators) => fn =>
    validators.reduce( (a,b) => b(a), fn)

const withIsInteger = fn => x => {
    if (Number.isSafeInteger(x)) {return fn(x)}
    throw new Error(`Invalid argument passed - function only accepts integers`);
}

const withCheckNegative = fn => x =>
    x < 0 ? fn(-x) * -1 : fn(x);

const withIsString = fn => x => {
    if (typeof(x) === 'string') {return fn(x)}
    throw new Error(`Invalid argument passed - function only accepts strings`);
}

const intValidators = [
    withCheckNegative,
    withIsInteger,
]

const stringValidators = [
    withIsString,
]

const withIntValidators = applyValidators(intValidators);
const withStringValidators = applyValidators(stringValidators);

const reverseIntWithValidators = {};
Object.getOwnPropertyNames(reverseInt).forEach( (fn,i) => {
    reverseIntWithValidators[fn] = withIntValidators(reverseInt[fn]);
});

const reverseStringWithValidators = {};
Object.getOwnPropertyNames(reverseString).forEach( (fn,i) => {
    reverseStringWithValidators[fn] = withStringValidators(reverseString[fn]);
});

const isPalindromeWithValidators = {};
Object.getOwnPropertyNames(isPalindrome).forEach( (fn,i) => {
    isPalindromeWithValidators[fn] = withStringValidators(isPalindrome[fn]);
});

const capitalizeLettersWithValidators = {};
Object.getOwnPropertyNames(capitalizeLetters).forEach( (fn,i) => {
    capitalizeLettersWithValidators[fn] =
            withStringValidators(capitalizeLetters[fn]);
});

const maxCharacterWithValidators = {};
Object.getOwnPropertyNames(maxCharacter).forEach( (fn,i) => {
    maxCharacterWithValidators[fn] =
            withStringValidators(maxCharacter[fn]);
});


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
runTests(reverseStringWithValidators, testWords);

console.log('\n Is Palindrome ******** \n');
runTests(isPalindromeWithValidators, testWords);

console.log('\n Reverse Int ******** \n');
runTests(reverseIntWithValidators, testInt);

console.log('\n Capitalize letters  ******** \n');
runTests(capitalizeLettersWithValidators, testStrings);

console.log('\n Max Character  ******** \n');
runTests(maxCharacterWithValidators, testWords);

