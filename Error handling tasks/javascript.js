


// ///////////////    task 1   /////////////////



// function generateRangeError() {
//     try {
//         let arr = Array(-1); 
//     } catch (error) {
//         console.error('RangeError caught:', error.message);
//     }
// }
// generateRangeError();


// ///////////////    task 2   ////////////////


// function generateReferenceError() {
//     try {
//         console.log(undefinedVariable); 
//     } catch (error) {
//         console.error('ReferenceError caught:', error.message);
//     }
// }
// generateReferenceError();


// //////////////     task 3   ////////////////


// function generateURIError() {
//     try {
//         decodeURIComponent('%'); 
//     } catch (error) {
//         console.error('URIError caught:', error.message);
//     }
// }
// generateURIError();


/////////////////    task 4   ////////////////


// function generateTypeError() {
//     try {
//         null.f(); 
//     } catch (error) {
//         console.error('TypeError caught:', error.message);
//     }
// }
// generateTypeError();







/////////////////    task 6   ////////////////

function squareNumber(num) {
    try {
        if (typeof num !== 'number') {
            throw new Error('The argument is not a number.');
        }
        return num * num;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
console.log(squareNumber(4)); 
console.log(squareNumber('a'));










