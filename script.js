/* global L */

// Tell the code checker that L is provided by the Leaflet library.

/* ========================================
   LEAFLET MAP SETUP
======================================== */

// Create a Leaflet map inside the HTML element with ID "map".
const map = L.map("map");

// Set the initial map location to New York City.
// The number 13 controls how closely the map is zoomed in.
map.setView([40.7128, -74.0060], 13);

// Add OpenStreetMap tiles so the map displays streets and locations.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {

    // Give OpenStreetMap credit for providing the map data.
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);

// Create a marker at the initial location.
// This marker will be moved when the user searches
const marker = L.marker([40.7128, -74.0060]).addTo(map);


/* ========================================
   HTML ELEMENTS
======================================== */

// Select the search form and its input field.
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#ip-address");

// Select the four elements that display the lookup results.
const resultIP = document.querySelector("#result-ip");
const resultLocation = document.querySelector("#result-location");
const resultTimezone = document.querySelector("#result-timezone");
const resultISP = document.querySelector("#result-isp");

// Select the element used to display loading messages and errors.
const searchStatus = document.querySelector("#search-status");

// Select the search button so we can disable it during a request.
const searchButton = searchForm.querySelector('button[type="submit"]');


/* ========================================
   UPDATE THE RESULTS AND MAP
======================================== */

// This function receives the JSON data returned by IPify.
function displayResults(data) {

    // Display the IP address returned by the API.
    resultIP.textContent = data.ip;

    // Combine the city and region into one location string.
    resultLocation.textContent =
        `${data.location.city}, ${data.location.region}`;

    // Display the timezone offset.
    resultTimezone.textContent = `UTC ${data.location.timezone}`;

    // Display the Internet Service Provider.
    resultISP.textContent = data.isp;

    // Get the latitude and longitude from the nested location object.
    const latitude = data.location.lat;
    const longitude = data.location.lng;

    // Move the map to the returned geographic coordinates.
    map.setView([latitude, longitude], 13);

    // Move the existing marker to the same coordinates.
    marker.setLatLng([latitude, longitude]);
}


/* ========================================
   SEARCH FORM AND API REQUEST
======================================== */

// Run this asynchronous callback when the user submits the form.
searchForm.addEventListener("submit", async (event) => {

    // Prevent the form from refreshing the webpage.
    event.preventDefault();

    // Read the input and remove extra spaces.
    const searchValue = searchInput.value.trim();

    // Don't send an API request if the input is empty.
    if (!searchValue) {
        searchStatus.textContent = "Enter an IP address or domain.";
        return;
    }

    // Show feedback while the request is running.
    searchStatus.textContent = "Searching...";

    // Disable the button to prevent repeated requests.
    searchButton.disabled = true;

    try {

        // Build the URL for our Netlify serverless function.
        // encodeURIComponent() safely encodes the user's input.
        const url =
            `/.netlify/functions/ip-lookup?search=${encodeURIComponent(searchValue)}`;

        // Ask Netlify to retrieve real location data from IPify.
        // await pauses this function until the request completes.
        const response = await fetch(url);

        // Convert the JSON response into a JavaScript object.
        const data = await response.json();

        // HTTP error responses don't automatically make fetch() throw.
        // Check response.ok and throw an error if the request failed.
        if (!response.ok) {
            throw new Error(data.error || "Unable to complete the lookup.");
        }

        // Display the returned information and move the map marker.
        displayResults(data);

        // Clear the loading message after a successful lookup.
        searchStatus.textContent = "";

        // Catch errors from the API request so we can display a message.
    } catch (error) {

        // Show a readable message if the API request fails.
        searchStatus.textContent =
            error.message || "Something went wrong. Please try again.";

        // Log the error details for debugging.
        console.error("IP lookup failed:", error);

    } finally {

        // Re-enable the button whether the request succeeded or failed.
        searchButton.disabled = false;
    }
});
