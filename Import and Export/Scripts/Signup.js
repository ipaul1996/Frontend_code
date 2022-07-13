import navbar from "../Components/navbar.js"

document.querySelector('#navbar').innerHTML = navbar();

class User
{

    constructor(Name, Email, Password, Mobile) {

        this.Name = Name,

        this.Email = Email,

        this.Password = Password,

        this.Mobile = Mobile

    }

    Signup(Name, Email, Password, Mobile) {

        let isValidated = false;

        let userArr = JSON.parse(localStorage.getItem('userData')); 

        if(!Name || !Email || !Password || !Mobile) {

            alert('Please fill all the details');

            return;

        }
        let count = 0;

        userArr.forEach(element => {
            
            if(Email == element.Email) {

                alert('This Email id is already registered with us');

                count++;

            }
        });

        if(count===1) {

            return;

        }
        
        isValidated = this.#isPasswordValidated(Password);


        if(isValidated) {

            userArr.push(this);

            localStorage.setItem('userData', JSON.stringify(userArr));

            alert('Signup Succesful!');

        }


    }

    #isPasswordValidated(Password) {

        if(Password.length >= 8) {

            return true;

        } else {

            alert('Invlid Password');

            return false;
        }
    }
}