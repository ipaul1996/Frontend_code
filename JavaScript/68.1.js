//Phase: 1

function fetchData() {
  // It Takes some time
  return { name: "Mimi", age: 25 };
}

function printData(data) {
  console.log(`Name: ${data?.name}, Age: ${data?.age} `);
}

let res = fetchData(); // fetch data
printData(res); // print data
