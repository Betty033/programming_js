"use strict";

const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector("#searchForm");
const cars = [];

class Car {
    constructor(licence, maker, model, owner, price, color) {
        this.licence = licence;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}
const addCar = (e) => {
    e.preventDefault();

    const licence = document.getElementById("licence").value;
    const maker = document.getElementById("maker").value;
    const model = document.getElementById("model").value;
    const owner = document.getElementById("owner").value;
    const price = document.getElementById("price").value;
    const color = document.getElementById("color").value;

    const newCar = new Car(licence, maker, model, owner, price, color);
    cars.push(newCar);

    displayTable();

    //console.table(cars);

    addCarForm.reset();
};

const displayTable = () => {
    const table = document.querySelector("#carsTable");

    table.innerHTML = table.rows[0].innerHTML;

    cars.forEach((car) => {
        const row = table.insertRow(-1);
        Object.values(car).forEach((text) => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        });
    });
};

const searchCar = (e) => {
    e.preventDefault();
    const licenceQuery = document
        .querySelector("#search")
        .value.trim()
        .toLowerCase();

    const display = document.querySelector("#searchResult");
    if (!licenceQuery) {
        display.textContent = 'please enter a licence plate to search';
        return;
    }

    try {

        const result = cars.find(({ licence }) => licence.toLowerCase().includes(licenceQuery));

        display.textContent = result
            ? `Found ${result.maker}, ${result.model}, owned by ${result.owner}`
            : 'No car with that licence';
    } catch (error) {
        console.error('Error Occured:', error);
        display.textContent = 'Somrthing went wrong';
    }
    //display.textContent = licenceQuery;

    console.log(licenceQuery);
};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);

//event listenrer to submit button without using any js in html
