// This function runs on Netlify's server, not in the visitor's browser.

// Netlify calls this function when the frontend sends a request.
exports.handler = async (event) => {

  // Only allow GET requests.
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  // Get the IP address or domain from the URL query parameters.
  const searchValue = event.queryStringParameters?.search?.trim();

  // Reject requests without a search value.
  if (!searchValue) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Enter an IP address or domain." })
    };
  }

  // Read the private API key from Netlify's environment variables.
  const apiKey = process.env.IPIFY_API_KEY;

  // Build the IPify request URL.
  const url = new URL("https://geo.ipify.org/api/v2/country,city");

  // Add the API key without putting it in frontend JavaScript.
  url.searchParams.set("apiKey", apiKey);

  // IPify uses different parameters for IP addresses and domains.
  const isIP = /^[\d.]+$/.test(searchValue);

  url.searchParams.set(
    isIP ? "ipAddress" : "domain",
    searchValue
  );

  try {
    // Send the request to IPify and wait for its response.
    const response = await fetch(url);

    // Convert the JSON response into a JavaScript object.
    const data = await response.json();

    // Return an error if IPify could not complete the lookup.
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: "Unable to look up that address."
        })
      };
    }

    // Send the location data back to our frontend.
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    // Handle network errors without exposing sensitive details.
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong. Please try again."
      })
    };
  }
};