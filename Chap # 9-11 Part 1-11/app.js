// // Chap # 9-11 part-1
var city = prompt("Enter city name");
var city = city.toLowerCase();
if (city == "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to city of " + city);
}
// // Chap # 9-11 part-2
var gender = prompt("Enter your gender (MALE or FEMALE");
var gender = gender.toLowerCase();
if (gender == "male") {
    alert("Good Morning Sir.");
} else if (gender == "female") {
    alert("Good Morning Ma’am.");
} else {
    alert("Error! Enter the correct value");
}
// // Chap # 9-11 part-3
var color = prompt("Enter color (RED YELLOW or GREEN");
var color = color.toLowerCase();
if (color == "red") {
    alert("Must Stop");
} else if (color == "yellow") {
    alert("Ready to move");
} else if (color == "green") {
    alert("Move now");
} else {
    alert("Error! Enter the correct value");
}
// // Chap # 9-11 part-4
var fuel = +prompt("Enter remaining fuel of the car");
if (fuel > 0.25) {
    alert("you are good to go!");
} else {
    alert("Please refill the fuel in your car!");
}
// // Chap # 9-11 part-5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// // Chap # 9-11 part-6
var sub1 = +prompt("Enter first subjects marks!");
var sub2 = +prompt("Enter second subjects marks!");
var sub3 = +prompt("Enter third subjects marks!");
var total = sub1 + sub2 + sub3;
var per = total / 300 * 100;
var per = Math.ceil(per);
if (per >= 80 && per <= 100) {
    document.write("<h1>Mark Sheet</h><br>");
    document.write("Total marks : 300<br>");
    document.write("Total marks : " + total + "<br>");
    document.write("Percentage : " + per + "%<br>");
    document.write("Grade : A-1 <br>");
    document.write("Remarks : Excellent <br>");
}else if (per >= 70 && per <=80) {
    document.write("<h1>Mark Sheet</h><br>");
    document.write("Total marks : 300<br>");
    document.write("Total marks : " + total + "<br>");
    document.write("Percentage : " + per + "%<br>");
    document.write("Grade : A <br>");
    document.write("Remarks : Good <br>");
}else if (per >= 60 && per <=70 ) {
    document.write("<h1>Mark Sheet</h><br>");
    document.write("Total marks : 300<br>");
    document.write("Total marks : " + total + "<br>");
    document.write("Percentage : " + per + "%<br>");
    document.write("Grade : B <br>");
    document.write("Remarks : You need to improve <br>");
}else if (per < 60 && total >= 0) {
    document.write("<h1>Mark Sheet</h><br>");
    document.write("Total marks : 300<br>");
    document.write("Total marks : " + total + "<br>");
    document.write("Percentage : " + per + "%<br>");
    document.write("Grade : Fail <br>");
    document.write("Remarks : Sorry <br>");
}else {
    alert("Error! Kindly Enter the correct values");
}
// // Chap # 9-11 part-7
var number = 7;
var guess = +prompt("guess a number from (1 to 10) type only number")
if (guess === number) {
    alert("Bingo! Correct answer.");
}else if (guess === number - 1 || guess === number + 1 ) {
    alert("Close enough to the correct answer.");
}else {
    alert("Wrong answer!");
}
// Chap # 9-11 part-8
 var inp = +prompt("Type any number check if it dividable if 3 or not")
modulus = inp % 3;
if (modulus === 0) {
    alert(inp + " divisable by 3");
}else if (modulus > 0) {
    alert(inp + " is not divisable by 3");
}else {
    alert("There is some error in you input!");
}
// Chap # 9-11 part-9
var numb = prompt("Enter any number to check odd or even number")
numb = numb % 2 
if (numb == 0) {
    alert("The number you enter if even number");
}else if (numb >= 1) {
    alert("The number you enter if odd number");
}else {
    alert("Error! wrong value");
}
// Chap # 9-11 part-10
var t = +prompt("Enter the Tempreture!")
if (t >= 40) {
        alert("It is too hot outside.");
    }else if (t >= 30 && t <=40) {
        alert("The Weather today is Normal.");
    }else if (t >= 20 && t <=30 ) {
        alert("Today’s Weather is cool.");
    }else if (t <= 10) {
        alert("OMG! Today’s weather is so Cool.”");
    }else {
        alert("Error! Kindly Enter the correct values");
    }
// Chap # 9-11 part-11
var firstnumb = +prompt("Enter the first value to calculate");
var secondnumb = +prompt("Enter the second value to calculate");
var operation = prompt("Enter the operator +,-,*,/,% to calculate");
if (operation === "+") {
    ans = firstnumb + secondnumb;
    alert("Addtion of " + firstnumb + " + " + secondnumb  + " = " + ans);
}else if (operation === "-") {
    ans = firstnumb - secondnumb;
    alert("Subtration of " + firstnumb + " - " + secondnumb  + " = " + ans); 
}else if (operation === "*") {
    ans = firstnumb * secondnumb;
    alert("Multipication of " + firstnumb + " * " + secondnumb  + " = " + ans); 
}else if (operation === "/") {
    ans = firstnumb / secondnumb;
    alert("Division of " + firstnumb + " / " + secondnumb  + " = " + ans); 
}else if (operation === "%") {
    ans = firstnumb % secondnumb;
    alert("Modulus  of " + firstnumb + " % " + secondnumb  + " = " + ans); 
}else {
    alert("Invalid value"); 
}