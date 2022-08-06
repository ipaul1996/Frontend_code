function SayHello() {

    return function Sayhi() {

        return function Say() {

            console.log('Hi');

        }
    }

}
// SayHello()()()
let x = function Sayhi() {

    return function Say() {

        console.log('Hi');

    }
}
console.log(x());

