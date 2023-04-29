//Function reference vs. function call

// Here's a JavaScript function definition:
let foo=function () {
    alert('foo!');
  }
  // You can refer to that function like this:
  //foo
  // And here is how to call (execute) the function:
  //foo()
  
  
  let Btn1=document.getElementById('btn').addEventListener('click',foo());
  //Here foo function will be executed instantly i.e., it will not wait for click event.
  
  let Btn=document.getElementById('btn').addEventListener('click',foo);
  //This is just a reference to the function. It won't execute until it's called by event listener. 
  //addEventListener is an inbuilt method, it waits for the described event to get fired, and whenever it gets fired it calls the second argument.