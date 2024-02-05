/**
Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
 */
// == is it equal
// === is it a equal and it check it´s type
function evenOrOdd(number) {

    
    if (number% 2=== 0){
        return 'even';
    } else{

        return 'odd';
    }
}

// Sample usage - do not modify
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"