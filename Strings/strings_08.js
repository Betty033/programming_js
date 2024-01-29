/**
Refine the sayHello function so that it incorporates the tempname variable into a greeting string, forming 'Hello name'.

 */
function sayHello(name) {

    return 'Hello'+' '+ name;
    return `Hello ${name}` // templet literals also can be used for calcualtion like ${2024-year} is your age 
}

// Sample usage - do not modify
console.log(sayHello('Alex')); // "Hello Alex"
console.log(sayHello('Sam')); // "Hello Sam"