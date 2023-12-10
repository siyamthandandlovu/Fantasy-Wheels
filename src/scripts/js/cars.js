
console.log('Welcome to Fantasy Wheels ^_^');
//get json file in question
//import jsonCars from '../../json/cars.json';
//const jsonCars = JSON.parse(require('fs').readFileSync('../../json/cars.json', 'utf8'));


jsonCars = [
    {
      "id":1,
        "src": "src/images/12-mercedes-benz-vehicles-concept-cars-vision-avtr-3400x1440.png",
        "Car Brand": "Mercedes-Benz",
        "Model": "VISION AVTR",
        "Year": 2122,
        "Number of Seats": 2,
        "Car Features": {
            "carFeats": [
                "Carbon Emission Free",
                "Organic Battery Technology",
                "Exceptional fast charging capability",
                "Intuitive control",
                "Bionic formal language"
            ]
        },
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R67 089 000"
    },
    {
      "id":2,
        "src": "src/images/The Bumble Bee car.jpg",
        "Car Brand": "Chevrolet",
        "Model": "The Bumble",
        "Year": 2013,
        "Number of Seats": 4,
        "carFeats": [
            "Car Communication",
            "Navigation system",
            "Bluetooth",
            "Remote start"
        ],
        "Gearshift": "Auto",
        "Cost": "R1 697 600",
        "Status": "In Production",
        "Best Use": "Daily Transport"
    },
    {
      "id":3,
        "src": "src/images/Dumb and Dumber Car 1436991864-0876ea6aaed85d846d5f06daf1fb12af.jpg",
        "Car Brand": "Mutt Cuts",
        "Model": "Bambridge 68",
        "Year": 2308,
        "Number of Seats": 6,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Best Use": "Daily Transport"
    },
    {
      "id":4,
        "src": "src/images/Dumb and Dumber Car 1436991864-0876ea6aaed85d846d5f06daf1fb12af.jpg",
        "Car Brand": "Mutt Cuts",
        "Model": "Bambridge 68",
        "Year": 2308,
        "Number of Seats": 6,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Best Use": "Daily Transport"
    },
    {
      "id":5,
        "src": "src/images/westworld lux suv victor-martinez-veh-luxsuv-05-v3-190206-vm.jpg",
        "Car Brand": "Delos",
        "Model": "Bambridge 68",
        "Year": 2308,
        "Number of Seats": 6,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Best Use": "Daily Transport"
    },
    {
      "id":6,
        "src": "src/images/included camera shot of batfleck mercedes f751f8c-mercedes-justiceleague-08.jpg",
        "Car Brand": "Mercedes-Benz",
        "Model": "The Batfleck",
        "Year": 2041,
        "Number of Seats": 2,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R70 951 000"
    },
    {
      "id":7,
        "src": "src/images/Fast furious Letty Chevrolet.jpg",
        "Car Brand": "Chevrolet",
        "Model": "Letty",
        "Year": 2017,
        "Number of Seats": 2,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R1 023 000"
    },
    {
      "id":8,
        "src": "src/images/Mercedes-Benz-G-Class-Right-Front-Three-Quarter-58261.jpg",
        "Car Brand": "Mercedes-Benz",
        "Model": "G 63 AMG",
        "Year": 2018,
        "Number of Seats": 4,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R50 000 000"
    },
    {
      "id":9,
        "src": "src/images/westworldubercarvictor-martinez-veh-rideshare-frontperspective-v01-190208-vm.jpg",
        "Car Brand": "Delos",
        "Model": "LA 48 Rideshare",
        "Year": 2308,
        "Number of Seats": 9,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R960 000 000"
    },
    {
      "id":10,
        "src": "src/images/furious-charger.jpg",
        "Car Brand": "Chevrolet",
        "Model": "La Familia X",
        "Year": 2008,
        "Number of Seats": 2,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R50 000 000"
    },
    {
      "id":11,
        "src": "src/images/bmw-m4-speed-yellow-03.jpg",
        "Car Brand": "BMW",
        "Model": "M4",
        "Year": 2021,
        "Number of Seats": 4,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R1 273 400"
    },
    {
      "id":12,
        "src": "src/images/scooby doo van 2087aa40f93_hd_1972-z-movie-car-scooby-doo.jpg",
        "Car Brand": "Mystery Machine",
        "Model": "Scooby Van 2000",
        "Year": 2002,
        "Number of Seats": 6,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Manual",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R1 000 000"
    },
    {
      "id":13,
        "src": "src/images/Bale mobile 1.jpg",
        "Car Brand": "Bruce Wayne Enterprises",
        "Model": "Dark Knight II",
        "Year": 2008,
        "Number of Seats": 2,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R50 000 000"
    },
    {
      "id":14,
        "src": "src/images/bmw_x3_2017_07.jpg",
        "Car Brand": "BMW",
        "Model": "X3 SUV",
        "Year": 2022,
        "Number of Seats": 4,
        "carFeats": [
            "Backup camera",
            "Navigation system",
            "Bluetooth",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R1 000 000"
    }
  ];

console.log(jsonCars);
