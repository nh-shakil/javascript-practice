// Variable var,let,const
/*
let phoneNumber = '01643894554';

 a = 80;
 b = 70;

console.log(phoneNumber,a,b); 

var Name = 'Shakil';

console.log(Name);

const ShakilName = 'NH Shakil';

console.log(ShakilName);
 
const person = {
    fristName: 'Shakil',
    age: '24',
}
person.country = 'Bangladesh',
person.age = '33',

console.log(person);

*/

//javascipt Operators

/*
* Arithmemtic Operator

*/

let a = 50;
let b = 20;
let c = a % b;

console.log(c);
/*
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);

if (number % 2 === 0){
    console.log(`${number} is even number`);

    }
else {
    console.log(`${number} is odd number `)
}
    

let x =10;
x++; //inctrement
console.log(`incremented ${x}`);


let y =20;
y = y -1;
y--; //decrement

console.log(`decremented ${y}`);

*/




//Comparison Operators
  let p ='5';
  let q = 5;

  console.log(p == q);
  console.log(p === q);
  console.log(p !== q);
  console.log(p > q);
  console.log(p < q);
  console.log(p >= q);
  console.log(p <= q);

  //Logical Operators

  /*
  * && AND Operator
  * || OR Operator 
  *  ! NOT Operator
  */

  //Assigment Operators 

let j = 10;
let k = 20;
j = j + k;
j-=k;

j = j /k;
j /= k;
j %= k;
 j **= k;

console.log(j);

//Conditionals Ternary Operator

let t = a < b ? 'true' : 'false';
console.log(t);

//Typeof Operator 

let firstName = 'shakil';


let cvInfo = {
    name: 'Nazmul Huda Shakil',
    age: 20,
    address:'Chandpur, Bangladesh',
    university: 'Universitiy of South Asia',
    Skills: 'html,css,javascipt,laravel,php ',
}

console.log(cvInfo);

const info = {
    names: 'huda',
    age:24,
}

info.names = 'huda Shakil';
console.log(info);

//data type 

let MyfirstName = "NH Shakil";
let Myage = 30;
console.log(typeof Myage);


let numberBing = 9000000000000;
let numberBig = 90000000000000;
let culculate = numberBing * numberBig;


console.log(culculate);
console.log(typeof culculate);


let isAudlt = false;
const somInfo = null;


console.log(typeof isAudlt);
console.log(typeof somInfo);


let broName = ['Milon','Rasal','Shakil'];



console.log(broName);
console.log(typeof broName);


//javascipt Operators Precedence 

// ===== () , {}, []

// / , +, -, * 

/*
  5 + 6 - 3 / 2 * 4
  =5 + 6 - 1.5 * 4
  =5 + 6 - 6 
  =5
*/

console.log(5 + 6 - 3 / 2 * 4); //  ans 5



// functions
function newUser (fullName, age, DateofBirth = 2003 ) {
console.log('hello ' + fullName + ' i am ' + age + ' and my date of birth is ' + DateofBirth);
}

newUser ('NH',24,);
newUser ('Shakil',24,true); 


function isSubscribe (){
    console.log('Subscribed')
}
 document.getElementById('subscribe-btn').addEventListener('click',isSubscribe);
 
//  (function (massage){
// console.log('i am self-Invokeing Functions',massage);

//  })("hello");

 let maths = function(x,y){
    return x * y;
 };

console.log(maths(3,4));
console.log(maths(4,4));
console.log(maths(4,5));

let numbers = [4,5,6,7];
let sqNumbers = numbers.map(function(number){
    return number * number;
});
console.log(sqNumbers);


function isTest(){
    console.log('Test successfully');
}
document.getElementById('test-btn').addEventListener('click',isTest);

// arrow functions
let add = (x,y) => x + y;
console.log(add(3,4));

//greet functions

// function greet(firstName){
//     function sayHello(){
//         alert('hello ' + firstName);
//     }
//     return sayHello();
// }
// greet('Shakil')




//Objects 

const mobileModel = {
    brand : 'Samsung',
    model : 'Samsung S 24',
    price: 500000,
    color : "black",
    ram : '12gb',
    storage : '512gb',
    display: 6.5,
    camera: ['200MP,20MP,10MP'],

    BrandModel : function(){
        return `this is ${this.brand} and the price is ${this.model}`;
    },

    battry : {
        capacity : '6000mh',
        fastchanging : true,
    },
};


mobileModel.model = 's24 ultra';

console.log(mobileModel);
console.log(mobileModel.battry);
console.log(mobileModel.BrandModel);

// multiple objects one variable 

const Obj1 = {
    a: 10,
    b: 20,
    c: 30,

};


const Obj2 = {
    e: 40,
    f: 50,
    g: 60,
};


const Obj3 = {
  i: 70,
  j:80,
  k: 90,
};

const finalObj = { ...Obj1, ...Obj2, ...Obj3 };
console.log(finalObj);

// object constructor 

function mobile (brand,model,price,color,ram,storage,display,camera){
    this.brand = brand;
    this.model = model;
};

const mobile1 = new mobile('samsung','s24 ultra',50000,'black','12gb','512gb',6.5,['200MP,20MP,10MP']);
mobile1.price = 700000,
console.log(mobile1);




