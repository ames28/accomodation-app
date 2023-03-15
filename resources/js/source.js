/* eslint-disable eqeqeq */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable indent */
// /* eslint-env jquery */// /* global $ */
const accomType = [
    {
        id: 1,
        type: 'Hotel',
        people: [1, 2],
        price: 157,
        totalCost: 0,
        minNight: 1,
        maxNight: 5,
        image: 'hotel.jpg',
        alt: 'Photo of hotel room',
        req: '1-2 people<br>min 1 night, max 5 nights',
        location: 'Christchurch',
        shortDeatil: '1 Bedroom & free wifi',
        food: 'Breakfast available for $15 Per Person, Per Day',
        foodName: 'Breakfast',
        foodCost: 15,
        fullDescription: 'Morbi quis arcu quis sem semper feugiat sit amet at nibh. Nunc gravida ligula at tortor tincidunt, id porttitor mi rhoncus. Phasellus diam justo, sodales lobortis laoreet ac, cursus feugiat libero. Maecenas leo nibh, semper lacinia libero ac, accumsan facilisis nibh. Pellentesque rhoncus fringilla massa in commodo. Fusce quis dolor massa. Mauris maximus lectus non sapien malesuada, eget vestibulum nisl congue. Cras et elit et justo gravida faucibus eu non eros. Integer eu posuere elit, at ultrices sapien.',
    },
    {
        id: 2,
        type: 'Hostel',
        people: [1],
        price: 30,
        totalCost: 0,
        minNight: 1,
        maxNight: 10,
        image: 'hostel.jpg',
        alt: 'Photo of hostel room',
        req: '1 person<br>min 1 night, max 10 nights',
        location: 'Christchurch',
        shortDeatil: 'Shared rooms, shared bathroom & wifi available',
        food: 'Communal kitchen facilities available for $1 Per Person, Per Day',
        foodName: 'Communal kitchen',
        foodCost: 1,
        fullDescription: 'Morbi quis arcu quis sem semper feugiat sit amet at nibh. Nunc gravida ligula at tortor tincidunt, id porttitor mi rhoncus. Phasellus diam justo, sodales lobortis laoreet ac, cursus feugiat libero. Maecenas leo nibh, semper lacinia libero ac, accumsan facilisis nibh. Pellentesque rhoncus fringilla massa in commodo. Fusce quis dolor massa. Mauris maximus lectus non sapien malesuada, eget vestibulum nisl congue. Cras et elit et justo gravida faucibus eu non eros. Integer eu posuere elit, at ultrices sapien.',
    },
    {
        id: 3,
        type: 'Motel',
        people: [2, 3, 4],
        price: 90,
        totalCost: 0,
        minNight: 3,
        maxNight: 10,
        image: 'motel.jpg',
        alt: 'Photo of motel room',
        req: '2-4 people<br>min 3 nights, max 10 nights',
        location: 'Christchurch',
        shortDeatil: '1 Bedroom & wifi available',
        food: 'Breakfast available for $10 Per Person, Per Day',
        foodName: 'Breakfast',
        foodCost: 10,
        fullDescription: 'Morbi quis arcu quis sem semper feugiat sit amet at nibh. Nunc gravida ligula at tortor tincidunt, id porttitor mi rhoncus. Phasellus diam justo, sodales lobortis laoreet ac, cursus feugiat libero. Maecenas leo nibh, semper lacinia libero ac, accumsan facilisis nibh. Pellentesque rhoncus fringilla massa in commodo. Fusce quis dolor massa. Mauris maximus lectus non sapien malesuada, eget vestibulum nisl congue. Cras et elit et justo gravida faucibus eu non eros. Integer eu posuere elit, at ultrices sapien.',
    },
    {
        id: 4,
        type: 'House',
        people: [1, 2, 3, 4],
        price: 240,
        totalCost: 0,
        minNight: 2,
        maxNight: 15,
        image: 'house.jpg',
        alt: 'Photo of house room',
        req: '1-4 people<br>min 2 nights, max 15 nights',
        location: 'Christchurch',
        shortDeatil: '2 Bedrooms & free wifi',
        food: 'Kitchen facilties available for $1 Per Person, Per Day',
        foodName: 'Kitchen facilties',
        foodCost: 1,
        fullDescription: 'Morbi quis arcu quis sem semper feugiat sit amet at nibh. Nunc gravida ligula at tortor tincidunt, id porttitor mi rhoncus. Phasellus diam justo, sodales lobortis laoreet ac, cursus feugiat libero. Maecenas leo nibh, semper lacinia libero ac, accumsan facilisis nibh. Pellentesque rhoncus fringilla massa in commodo. Fusce quis dolor massa. Mauris maximus lectus non sapien malesuada, eget vestibulum nisl congue. Cras et elit et justo gravida faucibus eu non eros. Integer eu posuere elit, at ultrices sapien.',
    },
];

let foodPrice = 0;
let addCost = 0;

// eslint-disable-next-line no-shadow
function generateAvailableCard(accomType, i, numPeopleInput, numNightsInput) {
    const availableCard = `
    <div id="info-${accomType[i].id}" class="modal">

        <div class="modalImage" style="background-image: url('./resources/images/${accomType[i].image}')">
        </div>
        <div class="lineModal"></div>
        <div class="modalText">
            <span> <h1>${accomType[i].type}</h1> </span>
            <div class="lineModal"></div>
            <h2>${accomType[i].location}<h2>  
            <div class="lineModal"></div>
            <h3>$${accomType[i].price} Per Night</h3>
            <div class="lineModal"></div>
            <h3>${accomType[i].shortDeatil}</h3>
            <div class="lineModal"></div>
            <h5>${accomType[i].fullDescription}</h5>
            <div class="lineModal"></div>
            <a href="#" class="infoButton" rel="modal:close" >Close</a>
        </div>
        
    </div>

    <div id="receipt-${accomType[i].id}" class="modal receiptModal">

                <div class="modalText">
                    <span> <h1>Receipt</h1> </span>
                    <div class="lineModal"></div>
                    <h2>Accommodation: ${accomType[i].type}</h2>
                    <div class="lineModal"></div>
                    <h3>Location: Christchurch<h3>  
                    <div class="lineModal"></div>
                    <h3>Number of Guests: ${numPeopleInput}</h3>
                    <div class="lineModal"></div>
                    <h3>Number of Nights: ${numNightsInput}</h3>
                    <div class="lineModal"></div>
                    <h3 class="breakfastPrice-${accomType[i].id}"></h3>
                    <div class="lineModal"></div>
                    <h3>Total Cost For ${accomType[i].type}  only = $${accomType[i].totalCost}  </h3>
                    <div class="lineModal"></div>
                    <h3 class="breakfastAdd-${accomType[i].id}"></h3>
                    <div class="lineModal"></div>
                    <a href="#" class="infoButton" rel="modal:close" >Close</a>
                </div>
                
            </div>

    <div class="availableCard">
        <div class="image" style="background-image: url('./resources/images/${accomType[i].image}');">
            
        </div>
        <div class="line"></div>
        <div class="name">
            <h1>${accomType[i].type}</h1>
            <h2>${accomType[i].location}<h2>
            <h3>$${accomType[i].price} Per Night</h3>
            <h3>${accomType[i].shortDeatil}</h3>
        </div>
        <div class="line"></div>
        <div class="accomContent">
            
            <div> 
                <h4>${accomType[i].food}</h4>
                <h4>Would you like ${accomType[i].foodName} for your stay?</h4>
                <div class="check">
                    <h5>Yes</h5>
                    <div class="radioBtn">
                        <input type="checkbox" id="${accomType[i].id}" name="mealAccept" value="Select">
                    </div>
                </div>
            </div>

            
                <div id="finalCost-${accomType[i].id}"><h4>Total cost for  ${numPeopleInput}  people for ${numNightsInput} nights = $${accomType[i].totalCost}</h4>
            </div>
            
            <div> 
                <input type="button" class="infoButton" value="More Info" id="${accomType[i].id}" />
                <input type="button" class="button book-btn" value="Book Now" id="book-${accomType[i].id}"/>
            </div>
        </div>
    </div> 
    `;

    $('.available').append(availableCard);
}

// eslint-disable-next-line no-shadow
function generateNotAvailableCard(accomType, i) {
    const notAvailableCard = `
    <div class="notAvailableCard">
    <div class="image" style="background-image: url('./resources/images/${accomType[i].image}');"></div>
        <div class="line"></div>
        <div class="name">
            <h1>${accomType[i].type}</h1>
            <h2>${accomType[i].location}<h2>
            <h3>${accomType[i].shortDeatil}</h3>
            
        </div>
        <div class="line"></div>
        <div class="accomContent">
            <h3>Not Available </h3> 
            <h4>Available for ${accomType[i].req}</h4>
            <h4>${accomType[i].food}</h4>
            
        </div>
    </div>
    `;
    $('.notAvailable').append(notAvailableCard);
}

function moreInfo() {
    $('.infoButton').click(function () {
        // eslint-disable-next-line prefer-template
        $('#info-' + this.id).modal({ showClose: false });
    });
}

function nightsWarning() {
    $('#nights').css('border', '0.125rem solid #ff4545');
}

function peopleWarning() {
    $('#numPeople').css('border', '0.125rem solid #ff4545');
}

function breakfastPrice(accommID) {
    $('.breakfastPrice-' + accomType[accommID].id).html(accomType[accommID].foodName + ' = $' + foodPrice);
}

$(() => {
    $('#searchButton').click(function () {
        const numNightsInput = $('#nights').val();
        const numPeopleInput = $('#numPeople').val();
        $('.error').html('');
        $('.available').html('');
        $('.notAvailable').html('');
        $('#nights').css('border', '0.0625rem solid #414141');
        $('#numPeople').css('border', '0.0625rem solid #414141');
        $('#cardContainer').css('height', '50vh');
        const availableResult = [];
        const notAvailableResult = [];
        for (let i = 0; i < accomType.length; i++) {
            if (accomType[i].people.includes(+numPeopleInput) && numNightsInput
                >= accomType[i].minNight && numNightsInput <= accomType[i].maxNight) {
                $('.landingSearch').css('height', '35vh');
                availableResult.push(i);
                accomType[i].totalCost = numNightsInput * accomType[i].price;
            } else if (numNightsInput == '-' && accomType[i].people.includes(+numPeopleInput)) {
                $('.error').append('Please enter Night details');
                nightsWarning();
                break;
            } else if (numPeopleInput == '-' && numNightsInput >= accomType[i].minNight && numNightsInput <= accomType[i].maxNight) {
                $('.error').append('Please enter People details');
                peopleWarning();
                break;
            } else if (numNightsInput == '-' && numPeopleInput == '-') {
                $('.error').append('Please enter valid details');
                nightsWarning();
                peopleWarning();
                break;
            } else {
                notAvailableResult.push(i);
            }
        }
        for (let i = 0; i < availableResult.length; i++) {
            // eslint-disable-next-line max-len
            generateAvailableCard(accomType, availableResult[i], numPeopleInput, numNightsInput, foodPrice);
        }
        for (let i = 0; i < notAvailableResult.length; i++) {
            generateNotAvailableCard(accomType, notAvailableResult[i]);
        }
        $('.radioBtn input').click(function () {
            const accommodationID = +this.id - 1;
            if (this.checked) {
                foodPrice = (accomType[accommodationID].foodCost * numNightsInput) * numPeopleInput;
                addCost = foodPrice + accomType[accommodationID].totalCost;
                $('#finalCost-' + +this.id).html('<h4>Total cost including ' + accomType[accommodationID].foodName + ' for ' + numPeopleInput + ' people for ' + numNightsInput + ' nights = $' + addCost + '</h4>');
            } else {
                $('#finalCost-' + +this.id).html('<h4>Total cost for ' + numPeopleInput + ' people for ' + numNightsInput + ' nights = $' + accomType[accommodationID].totalCost + '</h4>');
                foodPrice = 0;
            }
        });

        $('.book-btn').click(function () {
            let accommID = this.id;
            accommID = +accommID.split('-')[1] - 1;
            if (foodPrice !== 0) {
                $('.breakfastAdd-' + accomType[accommID].id).html('Total Cost For ' + accomType[accommID].type + ' and ' + accomType[accommID].foodName + '= $' + addCost);
                breakfastPrice(accommID);
            } else {
                $('.breakfastAdd-' + accomType[accommID].id).html('');
                breakfastPrice(accommID);
            }
            $('#receipt-' + accomType[accommID].id).modal({ showClose: false });
        });
        moreInfo();
    });
});
