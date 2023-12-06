"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to Fantasy Wheels ^_^");
//get json file in question
//import jsonCars from "../../json/cars.json";
//import {jsonCars} from "../../json/cars.json";
const jsonCars = __importStar(require("../../json/cars.json"));
for (const car of jsonCars) {
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
