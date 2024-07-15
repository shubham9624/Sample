//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
const selectMovie = document.getElementById('selectMovie');
const movieNameElement = document.getElementById('movieName');
const moviePriceElement = document.getElementById('moviePrice');
const totalPriceElement = document.getElementById('totalPrice');
const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');
const proceedBtn = document.getElementById('proceedBtn');
const cancelBtn = document.getElementById('cancelBtn');

let selectedSeats = [];
let moviePrice = 7;  // Default movie price

// Populate the dropdown menu
moviesList.forEach((movie, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = movie.movieName;
    selectMovie.appendChild(option);
});

// Update movie details
selectMovie.addEventListener('change', (event) => {
    const selectedMovie = moviesList[event.target.value];
    movieNameElement.textContent = selectedMovie.movieName;
    moviePriceElement.textContent = `$ ${selectedMovie.price}`;
    moviePrice = selectedMovie.price;
    updateTotalPrice();
});

// Update total price
function updateTotalPrice() {
    const totalPrice = selectedSeats.length * moviePrice;
    totalPriceElement.textContent = `$ ${totalPrice}`;
}

// Update selected seats display
function updateSelectedSeatsDisplay() {
    selectedSeatsHolder.innerHTML = '';
    if (selectedSeats.length === 0) {
        selectedSeatsHolder.textContent = 'No Seat Selected';
    } else {
        selectedSeats.forEach(seat => {
            const seatSpan = document.createElement('span');
            seatSpan.textContent = `Seat ${seat}`;
            selectedSeatsHolder.appendChild(seatSpan);
        });
    }
}

// Seat selection
const seats = document.querySelectorAll('#seatCont .seat:not(.occupied)');
seats.forEach((seat, index) => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== index + 1);
        } else {
            seat.classList.add('selected');
            selectedSeats.push(index + 1);
        }
        updateSelectedSeatsDisplay();
        updateTotalPrice();
    });
});

// Continue button
proceedBtn.addEventListener('click', () => {
    if (selectedSeats.length === 0) {
        alert('Oops no seat Selected');
    } else {
        alert('Yayy! Your Seats have been booked');
        selectedSeats.forEach(seatIndex => {
            seats[seatIndex - 1].classList.remove('selected');
            seats[seatIndex - 1].classList.add('occupied');
        });
        selectedSeats = [];
        updateSelectedSeatsDisplay();
        totalPriceElement.textContent = '$ 0';
    }
});

// Cancel button
cancelBtn.addEventListener('click', () => {
    selectedSeats.forEach(seatIndex => {
        seats[seatIndex - 1].classList.remove('selected');
    });
    selectedSeats = [];
    updateSelectedSeatsDisplay();
    totalPriceElement.textContent = '$ 0';
});

// Initial setup
movieNameElement.textContent = 'Flash';
moviePriceElement.textContent = '$ 7';
updateTotalPrice();
updateSelectedSeatsDisplay();