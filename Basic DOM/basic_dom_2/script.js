/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const nameText = document.querySelector('#fruitList');
const nameInput = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitBtn')

function addName() {

    let inputTextList = document.createElement('li');
    const inputFruit = document.getElementById('fruitList');

    if (nameInput.value !== "") {
        inputTextList.append(nameInput.value.trim());

        inputFruit.appendChild(inputTextList);

        document.getElementById('fruitInput').value = '';  // nameInput.value='';
    }
    else {
        alert("write a fruit name");
    }
}
button.addEventListener('click', addName);

