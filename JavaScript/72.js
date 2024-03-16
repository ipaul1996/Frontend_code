fetch("https://jsonplaceholder.typicode.com/posts/1") // Fetching data from an API
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then((data) => {
    // Handle JSON data
    console.log("Data:", data);
    return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("User data not found");
    }
    return response.json();
  })
  .then((userData) => {
    // Handle user data
    console.log("User Data:", userData);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
