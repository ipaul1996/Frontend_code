
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this); 
}
Person("Amit","IP");