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







