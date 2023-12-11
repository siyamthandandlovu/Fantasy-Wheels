
console.log('Welcome to Fantasy Wheels ^_^');
//get json file in question
//import jsonCars from '../../json/cars.json';
//const jsonCars = JSON.parse(require('fs').readFileSync('../../json/cars.json', 'utf8'));


jsonCars = [
    {
        "id": 1,
        "src": "src/images/12-mercedes-benz-vehicles-concept-cars-vision-avtr-3400x1440.png",
        "Car Brand": "Mercedes-Benz",
        "Model": "VISION AVTR",
        "Year": 2122,
        "Number of Seats": 2,
        "carFeats": [
            "Carbon Emission Free",
            "Organic Battery Technology",
            "Exceptional fast charging capability",
            "Intuitive control",
            "Bionic formal language"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Best Use": "Daily Transport",
        "Cost": "R67 089 000"
    },
    {
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
        "id": 9,
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
        "id": 10,
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
        "id": 11,
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
        "id": 12,
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
        "id": 13,
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
        "id": 14,
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

//console.log(jsonCars);

//Start looping through jsonCars
//create a boot strap modal with a button, 
//where each button has a name with the same ID as the car

// Assuming you have the JSON data stored in a variable called 'jsonData'

// Create a function to generate the HTML for the Bootstrap card
function createCard(carData) {
    // Create the card element
    const card = document.createElement('div');
    //card.classList.add('card');
    card.classList.add('col-sm-6' , 'carCard' , 'my-4');


    //Inner card div
    const cardInner = document.createElement('div');
    cardInner.classList.add('card');


    // Create the image element
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = carData.src;
    cardInner.appendChild(image);

    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //Create Heading


    // Create the car brand and model text
    const carHeading = document.createElement('h5');
    carHeading.classList.add('card-title');
    carHeading.textContent = `${carData['Car Brand']} ${carData.Model}`;
    cardBody.appendChild(carHeading);

    // Create the brand text
    const brandText = document.createElement('p');
    brandText.classList.add('card-text');
    brandText.textContent = carData['Brand'];
    brandText.textContent = `Car Features: ${carData.carFeats.join(", ")}`
    cardBody.appendChild(brandText);


    //Car features list
    const carDetailList = document.createElement('ul');
    carDetailList.classList.add('list-group');
    carDetailList.classList.add('list-group-flush');


    const carListItem1 = document.createElement('li');
    carListItem1.classList.add('list-group-item');
    carListItem1.innerHTML = `Status : ${carData['Status']}`;

    const carListItem2 = document.createElement('li');
    carListItem2.classList.add('list-group-item');
    carListItem2.innerHTML = `Cost : ${carData['Cost']}`;

    const carListItem3 = document.createElement('li');
    carListItem3.classList.add('list-group-item');
    carListItem3.innerHTML = `Year : ${carData['Year']}`;


    carDetailList.appendChild(carListItem1);
    carDetailList.appendChild(carListItem2);
    carDetailList.appendChild(carListItem3);

    //create button that will popup a bootstrap modal
    const btnPopupModal = document.createElement('button');
    btnPopupModal.classList.add('btn' , 'btn-dark');
    //btnPopupModal.classList.add('btn-');
    btnPopupModal.title = "See More";
    btnPopupModal.innerHTML = "See More";
    btnPopupModal.name = carData['id'];
    btnPopupModal.dataset.bsToggle = 'modal';
    btnPopupModal.dataset.bsTarget = '#modalCarInfo';

    btnPopupModal.onclick = (popupCarInfoModal(this.name));
    //modalCarInfo
    //data-bs-toggle="modal" data-bs-target="#exampleModal"
    // btnPopupModal.data-bs-toggle='modal';
    // btnPopupModal.data-bs-target='modalCarInfo';

    //console.log(btnPopupModal.onclick);
//cardBody.appendChild(btnPopupModal);

    // Append the card body to the card
    cardInner.appendChild(cardBody);
    cardInner.appendChild(carDetailList);
    cardInner.appendChild(btnPopupModal);



    card.appendChild(cardInner);
    return card;
}

// Assuming you have a container element with an id of 'divCarCards' where you want to append the cards
const divCarCards = document.getElementById('divCarCards');

// Iterate over each car data element and create a card for each one
jsonCars.forEach(carData => {
    const card = createCard(carData);
    divCarCards.appendChild(card);
});











// Create a function to generate the Bootstrap modal
function popupCarInfoModal(carID) {
    // Get the modal element
    const modal = document.getElementById('modalCarInfo');
    modal.classList.add('modal');


 /* 
    // Create the modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
   // Create the modal title
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = `${carData['Car Brand']} ${carData.Model}`;
    modalHeader.appendChild(modalTitle);

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.innerHTML = '&times;';
    modalHeader.appendChild(closeButton);

    modalContent.appendChild(modalHeader);

    // Create the modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Populate the modal body with the car data
    Object.entries(carData).forEach(([key, value]) => {
        const row = document.createElement('div');
        row.classList.add('row');

        const label = document.createElement('div');
        label.classList.add('col-4', 'font-weight-bold');
        label.textContent = key;
        row.appendChild(label);

        const content = document.createElement('div');
        content.classList.add('col-8');
        content.textContent = value;
        row.appendChild(content);

        modalBody.appendChild(row);
    }); */

   // modalContent.appendChild(modalBody);

    return modal;
}
















// Iterate over each car data element
jsonCars.forEach(carData => {
    const src = carData.src;
    const carBrand = carData["Car Brand"];
    const model = carData.Model;
    const year = carData.Year;
    const numberOfSeats = carData["Number of Seats"];
    const carFeats = carData.carFeats;
    const gearshift = carData.Gearshift;
    const status = carData.Status;
    const bestUse = carData["Best Use"];
    const cost = carData.Cost;

    // Do whatever you want with the extracted data
/*     console.log(`Source: ${src}`);
    console.log(`Car Brand: ${carBrand}`);
    console.log(`Model: ${model}`);
    console.log(`Year: ${year}`);
    console.log(`Number of Seats: ${numberOfSeats}`);
    console.log(`Car Features: ${carFeats.join(", ")}`);
    console.log(`Gearshift: ${gearshift}`);
    console.log(`Status: ${status}`);
    console.log(`Best Use: ${bestUse}`);
    console.log(`Cost: ${cost}`); */
});
