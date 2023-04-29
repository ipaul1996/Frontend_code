class OurArray {
    constructor() {
        this.arr=[];
        this.length=0;
    }

    isEmpty(){
        if(this.arr.length===0) {
            return true;
        }
        else {
            return false;
        }
    }
    push(el) {
        this.arr[this.length]=el;
        this.length+=1;
    }
    
}

let arr1=new OurArray();
console.log(arr1);
console.log(arr1.isEmpty()); //true
arr1.push(20);
console.log(arr1);