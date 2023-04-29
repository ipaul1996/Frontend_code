// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle={};
rectangle.length=10;
rectangle.width=8;
rectangle.perimeter=function() {
    peri=2*(this.length+this.width);
    return peri;
}
rectangle.area=function() {
    are=(this.length*this.width);
    return are;
}
console.log(rectangle.perimeter());
console.log(rectangle.area());