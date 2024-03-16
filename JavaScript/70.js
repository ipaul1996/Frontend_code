// Promise - special kind of object in js

function canCastVote(name, age) {
  // Promise producing code
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({
          name: name,
          age: age,
          message: "You are eligible to cast your vote",
        });
      } else {
        reject({
          name: name,
          age: age,
          message: "You are not allowed to vote",
        });
      }
    }, 3000);
  });

  return promise;
}

// let res = canCastVote("kaju", 22); // canCastVote("kaju", 22) function is invoked immediately and returns
// a promise in the pending state initially which at a later point of time changes to either fulfilled or
// rejected state.

let name = prompt("Please enter your name");
let age = +prompt("Please enter your age");

// Promise consuming code
canCastVote(name, age)
  .then((result) => {
    console.log("Fullfilled Result", result);
  })
  .catch((err) => {
    console.log("Error Details", err);
  });
