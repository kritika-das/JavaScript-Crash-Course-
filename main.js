//log a statement using console.log( )
console.log('hello fom main js ')


// variables

 let age=25
 console.log(age)

// using const keyword
// const must be initialised and cannt be changed

 const salary=80000
 console.log(salary)

// const salary=0
// salary=80000
// console.log(Salary) shows error



// let sum=0
// sum=5
// console.log(sum)


// DATA TYPES

// STRINGS

 const name='kritika'
 const lang='Javascript'
 const channel='codeevolution'

// // integer


 const total =0
 const PI=3.14

// // boolean 

// const isPrimeNumber=true
// const isNewUser=false

// // undefined defines value not asssigned

 let result
 console.log(result)

// // const res=undefined
 const res=null

 const data=null


// // variable declaration object literal

 const person={
     'firstName':'Bruce',
  'lastName':'Wayne',
   'age':30
 }

// console.log(person.firstName)

// // arrays
 const oddNumbers=[1,2,5,7,9]
 console.log(oddNumbers[0])
 console.log(oddNumbers[2])

 let a=10

 a='viswas'
 a='true'
 console.log(a)
// // since it is dynamically type we can assign
// //  any value and then change its data type
// //  last one shows output



// // operators

// assignment operators

let x=10
let y=5

// arithmetic operator
 console.log(x-y)
 console.log(x%y)

//  comparision operators
// checks x and y are equal returns false
console.log(x==y)
// checks x and y are  not equal returns true
console.log(x!=y)

// checks x and y are equal with vale and datatype returns false
console.log(x===y)
// more 

console.log(x<=y)
console.log(x>y)

// logical operators


const isValidNumber=x>8 && 8>y
console.log(isValidNumber)


const isValidNumbers=x>20 || 8>y
console.log(isValidNumbers)

const isValid=false
console.log(!isValid)

// string operators join two strings

console.log('Bruce'+'wane')

// ternary operator

const isEven=10%2===0? 'Number is Even' :'Number is odd'
console.log(isEven)


// type conversion
// implicit conversion also known as type coercion where javascript
// itself will automatically convert the type

console.log(2+'3')
console.log(true+'3')

console.log('4'-'2')
console.log('5'-false)
console.log('5'-null)
// Explicit conversion where you manually convert the type

console.log(Number(5))
console.log(Number(''))
console.log(Number('false'))
console.log(parseInt('5'))
console.log(parseFloat('3.14'))
console.log(String(true))
console.log((500).toString())
console.log(Boolean(10))//null undifined 0 '' NaN

// Equality

// == allows coercion
// === does not allow  coercion
const var1=10
const var2='10'
console.log(var1==var2)
console.log(var1===var2)
// Conditional Statements
const num=5
if(num>0){
    console.log('no. is positive')
}

else if(num<0){
    console.log('no. is not negative')
}
else{
    console.log('number is zero')

}

const color='red'

switch(color){
    case'red':
    console.log('color is red')
    break

    case'blue':
    console.log('color is blue')
    break

    case'green':
    console.log('color is green')
    break
    default:
        console.log('not a color')
}


// looping code

// for loop

for( let i=1;i<=5;i++){
    console.log('iterator number'+i)
}

// while loop
let i=1
while(i<=5){
    console.log('iterator number while loop'+i)
    i++

}

// do while loop
let j=6
do{
    console.log('iterator number do while loop'+j)
    j++
}
while(j<=5)

// for of loop
//  for(const item of array){ // code to run}

const numArray=[1,2,3,4,5]
for(const num of numArray){
    console.log('iterator number for of loop'+num)
}

// functions

// a javascript fucbtion is a block
//  of code designed to perform a particular task

// functions are reusable as they can be defined
// once and can be called with different values
// resulting in different results

// functions help and dividde a complex problem into smaller 
// chunks and makes your program easy to understand and maintain


function greet(username){
    console.log('good morning '+username)

}

greet('brue')
greet('diana')
greet('clark')

function add(a,b){
    return a+b
}
const sum= add(5,10)
console.log(sum)

// arrow functions

const arrowSum=(a,b)=>{
    return a+b
}
const Sums=(25,25)
console.log(Sums)

// scope- scope basically determines the 
// accessibility or visibility of variables
// Block scope- acnnot be accessed outside curly braces
const Mynum=100

if(true){
    const Myname='kritika'
    console.log(Myname)
    console.log(Mynum)
}

// functionscope
function testFn(){
const Myname='batman'
console.log(Myname)
console.log(Mynum)
}
// global sope- outside any function or block accessible
// here mynum is global

