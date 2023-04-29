//class Problem

let students=[];
class User
{
    #username;
    #password;
    constructor(name,id) {
        this.name = name;
        this.id = id;
    }

    signup(username,password) {
        let isValidated = false;
        isValidated = this.#validateUsername(username) && this.#validatePassword(password);
        if(isValidated) {
            this.#username = username;
            this.#password = password;
            console.log(this);
            students.push(this);
            console.log('Signup Successful!');
        } else {
            console.log('Plaese give a valide user name and password');
        }

    }

    #validateUsername(username) {
        return true;
    }

    #validatePassword(password) {
        //Checking for rules
        return true;
     }

    login(username,password) {
        if(username === this.#username && password === this.#password) {
            console.log('Logged In!');
        } else {
            console.log('Authentication Failed');
        }
    }
     
}




class Student extends User
{
    constructor(name,id) {
       super(name,id);
       this.numOfAssignment = 0;
    }

    submitAssignemnt() {
        this.numOfAssignment++;
    }
}



class Admin extends User 
{
    constructor(name,id) {
        super(name,id);  
    }

    remove(id) {
      students = students.filter((el)=> {
        return el.id !== id ; 
      })
    }
}


let u1 = new User('Indrajit',1);
console.log(u1);

u1.signup('IP',1234)

//console.log(u1.validateUsername('wdfwef')); //if we make any method private we can not access that outside the class i.e., it is only accesible inside the class. Also the method is no more present in the prototype but it is inside the object.

u1.login('IP',1234)


s1 = new Student('Asmita', 5);
console.log(s1);

s1.signup('AB', 5);
s1.login('AB', 5);
s1.submitAssignemnt()
s1.submitAssignemnt()
s1.submitAssignemnt()
s1.submitAssignemnt()
s1.submitAssignemnt()


let n = new Admin('Nrupul', 3);
console.log(n);

n.signup('nru', 1256);
n.remove(1);
console.log(students);




