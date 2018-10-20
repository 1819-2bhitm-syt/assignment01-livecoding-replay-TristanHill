//Value Type
let x = 10;
let y = x;

x = 20;

console.log("x = ",x);
console.log("y = ",y);

//Reference Type
let a = {value: 10};
let b = a;

a.value = 20;

console.log("a = ",a);
console.log("b = ",b);


//Bsp1
let number = 10;
 function increase(number) {
     number++;
 }

 increase(number);
 console.log(number);

 //Bsp2
let obj ={value: 10};

function increaseObj(obj) {
      obj.value++;
}

increaseObj(obj);
console.log(obj);