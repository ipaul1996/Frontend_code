const data = [
  {
    "id": 1,
    "name": "Genre 1",
    "books": [
      { "id": 1, "name": "book 1" },
      { "id": 2, "name": "book 2" },
      { "id": 3, "name": "book 3" }
    ]
  },
  {
    "id": 2,
    "name": "Genre 1",
    "books": [
      { "id": 1, "name": "book 1" },
      { "id": 2, "name": "book 2" },
      { "id": 3, "name": "book 3" }
    ]
  },
  {
    "id": 3,
    "name": "Genre 1",
    "books": [
      { "id": 1, "name": "book 1" },
      { "id": 2, "name": "book 2" },
      { "id": 3, "name": "book 3" }
    ]
  }
];

// data.map((el) => {
//     el.books.map((e) => {
//        console.log(`id is ${e.id} & Name is ${e.name}` );
//     })
// })

let arr = [];
data.map(el => {
    arr.push(el.books);
});

console.log(arr);