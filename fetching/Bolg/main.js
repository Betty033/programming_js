/*const fetchdata = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {displayData(json)
            console.log(json)});

};*/
const fetchdata = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(` Error status: ${response.status}`)
        }
        const data = await response.json();
        displayData(data);

    } catch (error) {
        console.error(error);

    }
}
fetchdata();

const displayData = (data) => {

    const container = document.querySelector('#postsContainer');
    data.forEach((user) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = ` 

        <h2> ${user.name}</h2>
        <p> <span>Email:</span>
        ${user.email}</p>   
        <p>City: ${user.address.city}</p>
        <p> Phone: ${user.phone}</p>
        <p>Company: ${user.company.name}</p>
        `;
        container.appendChild(postElement);
    });
};