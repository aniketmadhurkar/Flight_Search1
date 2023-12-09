const flightData = [
    {
        flightNumber: "AI-101",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "08:00 AM",
        arrivalTime: "10:00 AM",
        price: 8000,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-102",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "12:00 PM",
        arrivalTime: "02:00 PM",
        price: 8500,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-103",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "03:00 PM",
        arrivalTime: "05:00 PM",
        price: 7500,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-104",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "06:00 PM",
        arrivalTime: "08:00 PM",
        price: 7800,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-105",
        origin: "DEL",
        destination: "BOM",
        departureTime: "09:00 AM",
        arrivalTime: "11:00 AM",
        price: 9000,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-106",
        origin: "BOM",
        destination: "DEL",
        departureTime: "02:00 PM",
        arrivalTime: "04:00 PM",
        price: 9200,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-107",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "05:00 PM",
        arrivalTime: "07:00 PM",
        price: 8300,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-108",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: 8800,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-109",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "01:00 PM",
        arrivalTime: "03:00 PM",
        price: 7200,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-110",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 7800,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-111",
        origin: "DEL",
        destination: "BOM",
        departureTime: "07:00 AM",
        arrivalTime: "09:00 AM",
        price: 8600,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-112",
        origin: "BOM",
        destination: "DEL",
        departureTime: "12:00 PM",
        arrivalTime: "02:00 PM",
        price: 9200,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-113",
        origin: "PNQ",
        destination: "DEL",
        departureTime: "03:00 PM",
        arrivalTime: "05:00 PM",
        price: 8400,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-114",
        origin: "DEL",
        destination: "PNQ",
        departureTime: "06:00 PM",
        arrivalTime: "08:00 PM",
        price: 8900,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-115",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "09:00 AM",
        arrivalTime: "11:00 AM",
        price: 7800,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-116",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "02:00 PM",
        arrivalTime: "04:00 PM",
        price: 8700,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-117",
        origin: "DEL",
        destination: "BOM",
        departureTime: "05:00 PM",
        arrivalTime: "07:00 PM",
        price: 9200,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-118",
        origin: "BOM",
        destination: "DEL",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: 8500,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-119",
        origin: "PNQ",
        destination: "BOM",
        departureTime: "01:00 PM",
        arrivalTime: "03:00 PM",
        price: 7800,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    },
    {
        flightNumber: "AI-120",
        origin: "BOM",
        destination: "PNQ",
        departureTime: "04:00 PM",
        arrivalTime: "06:00 PM",
        price: 8200,
        image: "https://i.pinimg.com/564x/15/6e/85/156e85f771b284a86d2223c75d07286d.jpg",
    }
];

function updatePriceRange() {
    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    priceRangeValue.innerText = `Price Range: Rs.0 - Rs.${priceRange.value}`;

    const filteredFlights = flightData.filter(flight => flight.price <= parseInt(priceRange.value));
    displaySearchResults(filteredFlights);
}

function searchFlights(flighType) {
    if (flighType == "oneWay") {
        var origin = document.getElementById("oneWayOrigin").value;
        var destination = document.getElementById("oneWayDestination").value;
        var priceRange = document.getElementById("priceRange").value;
        document.getElementById('flightType').value = "oneWay";
    }
    else {
        var origin = document.getElementById("returnOrigin").value;
        var destination = document.getElementById("returnDestination").value;
        var priceRange = document.getElementById("priceRange").value;
        document.getElementById('flightType').value = "return";
    }

    if (origin.trim() === "" || destination.trim() === "") {
        alert("Please enter both origin and destination.");
        clearSearchResults();
        return; 
    }

    const searchResults = flightData.filter(flight => {
        return (
            flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
            flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
            (priceRange === "0" || flight.price <= priceRange)
        );
    });

    if (searchResults.length > 0) {
        document.getElementById("flightHeading").textContent = `Flights from ${origin} to ${destination}`;
        displaySearchResults(searchResults);
    } else {
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("flightHeading").textContent = "No matching flights found.";
    }
}


function displaySearchResults(results) {
    var flighType = document.getElementById('flightType').value;
    if (flighType == "oneWay") {
        var origin = document.getElementById("oneWayOrigin").value;
        var destination = document.getElementById("oneWayDestination").value;        
    }
    else {
        var origin = document.getElementById("returnOrigin").value;
        var destination = document.getElementById("returnDestination").value;       
    }
    if (origin.trim() === "" || destination.trim() === "") {
        alert("Please enter both origin and destination.");
        return; 
    }
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";

    results.forEach(flight => {
        const flightCard = createFlightCard(flight);
        searchResultsContainer.appendChild(flightCard);
    });
}
function clearSearchResults() {
    document.getElementById("searchResults").innerHTML = "";
}

function createFlightCard(flight) {
    const flightCard = document.createElement("div");
    flightCard.classList.add("col-md-12", "mb-4");
    var flighType = document.getElementById('flightType').value;
    const cardInnerHtml = `
        <div class="card mb-2">
            <div class="col-md-4">
                <div class="card-body">
                    <h5 class="card-title text-danger">Rs. ${flight.price}</h5>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-md-4">
                    <div class="card-body">                   
                        <h5 class="card-title"><b>${flight.flightNumber}</b></h5>
                        <p class="card-text tex-light">${flight.origin} &gt; ${flight.destination}</p>
                        <p class="card-text">Depart: <b>${flight.departureTime}</b></p>
                        <p class="card-text">Arrive:<b> ${flight.arrivalTime}</b></p>
                    </div>
                </div>

                <div class="col-md-4">
                ${flighType === "return" ? `
                    <div class="card-body">
                        <h5 class="card-title"><b>${flight.flightNumber}</b></h5>
                        <p class="card-text">${flight.destination} &gt; ${flight.origin}</p>
                        <p class="card-text">Depart: <b>${flight.departureTime}</b></p>
                        <p class="card-text">Arrive: <b>${flight.arrivalTime}</b></p>
                    </div>
                    ` : ``}
                </div>

                <div class="col-md-4">
                    <img src="${flight.image}" class="flight-image " alt="Flight Image"><br>
                    <button class="btn btn-primary mt-2 mb-2">Book This Flight</button>
                </div>
            </div>
        </div>
    `;


    flightCard.innerHTML = cardInnerHtml;
    return flightCard;
}

// Initial display of all flights
//displaySearchResults(flightData);
const cities = flightData.map(flight => flight.origin).concat(flightData.map(flight => flight.destination));
const uniqueCities = [...new Set(cities)]; // Remove duplicates
$("#oneWayOrigin, #oneWayDestination,#returnOrigin, #returnDestination").autocomplete({
    source: uniqueCities
});

