# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

For this project, I built a responsive IP address tracker that allows users to search for an IP address or domain and see its location on an interactive map.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the application on desktop and mobile devices.
- Search for an IP address or domain.
- See the IP address, location, timezone, and internet service provider (ISP).
- See the corresponding location on an interactive map.
- Receive a message if a search fails.

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/ip-address-tracker-GEiibLD2ls)
- Live Site URL: [IP Address Tracker](https://project-1-ip-address-tracker.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- CSS Grid and Flexbox
- CSS custom properties
- Responsive media queries
- JavaScript
- Fetch API and async/await
- IPify Geolocation API
- Leaflet.js
- OpenStreetMap
- Netlify Functions
- Git and GitHub


### What I Learned

I got more hands-on practice working with JavaScript and APIs during this project. I'm still learning how everything connects, so building an application helped me get a better understanding of how the different pieces work together.

I worked with `fetch()`, `async/await`, and JSON data to retrieve information from an API and display it on the page. I also learned how to use the coordinates returned by the API to update the map and marker.

Another thing I learned was how to keep an API key out of my frontend JavaScript by using a Netlify serverless function and an environment variable.

### Challenges and Debugging

Getting the API working was one of the biggest challenges I ran into. My Netlify function kept returning a 404 error, and it took some troubleshooting to figure out what was going wrong. I checked the file structure, corrected the function's location, committed and pushed my changes, and tested the endpoint until it returned JSON data.

I also had an issue with the Leaflet stylesheet not loading because of an integrity mismatch. Once I corrected the stylesheet reference, the map displayed properly.

Getting the mobile layout right took some adjustments too. I had to work with the grid layout, spacing, and positioning to get the results card looking right on smaller screens.

I initially used hardcoded IP addresses to test the search functionality and map before switching to live API data.

### Continued Development

I want to keep improving my JavaScript skills, especially working with APIs, asynchronous functions, and error handling.

I also need more practice with responsive layouts and debugging. I want to get to the point where I can identify problems and figure out how to fix them without spending so much time going back and forth.

My main goal is to understand the code I'm writing, not just get something working.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) — HTML, CSS, and JavaScript documentation.
- [Leaflet Documentation](https://leafletjs.com/) — Interactive map setup.
- [IPify](https://geo.ipify.org/) — IP geolocation data.
- [Netlify Documentation](https://docs.netlify.com/) — Deployment and serverless functions.
- [Frontend Mentor](https://www.frontendmentor.io/) — Challenge requirements and design files.

### AI Collaboration

I used ChatGPT mainly to help troubleshoot my Netlify deployment and debug issues with the IPify API.

I ran into problems getting my serverless function to work and kept receiving a 404 error. ChatGPT helped me identify possible causes, check my file structure, and work through the deployment issues.

Not every suggestion worked, so I still had to test changes and figure out what was causing the problem. This gave me more hands-on experience with debugging and troubleshooting.

## Author

- Website - [Ebony Mitchell](https://github.com/ebonymitchell)
- Frontend Mentor - [@ebonymitchell](https://www.frontendmentor.io/profile/ebonymitchell)