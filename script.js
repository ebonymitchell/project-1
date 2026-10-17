// ========================================
// SAMPLE IP ADDRESS DATA
// ========================================

// Temporary data for testing the tracker.
const locations = {
    "8.8.8.8": {
        ip: "8.8.8.8",
        city: "Mountain View",
        region: "California",
        timezone: "-07:00",
        isp: "Google LLC",
        lat: 37.386,
        lng: -122.0838
    },
    "1.1.1.1": {
        ip: "1.1.1.1",
        city: "Sydney",
        region: "New South Wales",
        timezone: "+10:00",
        isp: "Cloudflare",
        lat: -33.8688,
        lng: 151.2093
    }
};

// ========================================
// LEAFLET MAP SETUP
// ========================================

// Create the map inside the HTML element with ID "map".
const map = L.map("map");

// Set the initial map location and zoom level.
map.setView([40.7128, -74.0060], 13);

// Add OpenStreetMap tiles to display the map.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a marker that we can move when the location changes.
const marker = L.marker([40.7128, -74.0060]).addTo(map);

// ========================================
// SEARCH FORM
// ========================================

// Select the search form and input field.
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#ip-address");

// Select the four result elements.
const resultIP = document.querySelector("#result-ip");
const resultLocation = document.querySelector("#result-location");
const resultTimezone = document.querySelector("#result-timezone");
const resultISP = document.querySelector("#result-isp");

// Listen for form submissions.
searchForm.addEventListener("submit", (event) => {

    // Prevent the browser from refreshing.
    event.preventDefault();

    // Get the entered IP address.
    const searchValue = searchInput.value.trim();

    // Look for the IP address in our sample data.
    const data = locations[searchValue];

    // Display a message if the address isn't in our sample data.
    if (!data) {
        alert("Demo mode: Try 8.8.8.8 or 1.1.1.1");
        return;
    }

    // Update the four result fields.
    resultIP.textContent = data.ip;
    resultLocation.textContent = `${data.city}, ${data.region}`;
    resultTimezone.textContent = `UTC ${data.timezone}`;
    resultISP.textContent = data.isp;

    // Move the map to the selected location.
    map.setView([data.lat, data.lng], 13);

    // Move the marker to the same location.
    marker.setLatLng([data.lat, data.lng]);
});