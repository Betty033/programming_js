/*

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

/*
function changetext() {
    const text = document.getElementById('content');
    //text.innerHTML = 'Hello World';
    text.textContent = 'Hello World';
    console.log(text.textContent);
}
*/
//text.addEventListener('click', changetext);


const textchanger = () => {
    const textplaceholder = document.getElementById('content');
    textplaceholder.textContent = 'Hello world';
};
console.log(textplaceholder.textContent)
