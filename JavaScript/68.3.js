// Phase: 3

// a
console.log("Hello 1");

function fetchData(callBack) {
  // Data fetching takes some time(say 5 seconds), real data fetching simulation
  setTimeout(() => {
    let data = {
      name: "Mimi",
      age: 25,
    };
    console.log("After 5 seconds, that is after fetching the data", data);
    // c
    callBack(data);
    return { name: "Mimi", age: 25 };
  }, 5000);
}

function printData(data) {
  console.log(`Name: ${data?.name}, Age: ${data?.age} `);
}

// b
let res = fetchData(printData); // fetch data - immediate invocation but will get the data after 5 seconds

//d
console.log("Hello 2");
