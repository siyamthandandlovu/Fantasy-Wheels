
console.log("Welcome to Fantasy Wheels ^_^");

//get json file in question
//import jsonCars from "../../json/cars.json";
//import {jsonCars} from "../../json/cars.json";
import * as jsonCars  from "../../json/cars.json";
//loop through every object in the json cars object
/* const objectCount = Object.keys(jsonCars).length;
console.log(`Number of objects in the JSON file: ${objectCount}`); */
/* for (let index = 0; index < jsonCars.length; index++) {
    const element = jsonCars[index];
    
} */

interface Car {
    imgCars: {
      src: string;
    };
    carDesc: {
      [key: string]: any;
    };
  }

  for (const car of jsonCars){
    
  }
/* 

for (const key in jsonCars) {
  if (jsonCars.hasOwnProperty(key)) {
    const car: Car = jsonCars[key];
    // Access the properties of the car object
    console.log("Car Brand:", car.carDesc["Car Brand"]);
    console.log("Model:", car.carDesc.Model);
    console.log("Year:", car.carDesc.Year);
    console.log("Number of Seats:", car.carDesc["Number of Seats"]);
    // Access the car features array
    console.log("Car Features:");
    for (const feat of car.carDesc["Car Features"].carFeats) {
      console.log("- " + feat);
    }
    console.log("Gearshift:", car.carDesc.Gearshift);
    console.log("Cost:", car.carDesc.Cost);
    console.log("Status:", car.carDesc.Status);
    console.log("Best Use:", car.carDesc["Best Use"]);
  }
} */
//loop through all 
