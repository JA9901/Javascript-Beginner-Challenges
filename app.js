// Question number 1 
// Create a function that takes two arguments and return their sum.

function addition(num1, num2){
    console.log(num1 + num2);
}

addition(3,2)
addition(-3,-6)
addition(7,3)

// Question number 2
// Create a function that converts hours into seconds.

function hoursIntoSeconds (hours){
    console.log(hours * 3600);
}

hoursIntoSeconds(2)
hoursIntoSeconds(10)
hoursIntoSeconds(24)

// Question number 3
// Create a function that takes length and width of a rectangle and returns it's perimeter.

function calcPerimeter(length, width){
    console.log((2 * length) + (2 * width));
}

calcPerimeter(6,7)
calcPerimeter(20,10)
calcPerimeter(2,9)

// Question number 4
// Write a function that takes the base and height of a triangle and return its area.

function calcTriangleArea(base, height){
    console.log(0.5 * base * height);
}

calcTriangleArea(3,2)
calcTriangleArea(10,10)
calcTriangleArea(20,20)

// Question number 5
// Write a function accepts a string and adds 'Frontend' onto the end of it.

function appendFrontend(word){
    console.log(`${word}Frontend`);
}

appendFrontend('Apple')
appendFrontend('Banana')
appendFrontend('Orange')

// Question number 6
// Given two numbers, return true if the sum of both numbers is greater than 100.
// Otherwise, return false

function sumGreaterThan100(value1, value2){
    console.log(value1 + value2 > 100);

}

sumGreaterThan100(20,10)
sumGreaterThan100(50,60)
sumGreaterThan100(100,-50)

// Question number 7 
// Write a function that accepts a number and returns true if it is less than or
// equal to zero, otherwise returns false.

function lessThanOrEqualToZero(number){
    console.log(number <= 0);
}

lessThanOrEqualToZero(3)
lessThanOrEqualToZero(0)
lessThanOrEqualToZero(-2)

// Question number 8
// Given a boolean (true or false), return the opposite boolean.

function oppositeBoolean(string){
    console.log(!string);
}

oppositeBoolean(true)
oppositeBoolean(false)

// Question number 9
// Given ANY element, return true if it is NOT the number 0.

function isNotZero(element){
    console.log(element !== 0);
}

isNotZero(5)
isNotZero(0)
isNotZero(null)

// Question number 10
// Given two numbers, return their remainder when divided by each other.

function calcRemainder(number1, number2){
    console.log(number1 % number2);
}

calcRemainder(4,2)
calcRemainder(7,8)
calcRemainder(9,8)

// Question number 11
// Given two numbers, return true if the number is odd

function isOdd(evenNumber){
    console.log(evenNumber % 2 !== 0);
}

isOdd(1)
isOdd(2)
isOdd(3)

// Question number 12
// Create a function that takes a number argument and returns 1 if
// the number is even. If the number is odd return -1.

function booleanInteger(integer){
    console.log(integer % 2 === 0 ? 1 : -1);
}

booleanInteger(1)
booleanInteger(2)
booleanInteger(5)

// For question 12 we were able to make it one line by using ternary operator

// Question number 13
// Create a function that takes in two strings. If the first string is equal
// to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return ture,
// otherwise return false.

function isLoggedInAndSubscribed(status, sub){
    console.log(status === 'LOGGED_IN' && sub === 'SUBSCRIBED' ? true : false);
}

isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED')
isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED')
isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED')

// Question number 14
// Create a function that takes in two strings. If the first string is equal
// to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return ture,
// otherwise return false.

function isLoggedInOrSubscribed(status, sub){
    console.log(status === 'LOGGED_IN' || sub === 'SUBSCRIBED' ? true : false);
}

isLoggedInOrSubscribed('LOGGED_IN','SUBSCRIBED')
isLoggedInOrSubscribed('LOGGED_IN','UNSUBSCRIBED')
isLoggedInOrSubscribed('LOGGED_OUT','SUBSCRIBED')
isLoggedInOrSubscribed('LOGGED_OUT','UNSUBSCRIBED')