//Object Literal Syntax
//const circle ={
//    radius: 1,
//    location: {
//        x: 1,
//        y: 1
//    },
//    draw: function() {
//        console.log("draw");
//   }
//};
//
//circle.draw();

//Factory function
//function createCircle(radius) {
//    return {
//        radius: 1,
//        draw: function() {
//        console.log("draw");
//        }
//    };
//}
//
//const circle = createCircle(1);
//circle.draw();

//Constructor function + Constructor2
function Circle(radius) {
    console.log("this", this);
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}

const another = new Circle(1);
another.draw();

//Constructur property
let name = 'Susi';
console.log("name = ", name, name.constructor);

let ok = true;
console.log("ok = ", ok, ok.constructor);

let total = 100;
console.log("total = ", total, total.constructor);