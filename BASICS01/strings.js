const name = "shivam ";
const repocount =10;
console.log(name + repocount+" java");
console.log(`${name}${repocount}${" java"}`);
//ordinary way
console.log("Hello my name is "+name+ " and my repo count is"+repocount );
//Easy way to add strings 
console.log(`Hello my name is ${name} and my repo count is ${repocount} in ${"javascript"}`)

//String Operation by function

const gameName = new String('shivam-sh-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = " shivam ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://fuzzy-memory-x5rp9qq779w7h666x.github.dev/";

console.log(url.replace('666','-'))
console.log(url.includes('sunder'))// Hai ya nahi
console.log(gameName.split('-'));
