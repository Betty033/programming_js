/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temp) {

    let promptInput = Number(prompt('give me a number'));
    console.log(typeof promptInput);

    if (temp < 15) {

        console.log('wear a jacket');
    }
    else {

        console.log('you do not have to wear a jacket');
    }
}

getTemperature(Number(prompt('What is the current temperature?')));

//let example = prompt('what is the temp')
//let number = Number(example);

