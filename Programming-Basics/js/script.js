//alert("Your JavaScript file is connected!")
//Question 1. Console output should be True or False
console.log(`24 greater than 3: " ${ 24 > 3}` ); // True
console.log("2 less than String type 12", 2< '12'); //True
console.log("0 is equal to 2", 0 == 2);// False
console.log("2.0 is strictly equal to 2", 2.0 === 2); // True
console.log("2.0 is strictly equal to 2 (by type & value)", 2.0 === 2); // True
console.log("2 equal to string  2 (by value)", 2 == '2'); //True
console.log("2 less than string John", 2 < "John");// False
console.log("2 greater than string John", 2 > "John"); //False
console.log("string 2 less than string 2", "2" < "2");//False
console.log("string 2 greater than string 12", "2" > "12");// True // checks character by character 
console.log("Logical operator OR T F F", 1===1 || 3 === 2 || 3 == 7);// True
console.log("Logical operator And  T T F", 1 === 1 && 2 == 2 && 3 == 7);// False
    // Precedence  priority when there is mixed logical operators (), !, &&, ||
console.log(`Mixed Logical operator T VS T n F (1 == 1 || (2 == 2 && 3 == 7) ) ${1 == 1 || 2 == 2 && 3 == 7 }`);// True
console.log(`Mixed Logical operator F n F VS T or T or T or T  ${1 == true && 0 > true || '31' > '9' || 10 > 5 || !('2' == 'two' || 1 == '1')}`);// True
// false || false || true || false
console.log(1 == Boolean('true'));
console.log(1 == Boolean('false'));
console.log(1 == Boolean('1'));
console.log(1 == Boolean(1));
console.log(1 == Boolean(0));
var flexible=10;
let flexible2 =12;
const flexible3 =15;
flexible =13 //var variable can be re-declare, reassign
console.log("var", flexible);
flexible2 = 14 //can not re declare, can re assign 
console.log("let", flexible2);
//flexible3 = 16; //can not re-assign or re-declar
console.log("Const", flexible3);
//Question 2
// 1. which expression returns true? Answer is D
   console.log("(A)", '1' === 1) //F Logic check both value & Type
   console.log("(B)", 1 == 1);// T
   console.log("(C)", 1 == 1);// T
   console.log("D and C from above");

//2. What is the value of x in this statement? Answer is B
// A/ 10, B/ true,  C/ false, D/ undefined

let x = (1 == true);
console.log(x);

//3. What is the value of y from the following statements? Answer True;
    // A/ 1, B/ true,  C/ 15, D/ true
let x1 = 10;
let y1 = (x1 > 5) && (x1 < 15) // x1 greater than 5 (10 >5 ) = True && True (10 Less than )
console.log((x1 > 5) && (x1 < 15));

//4. What is the value of x from the following statements? B
      // A/ 3, B/ 8, C/ 15, D/ 5
let xy = 5;
xy += 3;
//xy = xy + 3;
console.log(xy);
console.log(5 + "5"); //

//5. What is the value of y from the following statements? A
     //  A/ 10, B/ 11, C/ 12, D/ 13
let xx = 10;
let yy = xx++; //(xx + 1) post increment should update the value after one operation 
console.log(yy); // yy =10  then after xx will be 11 
let yyy = ++xx  // (1 + xx)
console.log(yyy);
//console.log(++xx == xx++);//t // xx=0 
//console.log(xx++ == xx++);//f //xx= 0
console.log(xx++ + xx + ++xx ); //xx=10; y= xx++ + xx + ++xx ) (10 + 11+ 12)



//6. What is the value of y in the following statements? D
      // A/ 1, B/ 2, C/ false, D/ true
let x3 = 1;
let y3 = (x3 !== 2);
console.log(x3);
console.log(y3);

//7. What is the output of (+”2”+2)? //4
//Unary plus unary operator
console.log(+'2'+2); //+ '2' convert the string 2+2=4
console.log(-'2'+2); //+ '2' convert the string 2+2=4
console.log(2 + +'2'); //+ '2' Unary plus the string 2+2=4
console.log( 2 - '2'); //+ '2' Unary plus the string 2+2=4

//8. What is the output of (7 % 3)? 1
console.log(7%3); // 
console.log(3%7); // 
console.log(7 % 10); // 7/10= 7
console.log(0 % 10); // 0
console.log(0 % 0); // NaN
console.log(7 % 0); // NaN

//9. What is the output of (2+true)? 3
console.log(2 + true); // true=1 , 2+1=3
console.log(2 + false); // true=1 , 2+0=2
console.log(2 - "Amele"); //2 -Amele(NaN)=  NaN Nan
console.log(2 + Boolean); //2 -func(NaN)=  Nan


//Question 3
/* ● Write a simple script that adds 1 and 2 and displays the result on the console
   ● Use variables a, b & c
   ● Use "let" to declare the variables
   ● Use the formula c = a + b
   ● Display the value of c on console */

let aa = 1;
let bb = 2;
let c = aa + bb;
console.log(`aa + bb = ${c}`);

// Question 4:
/* ● Create a variable to hold your first name
   ● Create another variable to hold your last name
   ● Create a third variable to hold your full name
   ● Assign the value of your first name and last name to the first two variable
   ● Use "+" to concatenate your first name and last name to assign the result to your last name's
variable
  ● Don't forget to include space between your first and last name
  ● Display the value of your full name on the console */


let firstName = "Amelework";
let lastName = "Getnet";

let fullName = `Full Name: ${firstName} ${lastName}`;
console.log(fullName);
let fullName2 = firstName + " " + lastName;
console.log(fullName2);












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


let z = 1;
let y = (z!==2);
console.log(z); 
console.log(y); 

