//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"

  
//Syntax
// Object.create(proto)
// Object.create(proto, propertiesObject)

// Parameters Used: 

// proto : It is the prototype object from which a new object has to be created.
// propertiesObject : It is optional parameter. It specifies the enumerable properties to be added to the newly created object.

// Return Value: 
// Object.create() returns a new object with the specified prototype object and properties. 


let Animal = {
    isHuman: false,
    sound: "Unspecified",
    makeSound() {
      console.log(this.sound);
    },
  };

  let properties = {
    isHuman: {
      value: true,
    },
    name: {
      value: "Jack",
      enumerable: true,
      writable: true,
    },
    introduce: {
      value: function () {
        console.log(`Hey! I am ${this.name}.`);
      },
    },
  };

  let human = Object.create(Animal, properties);
  console.log('human',human);