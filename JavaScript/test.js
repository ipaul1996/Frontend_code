const baseUrl = "https://jsonplaceholder.typicode.com";

async function getData() {
  try {
    const res = await fetch(`${baseUrl}/posts?id=1&id=2&id=3`, {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    // displayData(data);
  } catch (err) {
    console.log(err);
    console.log(typeof err); // object
    console.log(err.message);
  }
}

getData();

async function postData() {
  try {
    const res = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// postData();

async function putData() {
  try {
    const res = await fetch(`${baseUrl}/posts/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Indrani Paul",
        city: "Kolkata",
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// putData();

function createUser(user) {

    // Api call with the user object

    // Print response

    getData();
}


document.getElementById("create").addEventListener("click", (e) => {
    // prevent default behavior of form

    // Collect data from the form

    // Create an user object with the data

    // Call create user

});


