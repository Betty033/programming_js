/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy. 
the user will input a yes-or-no question, and the program will output a random 
response from the 8-Ball. Implement the program using conditional statements to 
select and display one of several predefined responses.*/


function magic_8_ball(answer) {

    answer = Math.floor((Math.random() * 8) + 1);
    switch (answer) {

        case 1:
            console.log('Yes, definitely');
            break;

        case 2:

            console.log('Outlook not so good ');
            break;
        case 3:

            console.log('Shake again');
            break;
        case 4:

            console.log('Ask again');
            break;
        case 5:

            console.log('Do not count on it');
            break;
        case 6:

            console.log('With out a doubt');
            break;
        case 7:

            console.log('My sources say no');
            break;
        case 8:

            console.log('It is certain');
            break;
        default:

            console.log('invalid input!');
            break;



    }
}
magic_8_ball(prompt('Ask me a question and find out your answer!!!'));