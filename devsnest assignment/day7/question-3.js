/*3. Write a JavaScript program to get the length of a JavaScript object.
  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
var obj = Object.keys(student);
console.log(obj.length);