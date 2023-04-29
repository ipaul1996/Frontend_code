class Stack
{
    constructor() {
        this.length=0;
        this.stack=[];
    }
    Push(...x) {
        x.forEach((el)=>{
            this.stack[this.length]=el;
            this.length++;
        })    
    }

    Pop() {
        if(this.length===0) {
            console.log('underflow');
            return;
        }
        delete this.stack[this.length-1];
        this.stack.length--; //Otherwise we would get, stack: (6) [empty × 6]
        this.length--;
    }

    Peek() {
        return this.stack[this.length-1];
    }

    isEmpty() {
      return  this.length===0 ? `stack is empty` : `stack is not empty and has ${this.length} elements`;
    }
}

let st1=new Stack();
console.log(st1);
st1.Push(5,6,7);
st1.Push(10,11,13);
st1.Pop()
console.log(st1);
st1.Push(15)

st1.Pop();
st1.Pop();
st1.Pop();
st1.Pop();
st1.Pop();
st1.Pop();
//st1.Pop(); // Uncaught RangeError: Invalid array length
st1.Push(10,12,13)
console.log(st1.Peek()); //13
//Here we are keeping track of this.length and JS is keeping track of this.stack.length
console.log(st1.isEmpty()); //stack is not empty
st1.Pop();
st1.Pop();
st1.Pop();
console.log(st1.isEmpty()); //stack is empty