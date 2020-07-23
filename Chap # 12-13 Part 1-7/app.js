// Chap # 12-13 part 1
// problem in this question
// Chap # 12-13 part 2
var numb1 = +prompt("Enter first number! ");
var numb2 = +prompt("Enter second number! ");
if (numb1 > numb2) {
    alert( numb1 + " greater then " + numb2);
}else if (numb2 > numb1) {
    alert( numb2 + " greater then " + numb1);
}else {
    alert("invalid value!");
}
// // Chap # 12-13 part 3
var num = +prompt("Enter any number! ");
if (num > 1) {
    alert( num + " is the positive number ");
}else if (num <= -1) {
    alert( num + " is the negetive number ");
}
else {
    alert("invalid value! or the value is zero!");
}
// Chap # 12-13 part 4
var a,e,i,o,u 
a = "a"
e = "e"
i = "i"
o = "o"
u = "u";
var value = prompt("Enter any 1 alphabet between (a to z)");
var value = value.toLowerCase();
var len = value.length;
if (value === "a" && len === 1) {
    alert("It is a vowel!")
}else if (value === "e" && len === 1) {
    alert("It is a vowel!")
}else if (value === "i" && len === 1) {
    alert("It is a vowel!")
}else if (value === "o" && len === 1) {
    alert("It is a vowel!")
}else if (value === "u" && len === 1) {
    alert("It is a vowel!")
}else if (len === 1) {
    alert("It is not a vowel!") 
}else if (len > 1) {
    alert("you have entered more then 1 aphabet")
}else {
    alert("invalid value entered!")
}
// // Chap # 12-13 part 5
var pass = "google";
var check = prompt("Please enter your password");
if (check === pass) {
    alert("Correct! The password you entered matches the original password!")
}else {
    alert("Incorrect password!")
}
// // Chap # 12-13 part 6
var greeting; 
var hour = 13;
if (hour < 18) {
     alert(greeting = "Good day");
}else{
    alert(greeting = "Good evening");
}
// Chap # 12-13 part 7
var timming = 2400;
var time = prompt("enter 4 digits current time in 24 clock (i.e 1700 = 7pm)")
if (time >= 0000 && time < 1200) {
    alert("Good Morning")
}else if (time >= 1200 && time < 1700) {
    alert("Good afternoon")
}else if (time >= 1700 && time < 2100) {
    alert("Good evening")
}else if (time >= 2100 && time < 2359) {
    alert("Good night")
}