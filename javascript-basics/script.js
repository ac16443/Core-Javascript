console.log("Hello world ==> line one");
//alert("Hello world");

//Variables
var a = "name";
let b = "Amele";
const salary = 180000;


//Data Types/ Structures: indicates how the data structured or stored or grouped or presented or organized ...
//1. Primitive Data Structure
/*- Number /integer
  - String /Character 
 -  Boolean
  - Undefined
  - NAN
  - Symbol
  - BigInt
  - Float
*/  


//2.Primitive Data Structure
/*
 Linear Data Structure
    Array
    Object
    Stack
    QueQue
    Linked List
Non Linear Data Structure
    Tree
    Hash Table
    Graph
    Trie
   
 */

//Operators 

/**
Add (+)
Multiplication (*)
Division (/)
Subtraction (-)
Assigning (=)
concatenation (+ " " +)

Comparison Operators
Compare values (==)
Compare values and types (===)
Not Equal value (!=)
Not Equal val or type (!==)
greater than (>)
less than (<)
Greater than or equal (>=)
Less than or equal (<=)


Javascript respects mathematical rules like BODMAS;
var a, b, c, d, e;
a =2 ;
b = 3;
c = a + b;
d = a * b;
e = (a + b) * (c / d);


Logical Operators 
logical and (&&)
Logical or (||)
 logical not (!)

T && T = True
T && F = F
F && F = F
F && T = T
T && T && F = F
T || T = T
T || F = T
F || F = F
F || T = T
T || T || F = T
 */

let num1 = 80;
let num2 = 15;

let sum = num1 + num2; 
 console.log("Sum: ", sum); //95

let product = num1 * num2;
console.log("Product :", product);  //1200

let division = product / sum;

console.log("Division: ", division) // 12.635

let  ab, ba, c, d, e;
ab =2 ;
ba = 3;
c = ab + ba;
d = ab * ba;
e = (ab + ba) * (c / d);

let first_Name = "Jhon";
let last_Name = "Doe";
let full_Name = first_Name + " " + last_Name;

console.log('Full Name: ', full_Name);
 

let aa = 5;
let bb = 5;
console.log(aa == bb);  //True
console.log(aa === bb); // True