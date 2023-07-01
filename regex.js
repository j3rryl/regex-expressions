const url = 'http://localhost:3000/dashboard/patients/add';
let val = url.replace()
const regex = /^(https?:\/\/[^/]+\/[^/]+\/[^/]+)/;
const matches = url.match(regex);
const baseUrl = matches ? matches[1] : '';

console.log(baseUrl);

// const segments = url.split('/').slice(0, 5); // Adjust the slice range based on the number of segments to keep
// const baseUrl = segments.join('/');

// console.log(baseUrl);

// Match a specific word:

// Pattern: /hello/
// Matches: "hello world"
// Doesn't match: "hi there"
// Match a digit:

// Pattern: /\d/
// Matches: "I have 5 apples"
// Doesn't match: "No numbers here"
// Match multiple occurrences of a character:

// Pattern: /a+/
// Matches: "aaabb"
// Doesn't match: "bcd"
// Match characters within a specific range:

// Pattern: /[a-z]/
// Matches: "hello"
// Doesn't match: "123"
// Match either of two expressions:

// Pattern: /cat|dog/
// Matches: "I have a cat"
// Doesn't match: "I have a bird"