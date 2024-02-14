// window.alert('hello');
// console.log("hello");

// let fname = 'Jeffrey ';
// let lname = 'Adams ';
// let fullname = fname.concat(lname);

// fullname += "ekow";

// console.log(fullname.toUpperCase());
// console.log(fullname.split(' '));

// let favActorFName = 'Raen';
// let favActorLName ="goslin";
// let fullName = favActorFName.concat(favActorLName);
// let upperCase = fullName.toUpperCase();
// let message = `my Favorite Actor is ${upperCase} is a very good Actor`;
//  message +=`his best show is Silicon Valley`;
//  console.log(message);

// let popo = '23';
// popo =parseInt(popo)
// popo = +popo;

// console.log(popo);

// console.log(typeof popo);

// popo = popo.toString();

// console.log(popo);

// console.log(typeof popo );

// let name1 = `nana`;
// name1 = name1.toUpperCase();
// let name2;
// name2 = window.prompt('what is your name');
// name2 = name2.toUpperCase();

// if(name2 = String(name2)){
//     console.log(`Welcome ${name2}`);
// }

// else if(name2 != String(name2)){
//     console.log(`You are not invited`);
// }

// let day = window.prompt('what day is today');

// switch(day){

// case"Monday":
// console.log(`today is ${day} ,sigh`);
// break;

// case"Tuesday":
// console.log(`today is ${day},gotta get my money`);
// break;

// case"Wednesday":
// console.log(`today is ${day},mid-week`);
// break;

// case"Thursday":
// console.log(`today is ${day},almost weekend`);
// break;

// case"Friday":
// window.alert(`${day} already??,
//         T G I F
// 🥳🥳🥳🥳🥳🥳🥳🥳`);
// break;

// case"Saturday":
// console.log(`today is ${day}, Welcome to the weekend`);
// break;

// case"Sunday":
// window.alert(`today is ${day}, tomorrow is monday :(`);
// break;
// }

// Objects
let name;
let age;
let city;

const person = {
  name: `slim`,
  age: 22,
  city: `adenta`,
};
console.log(person.name);

// Array

const arr = [1, 2, 23, 4, 3];
console.log(arr[3]);
// date
const date = new Date();
console.log(date);

// comparison operators ==> true/false

const a = 5;
const b = 6;

console.log(a >= b);

// loop

// let i = 0
// while (i <= 8) {
//   console.log(i);
//   i++
// }

// for (let i = 0; i <= 10; i++){
//   console.log(i);
// }


// functions
function naap(num1, num2) {
  const age = num1*num2
  return age
}
const paa = naap(3 , 4)
   console.log(paa);
 

function sayHi(name) {
  console.log(`hello ${name}`);
  return 0
}
sayHi(`ekow`)


// mordern function

const sum = (number) => {
  return number + number 
}

const rslt1 = sum(3)
console.log(rslt1);