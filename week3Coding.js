/* 1.	Create an array called ages that contains the 
following values: 3, 9, 23, 64, 2, 8, 28, 93.*/

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0])
console.log(ages[ages.length] = 43)
console.log(ages)
console.log(ages[ages.length - 1] -ages[0])

var total = 0
for (let i=0; i < ages.length; i++) {
 // const age = age[i]
 total = (total + ages[i])
}
console.log(total/ages.length)

/*2.	Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names together, 
separated by spaces, and print the result to the console.
*/

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var total = 0
names.forEach((name) => {
    const numOfLetters = name.length
    total = total + numOfLetters
})
const averageLetters = total/names.length
console.log('averageLetters:', averageLetters)

let allNames = ''
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const numOfLetters = name.length
    allNames = allNames + name
}

console.log(allNames)
console.log(names.join(''))

// #3 how do you access the last element of the array.

let arry = [2, 4, 6, 8, 10, 12, 14, 16];
let lastElement = arry.pop();

console.log(lastElement);

// #4 how do you access the first element of the array.

var arr = [ 1, 2, 3, 4, 5 ];
var first = arr[0];
console.log(first);

/* #5 Create a new array called nameLengths. Write a loop to iterate over
 the previously created names array and add the length of each name to the nameLengths array. */

 var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
 names.forEach((name) => {
         var nameLength = name.length
    })

 /* 6.	Write a loop to iterate over the nameLengths
  array and calculate the sum of all the elements in the array. Print the result to the console.*/

  const nameLengths = [3, 5, 3, 5, 4, 3];
  let sum = 0;
  
  for (let i = 0; i < nameLengths.length; i++) {
      sum += nameLengths[i];
  }
  console.log(sum);

/* 7.	Write a function that takes two parameters, word and n, as arguments and returns
 the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
    I would expect the function to return ‘HelloHelloHello’). */
    
    let n = 3;
let name = "Hello";

// console.log(name.repeat(n));

/* 8.	Write a function that takes two parameters, firstName and lastName,
 and returns a full name (the full name should be the first and the last name separated by a space).*/

var Person = {
    firstName: 'Josh ',
    lastName:  'Hall',
    fullName: function (){
        this.fullName = this.firstName 
        + this.lastName;
    }
};
Person.fullName();
console.log(Person.fullName);

/* 9.	Write a function that takes an array 
of numbers and returns true if the sum of all the numbers in 
the array is greater than 100. */

function greaterThan(numbers) {
    let sum = 0
    for (let i=0; i<numbers.length; i++) {
       // const number = number [i];
        sum = sum + numbers [i]
    }
    if (sum > 100) return true
}
console.log(greaterThan([100, 10]))

/* 10.	Write a function that takes an 
array of numbers and returns the average of all the elements in the array. */

arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(arry));

/*  11.	Write a function that takes two arrays of numbers 
and returns true if the average of the elements in the first 
array is greater than the average of the elements in the second array. */

function isOneBiggerThanTwo(arr1, arr2) {
let total1 =0
for (let i=0; i < arr1.length; i++){
    total1 = (total1 + arr1[i])
}
const average1 = total1/arr1.length
console.log(average1)


let total2 = 0
for (let i=0; i <arr2.length; i++) {
    total2 = (total2 + arr2[i])
}
const average2 = total2/arr2.length
console.log(average2)

//if (average1 > average2) return true
return average1 > average2
}

console.log(isOneBiggerThanTwo ([1,2,3], [4,5,6]))
console.log(isOneBiggerThanTwo([4,5,6], [1,2,3]))

/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

var moneyInPocket = 12
var isHotOutside = true 
function willBuyDrink (moneyInPocket, isHotOuside) {
    return (moneyInPocket >= 10.50 && isHotOutside == true)
}
 console.log(willBuyDrink(moneyInPocket, isHotOutside));

/* 13.	Create a function of your own that solves a problem. In comments, 
write what the function does and why you created it. */

/* write a function called payRent. Take in account 
your account balance and the due date to confirm or deny rent can be paid. */

var rentDue = 1
var accountBalance = 1000

function payRent (rentDue, accountBalance) {
    return (rentDue === 1, accountBalance >= 1500)
}
console.log(payRent(rentDue, accountBalance));