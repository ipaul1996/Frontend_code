"use strict";


function first() {
    console.log("first:", this);
    const second = () => {
        console.log("second:", this);
    }
    second();
}

first();


const x = () => console.log(this);
x();