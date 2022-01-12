// Create a function that reverses a string:
// 'any strings 123' should be: '321 sgnirts yna'

function reverseString(str) {
    // check input
    if (!str || typeof str !== 'string') return false;

    let array = new Array();
    for (let i = str.length - 1; i >= 0; i--) {
        array.push(str[i]);
    }
    return array.join('');
}


console.log(reverseString("sungjin park"));
console.log(reverseString("fu"));
console.log(reverseString(""));
console.log(reverseString(null));
console.log(reverseString(12));


// built-in method
function reverseStringSimple(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStringSimple('sungjin park'));

// Or.. 1
console.log('something'.split('').reverse().join(''));