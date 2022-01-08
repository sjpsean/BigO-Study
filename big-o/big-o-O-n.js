const nemo = ['nemo'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
//    console.log(t0);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO');
        }
    }
}

findNemo(large);  // O(n) --> Linear Time


function funChallenge(input) {
    let a = 10;
    a = 50 + 3;

    for (let i = 0; i < input.length; i++) {
        anotherFunction();  
        // don't need to consider Big-O for this function 
        // I just need to know that it executes n times because it is in the for loop.
        let stranger = true;
        a++;
    }
    return a;
}

funChallenge(large); // 