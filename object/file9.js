let arr=['a','a','a','c','b','a','c','d','b'];
let obj={};
for(let i=0; i<arr.length; i++) {
    if(obj[arr[i]]===undefined) {  
         obj[arr[i]]=1;
    } else {
        obj[arr[i]]++;
    }
}
console.log(obj);
//Here obj[arr[i]] represents the value of the object property with property name or key arr[i]
//If i=0 ---> arr[0]='a' --->obj[arr[0]]=obj['a'] represents value of the object property with property name or key 'a'

//obj["a"]=undefined---> value
obj["Name"]

//I have doubt here