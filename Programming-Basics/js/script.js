//alert("Your JavaScript file is connected!")
let a =2;
console.log(typeof a);
console.log(5 + '6'); 
let num1 = 5; 
console.log("Type of num1:", typeof num1);


//&& || !

console.log("Comparison ||", 1==1 || 3===2 || 6!=5); //T
console.log("Comparison &&", 1==1 && 2===2 && 6==5); //F

//Precedency priority when multiple logic come together  (), !, &&, ||

console.log("Mixed Logic", !(1==1) && 3===2 || 6 != 5); // T

// Mutable and immutable (primitive data types are immutable)
//Primitive data types use there own memory
let num = 23;
console.log(num);
let num2 = num;
console.log(num2);
num = num + 3;
console.log(num);
console.log(num2);

//non primitive data types save by reference
let numArray = [1,2,3,4,5];
let array2 = numArray;
console.log(numArray);
numArray.push(6);
console.log(numArray);
console.log(array2);

//&  Key Points:
//& 1.copy by reference and copy by 
//& 2.Mutation in the case of Primitive & None Primitive
//& 3.what is programming language
//&  4. Low level and High level Programming language
//&  5. Compiler & interpreter 
//&  6. Syntax and semantics error
//& 7. var, let , const key words to declare variables
//& 8. Data Structures
//& 9. Primitive & non primitive
//& 10. Arithmetic operators (% + - * /, **, ++. -- )
//& 11. Comparison Operators (==, ===, !=, !==, >,< >=, <=)
//& 12. Logical Operators (&&, ||, !)
//& 13. weak type language
//& 14.Array


let x = 1;
let y = (x!==2);
console.log(x); 
console.log(y); 
