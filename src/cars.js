"use strict";
console.log('Welcome to Fantasy Wheels ^_^');
//get json file in question
//import jsonCars from '../../json/cars.json';
const jsonCars = JSON.parse(require('fs').readFileSync('../../json/cars.json', 'utf8'));
console.log(jsonCars);
