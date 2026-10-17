
// LEAFLET MAP SETUP


// Create a Leaflet map inside the HTML element with the ID "map".
const map = L.map("map");

// Set the map's initial location and zoom level.
// The coordinates are for New York City.
// 13 is the zoom level (higher numbers mean a closer view).
map.setView([40.7128, -74.0060], 13);

// Add OpenStreetMap tiles so the map displays streets and locations.
// {z} = zoom level, {x} and {y} = tile coordinates.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {

  // Credit OpenStreetMap for providing the map data.
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

// Add the tile layer to our map.
}).addTo(map);


// SEARCH FORM SETUP


// Select the search form using its HTML ID.
const searchForm = document.querySelector("#search-form");

// Select the input field where users enter an IP address or domain.
const searchInput = document.querySelector("#ip-address");

// Listen for the form's submit event.
// The async keyword allows us to use await when we add the API request.
searchForm.addEventListener("submit", async (event) => {

  // Stop the browser from refreshing when the form is submitted.
  event.preventDefault();

  // Read the user's input.
  // trim() removes spaces from the beginning and end.
  const searchValue = searchInput.value.trim();

  // For now, log the entered value to verify that the form works.
  console.log("Searching for:", searchValue);

});