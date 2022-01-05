

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