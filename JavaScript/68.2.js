// Phase: 2

function fetchData() {
  // Data fetching takes some time(say 5 seconds), real data fetching simulation
  setTimeout(() => {
    console.log("After 5 seconds, that is after fetching the data", {
      name: "Mimi",
      age: 25,
    });
    return { name: "Mimi", age: 25 };
  }, 5000);
}

function printData(data) {
  console.log(`Name: ${data?.name}, Age: ${data?.age} `);
}

let res = fetchData(); // fetch data - immediate invocation but will get the data after 5 seconds
printData(res); // print data - immediate invocation after fetchData invocation
