/* 1. . what is compiled and interpreted language
Compilation:-:  before the resulting cod run change the code in to machine language (0 1 0 1 1 )
Translator  is just interpret into the browser (Read Executable code) 
JIT(Just In time) => Modern Js engines use both interpretation and compilation at running time. (compile while it runs)
*/

//2. What is primitive data type and what do we mean when we say its not mutable
/** 
*Primitive Data types are:- Number, String, Boolean, Null, Undefined, symbol, Bigint 
Immutable:- means you cannot modify the existing value internally. it create new memory for new value. co
copy by value (independent  memory slot )
-Creates a brand-new, independent slot in memory.
-actual value itself is duplicated
-does not affect the original when update
 
 Non Primitive:Objects, Arrays, List...
 - Both variables point to the exact same slot in memory.

 */
//3 change the number 10 to binary and reverse it back to 10 (decimal)
  /**
    10/2=5 (remainder) =0,
    5/2=2 (remainder ) =1,
    2/2 =1 (remainder) =0,
    1/2 =0 (remainder) = 1
write remainder bottom to top backward (1010)
Decimal = (1*2 power3)+(0*2 power2)+(1*2 power1)+(o*2 power0)
        = (1*8)+(0*4)+(1*2)+(0*1)
        = 8+0+2+0
         =10;
 */

//4. How do you check the type of data in JavaScript
      console.log(typeof "Hello");//'string
      console.log(typeof 25);//'number
      console.log(typeof true);//'boolean
      console.log(typeof undefined);//'undefined
      console.log(typeof null);//'object'
      console.log(typeof NaN);//'number'
      console.log(typeof {});//'object'
      console.log(typeof []);//'object'
      console.log(Array.isArray([])); // true
      console.log(isNaN('two')); // true 'two is not a number
//5. What is the difference between null and undefined
/**
undefined: usually means a value has not been provided or not assigned.
null: usually means you intentionally set something to no value
 */

//6. What is precedence in JavaScript

 // Operator precedence determines how an expression is grounded when it contains different 
   console.log(2 + 3 * 4); // 14 = 2 + (3 * 4) =12+2= 14
   console.log((2 + 3) * 4); // 20 = (2 + 3 )= 5* 4  
//7. what is binding in JavaScript what are the keywords for binding and the difference between those bindings
//8. what are arithmetic operators, logical operators, post, and pre-increment.
//Answer:arithmetic Operators = +-*/, Logical operators && || !, Post increment x++, pre-increment ++x
//9. what is the difference between logical operators and bitwise operators
//10. what is the problem of this string "my name is ayele i went to "AKHS" university to attend higher studies"
//Answer: because the quote colsed early 
//11. Why the comparison null == undefined give true and why does the comparison null === undefined
//give a false
console.log(null == undefined)//True
//12. why the comparison of null > 0 gives false
console.log(null > 0)// False b/c it numeric relational comparison, JS converts null to 0
console.log(null >= 0) 
//13. why the comparison of null == 0 gives false
console.log(null == 0)// False = its not relational comparison is loos equality (js does not convert it to zero)
console.log(typeof(null))//object type of null is an object
console.log(Number(null))//0
console.log(undefined == null)// True
console.log(undefined === null)// false
//14. why the comparison of null >= 0 gives true
console.log(null >= 0)// True js convert null into number 0
//15. why the comparison of undefined > 0 gives false
console.log(typeof( undefined ))//undefined
console.log(Number( undefined ))//Nan
console.log(undefined > 0)// Nan > 0 false
//16. why the comparison of undefined < 0 gives false
console.log(undefined < 0)// NaN < 0= F
//17. why the comparison of undefined == 0 gives false 
console.log(undefined == 0)// false = NaN == 0
//18. What is automatic type conversion : means when JS converts a value to another type during an operation
console.log("10" - 2) //8 
//19. what is the result of (8*null) and why: js converts null in to number
console.log(8 * null )// 0 = 8 * 0
//20. what is the result of "5"-1 and why
console.log("5" - 1); // 4 = 5 - 1
console.log(Number("5") + 1);//6
//21. what is the result of "5"+1 and why concatenation
console.log("5" + 1); // "51"
//22. what is the result of ('five' * 2) and why
console.log("five" * 2); // NaN
console.log("5" * 2);    // 10
console.log(Number.isNaN("five" * 2));//True b/c its not a number
//23. what is the result of (false == 0) and why
console.log(false == 0)// true
//24. why the comparison of "5" > "radela" gives false
console.log("5" > "radela"); // false javascript compare them character by character

function myFunc(x)
{
   return x 
}
let result = myFunc(true)
console.log(result);
