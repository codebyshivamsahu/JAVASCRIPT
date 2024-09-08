//PRIMITIVE

//number => 2 to the power 53
//bigint
//string =>""
//boolean =>true/false
//undifind =>undifind
//symbol =>unique
//null => standalone khali value()

// NON_PRIMITIVE

// Array, Objects, Functions


myFullName = 'Shivam Sahu';
console.log(myFullName);


let college = "MCE Motihari";
let University = "BEU";

let num = 782;

let myBool1 = true;
let myBool2 = false;

const id = Symbol('123')      //Symbol is use to differentiate and unique.
const anotherId = Symbol('123')

console.log(id === anotherId);// not equal due to symbol false
console.log(typeof anotherId);

const language=["hindi","english","urdu","angika","bhojpuri","avadhi"];

let myobj ={
    name:"Shivam",
    age:21,
    city:"Bhagalpur",
    state:"Bihar"
}

const myfunction = function(){
    console.log("hello world");
    
}


console.log(college,University);
console.log(num);
console.log(myBool1);
console.log(myBool2);
console.log(language);



