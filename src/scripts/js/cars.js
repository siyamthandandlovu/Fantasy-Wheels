console.log('Welcome to Fantasy Wheels ^_^');

jsonCars = [
    {
        "id": 1,
        "src": "https://automotiva.com.ar/wp-content/uploads/2020/01/Mercedes-Benz_Vision_AVTR-3.jpg",
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
        "Series/Film": "Avatar x Mercedes",
        "Cost": "R107 089 000"
    },
    {
        "id": 2,
        "src": "https://wallpapercave.com/wp/wp1902563.jpg",
        "Car Brand": "Chevrolet",
        "Model": "Bumblebee B127",
        "Year": 2013,
        "Number of Seats": 4,
        "carFeats": [
            "Voice Control Radio",
            "Auto Pilot",
            "Ammunition",
            "Car Transformation",
            "Fuel Effecient",
            "Undersea Adaptability",
            "Defense Mode",
            "Car Cloning"
        ],
        "Gearshift": "Auto",
        "Cost": "R100 697 600",
        "Status": "In Production",
        "Series/Film": "Transformers"
    },
    {
        "id": 3,
        "src": "https://manilashaker.com/wp-content/uploads/2016/02/mutt-cutts-dog-mobile-image-philippines-.jpg",
        "Car Brand": "Mutt Cuts",
        "Model": "Bambridge 68",
        "Year": 1995,
        "Number of Seats": 6,
        "carFeats": [
            "Shaggy Dog Fur Exterior",
            "Convertible Top Made of Fake Fur",
            "Tongue Lolling Out of the Front Grill",
            "Dog Tail on the Rear",
            "Custom Paw Print Hubcaps",
            "Mobile Dog Grooming Equipment Inside",
            "Interior Upholstered with Faux Dog Fur",
            "Sloppy Dog Bowl in the Back",
            "Horn That Plays a Howling Dog Sound",
            "Comically Low Fuel Efficiency",
            "Good-Natured Ridiculousness"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Series/Film": "Dumb & Dumber"
    },
    {
        "id": 4,
        "src": "https://cdn1.mecum.com/auctions/sc0521/sc0521-462460/images/25-1617110956084.jpg?1618886641000",
        "Car Brand": "DC",
        "Model": "Adam West Bat Mobile",
        "Year": 1970,
        "Number of Seats": 6,
        "carFeats": [
            "Dual Red Batphone with Direct Line to Commissioner Gordon",
            "Emergency Bat-Turn Lever for 180-Degree Turns",
            "Bat-Ray Projector",
            "Oil Slick Dispensers",
            "Smoke Screen Generator",
            "Detect-a-Scope",
            "Bat-Emergency Parachute Deployer",
            "Bat-Beam Antenna",
            "Bat-Computer with Crime Lab Analysis",
            "Remote Batcomputer Activator",
            "Anti-Fire Activator"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Series/Film": "Batman & Robin"
    },
    {
        "id": 5,
        "src": "https://cdna.artstation.com/p/assets/images/images/026/766/102/small/victor-martinez-veh-luxsuv-05-v3-190206-vm.jpg?1589661535",
        "Car Brand": "Delos",
        "Model": "Maverick",
        "Year": 2308,
        "Number of Seats": 6,
        "carFeats": [
            "Autonomous Driving Capability",
            "Augmented Reality Windshield",
            "Self-Healing Body Panels",
            "Biometric Driver Identification",
            "Interactive Holographic Controls",
            "Advanced Artificial Intelligence Assistant",
            "Energy-Dense and Rapid-Charging Batteries",
            "Shape-Shifting Body for Aerodynamics",
            "Brain-Computer Interface for Controls",
            "Predictive Maintenance System",
            "360-Degree Exterior Cameras"
        ],
        "Gearshift": "Auto",
        "Cost": "R780 000 000",
        "Status": "In Production",
        "Series/Film": "Westworld"
    },
    {
        "id": 6,
        "src": "https://acnews.blob.core.windows.net/imgnews/large/NAZ_1cea2c1eef6d4b3ebe5c24a5037306f1.jpg",
        "Car Brand": "Mercedes-Benz",
        "Model": "The Batfleck",
        "Year": 2021,
        "Number of Seats": 2,
        "carFeats": [
            "Carbon Ceramic Brake System",
            "Electronic Stability Control",
            "Variable Valve Timing",
            "Multifunction Steering Wheel",
            "Alcantara or Carbon Fiber Interior Accents",
            "Innovative Head-Up Display",
            "Performance Data Recorder",
            "Automated Manual Transmission",
            "Advanced Driver Assistance Systems"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "Justice League : The Synder Cut",
        "Cost": "R70 951 000"
    },
    {
        "id": 7,
        "src": "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2014/08/19010021/65-Corvette-23-copy-1200x800.jpg",
        "Car Brand": "Jenson",
        "Model": "Interceptor",
        "Year": 1973,
        "Number of Seats": 2,
        "carFeats": [
            "Launch Control",
            "Customizable Driving Modes",
            "Aerodynamic Spoiler",
            "Rear-Wheel or All-Wheel Drive",
            "Dual-Clutch Transmission",
            "Remote start",
            "Blind spot monitoring",
            "Carbon Fiber Construction",
            "Advanced Suspension System"

        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "Fast & Furious",
        "Cost": "R1 023 000"
    },
    {
        "id": 8,
        "src": "https://live.staticflickr.com/1730/41762919835_9c37db6749_b.jpg",
        "Car Brand": "Lamborghini",
        "Model": "Hurucan",
        "Year": 2015,
        "Number of Seats": 4,
        "carFeats": [
            "Nitrous Oxide Boost System",
            "Custom Racing Suspension",
            "Aerodynamic Body Kit",
            "High-Performance Exhaust System",
            "Remote start",
            "Blind spot monitoring"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "Fast & Furious",
        "Cost": "R50 000 000"
    },
    {
        "id": 9,
        "src": "https://thegadgetflow.com/wp-content/uploads/2019/10/Biomega-EV-Battery-Powered-Urban-Vehicle-05-1200x800.jpg",
        "Car Brand": "Delos",
        "Model": "LA 48 Rideshare",
        "Year": 2308,
        "Number of Seats": 9,
        "carFeats": [
            "360-Degree Exterior Cameras",
            "Embedded Health Monitoring Sensors",
            "Smart Traffic Integration for Optimal Routing",
            "Advanced Vehicle-to-Everything (V2X) Communication",
            "Ultra-Lightweight Nanomaterial Construction",
            "Transparent OLED Displays for Windows",
            "Energy-Harvesting Body Panels",
            "Integrated Augmented Reality Navigation",
            "Biometric Passenger Recognition and Customization",
            "Advanced Vehicle-to-Grid (V2G) Technology"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "West World",
        "Cost": "R890 000 000"
    },
    {
        "id": 10,
        "src": "https://b.fssta.com/uploads/2017/03/032717_motor_fast_furious.vresize.1200.630.high.24.jpg",
        "Car Brand": "Mustang",
        "Model": "La Familia X",
        "Year": 2008,
        "Number of Seats": 2,
        "carFeats": [
            "High-Performance Engine",
            "Exotic Design",
            "Carbon Fiber Construction",
            "Bullet Proof Glass",
            "Navigation system",
            "Electric Grid Control",
            "Remote start",
            "Fuel Effeciency",
            "Super Charger Kit",
            "Engine Cooling",
            "V-8 Powered",
            "LS3 Engine",
            "Brembo Brakes",
            "Luxurious Interior",
            "Launch Control",
            "Customizable Driving Modes",
            "Aerodynamic Spoiler",
            "Rear-Wheel or All-Wheel Drive",
            "Dual-Clutch Transmission",
            "Exclusive Badge and Branding"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "Fast & Furious",
        "Cost": "R55 000 000"
    },
    {
        "id": 11,
        "src": "https://www.driving.co.uk/wp-content/uploads/sites/5/2017/06/Ansel-Elgort-MAMM-2.jpg?resize=1024,638",
        "Car Brand": "Subaru",
        "Model": "Impreza WRX",
        "Year": 2021,
        "Number of Seats": 4,
        "carFeats": [
            "Turbocharged Engine for High Performance",
            "Quick Acceleration and Agile Handling",
            "All-Wheel Drive for Enhanced Traction",
            "Sporty and Aerodynamic Design",
            "Compact Size for Maneuverability in Urban Environments",
            "Responsive Steering and Suspension",
            "Performance Brakes for Effective Stopping",
            "Manual Transmission for Driver Control",
            "Comfortable and Supportive Seats",
            "High-Quality Audio System (as seen in the film)",
            "Subtle Exterior for Low Profile",
            "Red Exterior Color for Style and Visibility"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "Baby Driver",
        "Cost": "R1 273 400"
    },
    {
        "id": 12,
        "src": "https://dealeraccelerate-all.s3.amazonaws.com/ideal/images/3/5/7/357/22087aa40f93_hd_1972-z-movie-car-scooby-doo.jpg",
        "Car Brand": "Mystery Machine",
        "Model": "Scooby Van 2000",
        "Year": 2002,
        "Number of Seats": 6,
        "carFeats": [
            "Sliding Side Door for Easy Entry and Exit",
            "Spacious Interior for the Whole Gang",
            "Bench Seat in the Back for Additional Passengers",
            "Large Steering Wheel",
            "Surfboard Rack on the Roof (varies in adaptations)",
            "Multiple Windows for Visibility",
            "Custom License Plate with 'MYS-1' (varies in adaptations)",
            "Comedic Honking Horn (occasionally featured in some adaptations)"
        ],
        "Gearshift": "Manual",
        "Status": "In Production",
        "Series/Film": "Scooby Doo",
        "Cost": "R1 000 000"
    },
    {
        "id": 13,
        "src": "https://i0.wp.com/batman-news.com/wp-content/uploads/2014/09/DarkKnight_Tumbler_4WheelPartsCrop.jpg?fit=1200%2C675&quality=80&strip=info&ssl=1",
        "Car Brand": "Bruce Wayne Enterprises",
        "Model": "Dark Knight II Tumbler",
        "Year": 2008,
        "Number of Seats": 2,
        "carFeats": [
            "Jet Engine",
            "Bullet Proof Exterior",
            "Motorcycle Transformation",
            "Missile Deployment",
            "Night Vision Windshield",
            "Adaptive Camouflage for Various Environments",
            "AI-Piloting System with Combat Strategies"
        ],
        "Gearshift": "Auto",
        "Status": "Available",
        "Series/Film": "The Dark Knight",
        "Cost": "R780 400 000"
    },
    {
        "id": 14,
        "src": "https://i.pinimg.com/originals/4c/ff/15/4cff15a86e5d290fd5c384d8f81b9723.jpg",
        "Car Brand": "Audi",
        "Model": "A8 W12",
        "Year": 2002,
        "Number of Seats": 4,
        "carFeats": [
            "Premium Sound System",
            "Automatic Parking System",
            "Subtle Exterior Design for Low Profile",
            "Advanced Anti-Hijacking Measures",
            "Night Vision Display",
            "Retractable Steering Wheel for Quick Exits",
            "Innovative Tire Puncture System"
        ],
        "Gearshift": "Auto",
        "Status": "In Production",
        "Series/Film": "The Transporter",
        "Cost": "R1 000 000"
    },
    {
        "id": 15,
        "src": "https://c1.staticflickr.com/7/6005/5960386635_f3b5406c57_b.jpg",
        "Car Brand": "Bean",
        "Model": " The Teddy",
        "Year": 1972,
        "Number of Seats": 2,
        "carFeats": [
            "Single Driver's Side Windshield Wiper",
            "External Latch Door Handles",
            "Flip-Top Fuel Cap on the Rear",
            "Mini Light Alloy Wheels",
            "Mini 1000 Decal on the Rear",
            "Compact and Nimble Design for Urban Maneuverability",
            "Straightforward and No-Frills Interior"
        ],
        "Gearshift": "Manual",
        "Status": "Available",
        "Series/Film": "Mr Bean",
        "Cost": "R1 000 000"
    },
    {
        "id": 16,
        "src": "https://www.gannett-cdn.com/-mm-/8d220fe22b97164c3a0b025b4a321e45d8da06ac/c=0-459-2448-1836/local/-/media/USATODAY/USATODAY/2014/06/16/1402937666000-OptimusPrimecorrect.jpg?width=2448&height=1377&fit=crop&format=pjpg&auto=webp",
        "Car Brand": "Transformers",
        "Model": "Optimus Prime",
        "Year": 1980,
        "Number of Seats": 2,
        "carFeats": [
            "Transforming Mechanism",
            "Ion Blaster Weapon System",
            "Advanced Cybertronian Technology",
            "Powerful Cybertronian Alloy Construction",
            "Advanced Laser and Plasma Cannons",
            "Optical Sensors and Scanning Systems",
            "Jetpack or Rocket Boosters (varies in adaptations)",
            "Energon Sword or Battle Axe"
        ],
        "Gearshift": "Manual",
        "Status": "Available",
        "Series/Film": "Transformers",
        "Cost": "R1 000 000"
    },
    {
        "id": 17,
        "src": "https://wallpaperaccess.com/full/3908257.jpg",
        "Car Brand": "DC",
        "Model": "Batman Motorcycle",
        "Year": 2010,
        "Number of Seats": 2,
        "carFeats": [
            "Detachable Escape Pods",
            "Customizable Utility Belt Integration",
            "Emergency Medical Kit",
            "Adaptive Cloaking Technology",
            "Voice-Activated Commands",
            "Non-Lethal Defensive Measures",
            "Self-Destruct Mechanism",
            "Biometric Security System",
            "Dual-Mode Wheels (Street and Off-Road)",
            "Emergency Communication Beacon",
            "Bat Symbol Spotlight"
        ],
        "Gearshift": "Manual",
        "Status": "Available",
        "Series/Film": "Dark Knight II",
        "Cost": "R1 000 000"
    },
    {
        "id": 18,
        "src": "https://i.pinimg.com/originals/31/02/09/3102091dde3dc34e341876f6051bf41e.jpg",
        "Car Brand": "DC",
        "Model": "Diana Invisible Jet",
        "Year": 1980,
        "Number of Seats": 28,
        "carFeats": [
            "Invisibility Cloaking Technology",
            "Advanced Amazonian Armor",
            "Invisible to Radar",
            "Supersonic Flight Capability",
            "Deflector Shields",
            "Stealth Navigation System",
            "Integrated Lasso of Truth Compartment",
            "Self-Repairing Nanotech Hull",
            "Enhanced Maneuverability"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "Wonder Woman",
        "Cost": "R1 000 000"
    },
    {
        "id": 19,
        "src": "https://th.bing.com/th/id/R.8712ea8e25d8c4a3055978b4a971f679?rik=5khGraBdeh5JQg&pid=ImgRaw&r=0",
        "Car Brand": "Marvel",
        "Model": "Quinjet",
        "Year": 2008,
        "Number of Seats": 8,
        "carFeats": [
            "Brain-Computer Interface for Controls",
            "Predictive Maintenance System",
            "360-Degree Exterior Cameras",
            "Embedded Health Monitoring Sensors",
            "Quantum Encryption for Data Security",
            "Adaptive Morphing Seats for Comfort",
            "Dynamic Energy Recovery Suspension System",
            "Integrated Drone Docking Station",
            "3D Printing Onboard for Emergency Repairs",
            "Invisible Nanotech Paint for Customizable Colors",
            "Bioluminescent Exterior Lighting for Visibility"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "The Avengers",
        "Cost": "R499 000 000"
    },
    {
        "id": 20,
        "src": "https://images.hdqwalls.com/download/back-to-the-future-movie-li-3840x2160.jpg",
        "Car Brand": "Porsche",
        "Model": "DeLorean DMC -12",
        "Year": 1981,
        "Number of Seats": 8,
        "carFeats": [
            "Time Travel",
            "V-8 Engine",
            "Remote start",
            "Flight",
            "Flux Capacitor for Time Travel",
            "Gull-Wing Doors",
            "Advanced In-Car Entertainment System",
            "Adaptive Cruise Control",
            "Energy-Efficient Solar Panel Roof",
            "Advanced Shape Memory Alloys for Structural Adaptability",
            "Personalized AI Mood Enhancement System",
            "Automated In-Car Wellness and Fitness Center",
            "Instantaneous In-Car Augmented Reality Cinema",
            "DNA-Based Personalized Climate Control"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "Back to the Future",
        "Cost": "R1 000 000"
    },
    {
        "id": 20,
        "src": "https://i.pinimg.com/originals/14/24/f6/1424f64327f2957ae55453d6157d0417.jpg",
        "Car Brand": "Mustang",
        "Model": "John Wick",
        "Year": 2010,
        "Number of Seats": 8,
        "carFeats": [
            "Bulletproof Windows",
            "Hidden Weapon Compartments",
            "Tactical Navigation System",
            "Adaptive Suspension System",
            "Remote start"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "John Wick",
        "Cost": "R1 000 000"
    },
    {
        "id": 21,
        "src": "https://th.bing.com/th/id/OIP.N4hmcULHVF_nFO_OTymaKAHaEo?rs=1&pid=ImgDetMain",
        "Car Brand": "Cadillac",
        "Model": "GhostBusters Miller Meteor",
        "Year": 1859,
        "Number of Seats": 8,
        "carFeats": [
            "Ectoplasmic Sensor Array",
            "Proton Pack Charging Dock",
            "Ghost Containment System",
            "Siren and Emergency Lights"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "Ghost Busters",
        "Cost": "R1 000 000"
    },
    {
        "id": 21,
        "src": "src/images/ghost-rider-car-full.jpg",
        "Car Brand": "Cadillac",
        "Model": "GhostRider",
        "Year": 1859,
        "Number of Seats": 8,
        "carFeats": [
            "Ectoplasmic Sensor Array",
            "Proton Pack Charging Dock",
            "Ghost Containment System",
            "Siren and Emergency Lights"
        ],
        "Gearshift": "Automatic",
        "Status": "Retired",
        "Series/Film": "Ghost Rider",
        "Cost": "R81 000 000"
    }
];
// Assuming you have the JSON data stored in a variable called 'jsonData'

// Create a function to generate the HTML for the Bootstrap card
function createCard(carData) {
    // Create the card element
    const card = document.createElement('div');
    //card.classList.add('card');
    card.classList.add('col-sm-6', 'carCard', 'my-4', 'card-container');


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



    // Create the car brand and model text
    const carHeading = document.createElement('h4');
    carHeading.classList.add('card-title', 'fw-bold');
    carHeading.textContent = `${carData['Car Brand']} ${carData.Model}`;
    cardBody.appendChild(carHeading);

    // Create the brand text
    const featuresText = document.createElement('p');
    featuresText.classList.add('card-text');
    featuresText.textContent = `Car Features: ${carData.carFeats.join(", ")}`
    cardBody.appendChild(featuresText);


    //Car features list
    const carDetailList = document.createElement('ul');
    carDetailList.classList.add('list-group', 'list-group-flush');


    const carListItem1 = document.createElement('li');
    carListItem1.classList.add('list-group-item', 'fs-5', 'fw-bold');
    carListItem1.innerHTML = `${carData['Series/Film']}`;

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
    btnPopupModal.classList.add('btn', 'btn-dark', 'ms-3');
    btnPopupModal.title = "See More";
    btnPopupModal.innerHTML = "See More";
    btnPopupModal.name = carData['id'];
    btnPopupModal.dataset.bsToggle = 'modal';
    btnPopupModal.dataset.bsTarget = '#modalCarInfo';


    btnPopupModal.onclick = function () { popupCarInfoModal(this.name) }


    // Append the card body to the card
    cardBody.appendChild(carDetailList);
    cardBody.appendChild(btnPopupModal);

    cardInner.appendChild(cardBody);

    card.appendChild(cardInner);

    //style of card
    // style="position: absolute; left: 0%; top: 0px;"
    return card;
}

// Assuming you have a container element with an id of 'divCarCards' where you want to append the cards
const divCarCards = document.getElementById('divCarCards');

// Iterate over each car data element and create a card for each one
jsonCars.forEach(carData => {
    const card = createCard(carData);
    divCarCards.appendChild(card);
});











// Finds bootstrap modal and attaches car info to it
function popupCarInfoModal(carID) {
    // Get the modal element
    console.log('Loading Car Info: ', carID);

    //get correct car info from jsonCars array
    const carData = jsonCars.find((car) => car.id == carID);
    console.log(carData);
    if (carData) {
        console.log("Car data found:", carData);
    } else {
        console.log("Car data not found for the specified carID");
    }

    const modal = document.getElementById('modalCarInfo');
    modal.classList.add('modal');


    // Create the modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content', 'px-4');

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
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.innerHTML = '&times;';
    modalHeader.appendChild(closeButton);

    modalContent.appendChild(modalHeader);

    // Create the modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    //Create image 
    const modalImage = document.createElement('div');
    modalImage.classList.add('img-fluid');
    modalImage.src = carData['src'];
    modalBody.appendChild(modalImage);

    //Create close button (bottom)
    const btnCloseButton = document.createElement('button');
    btnCloseButton.classList.add('btn', 'btn-dark', 'mt-2');
    btnCloseButton.setAttribute('type', 'button');
    btnCloseButton.setAttribute('data-bs-dismiss', 'modal');
    btnCloseButton.innerHTML = 'Close';


    const carContent = createModalContent(carData);

    modalBody.appendChild(carContent);
    modalBody.appendChild(btnCloseButton);

    modalContent.appendChild(modalBody);

    //Creating Modal from scratch

    // div class="modal-dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    //div class="modal-content"
    const modalCont = document.createElement('div');
    modalCont.classList.add('modal-content');


    //modal now contains no data
    modal.innerHTML = "";

    //add divs to modal in the correct order
    modalCont.appendChild(modalContent);
    modalDialog.appendChild(modalCont);
    modal.appendChild(modalDialog);


}


//Generates a display of the car json object passed in
function createModalContent(jsonData) {

    // Create a div element    
    const rowContent = document.createElement('div');
    rowContent.classList.add('row');

    // Create an image element and set the src attribute
    const imageElement = document.createElement('img');
    imageElement.src = jsonData.src;

    // Append the image element to the div
    rowContent.appendChild(imageElement);

    // Create a table element
    const tableElement = document.createElement('table');
    tableElement.classList.add('table');

    // Create a table body element
    const tbodyElement = document.createElement('tbody');

    // Function to create table rows
    function createRow(label, value) {
        const row = document.createElement('tr');

        const labelCell = document.createElement('td');
        labelCell.textContent = label;
        row.appendChild(labelCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = value;
        row.appendChild(valueCell);

        return row;
    }

    // Add table rows for car details
    tbodyElement.appendChild(createRow('Car Brand', jsonData['Car Brand']));
    tbodyElement.appendChild(createRow('Model', jsonData.Model));
    tbodyElement.appendChild(createRow('Year', jsonData.Year));
    tbodyElement.appendChild(createRow('Cost', jsonData.Cost));
    tbodyElement.appendChild(createRow('Series/Film', jsonData['Series/Film']));

    // Create a row for car feats using a list
    const carFeatsRow = document.createElement('tr');
    const carFeatsCell = document.createElement('td');
    carFeatsCell.setAttribute('colspan', '2');

    const carFeatsList = document.createElement('ul');
    carFeatsList.classList.add('list-group', 'list-group-flush');
    jsonData.carFeats.forEach((feat) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = feat;
        carFeatsList.appendChild(listItem);
    });

    carFeatsCell.appendChild(carFeatsList);
    carFeatsRow.appendChild(carFeatsCell);
    tbodyElement.appendChild(carFeatsRow);

    // Add table rows for gearshift and number of seats
    tbodyElement.appendChild(createRow('Gearshift', jsonData.Gearshift));
    tbodyElement.appendChild(createRow('Number of Seats', jsonData['Number of Seats']));

    // Append the table body to the table element
    tableElement.appendChild(tbodyElement);

    // Append the table element to the div
    rowContent.appendChild(tableElement);

    return rowContent;
}

