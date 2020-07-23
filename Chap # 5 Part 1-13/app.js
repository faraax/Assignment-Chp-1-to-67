// Chapter - 5 part 1
var a, b , c
firstnumb = 3
secondnumb = 5
answer = firstnumb + secondnumb;
document.write("sum of " + firstnumb + " and " + secondnumb + " is " + answer + "<br>");
// Chapter - 5 part 2
var a, b , c
firstnumb = 3
secondnumb = 5
answer = firstnumb - secondnumb;
document.write("sum of " + firstnumb + " and " + secondnumb + " is " + answer + "<br>");
var a, b , c
firstnumb = 3
secondnumb = 5
answer = firstnumb * secondnumb;
document.write("sum of " + firstnumb + " and " + secondnumb + " is " + answer + "<br>");
var a, b , c
firstnumb = 3
secondnumb = 5
answer = firstnumb / secondnumb;
document.write("sum of " + firstnumb + " and " + secondnumb + " is " + answer + "<br>");
// Chapter - 5 part 3
variable = 4;
document.write ("Value after variable declaration is: " + variable + "<br>");
variable1 = variable + 1;
document.write ("Initial value: " + variable1 + "<br>");
variable2 = ++variable1;
document.write("Value after increment is: " + variable2 + "<br>");
variable3 = variable2 + 7;
document.write("Value after addition is: " + variable3 + "<br>");
variable4 = --variable3;
document.write("Value after decrement is: " + variable4 + "<br>");
variable5 = 12 / 3;
variable6 = variable5 % 4;
document.write("Value after decrement is: " + variable6 + "<br>");
// Chapter - 5 part 4
ticket = 600;
persons = prompt("Quantity of tickets you wont ?? : ");
if (persons > 0) {
    totalAmount = ticket * persons;
    document.write("Total cost to buy " + persons + " tickets to a movie is " + totalAmount + "PKR")
}else {
    alert("you have entered the wrong value!")
}
// Chapter - 5 part 5
document.write("<h1>Table of 4</h1>");
table = 1;
for (table = 1; table <= 10; table++) {
    document.write( "4 x " + table + " = " + 4*table + "<br>");
}
// Chapter - 5 part 6
var celsius = 25;
var fahrenheit =  (celsius*9/5) + 32 ;
document.write(celsius + "&#8451; is " + fahrenheit + "&#8457; <br>")
var fahrenheit = 70;
var celsius =  (fahrenheit-32) *5/9 ;
document.write(fahrenheit + "&#8457; is " + celsius + "&#8451;")
// Chapter - 5 part 7
var item1 = prompt("Type the quantity of item - 1, its cost 650PKR");
var item2 = prompt("Type the quantity of item - 2, its cost 100PKR");
document.write("<h1>Shopping Cart</h1>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
var price1 = item1 * 650;
var price2 = item2 * 100;
var shipping = 100; 
var total = price1 + price2 + shipping;
document.write("Price of item 1 is 650 <br>");
document.write("Quantity of item 1 is " + item1 + "<br>");
document.write("Price of item 2 is 100 <br>");
document.write("Quantity of item 2 is " + item2 + "<br>");
document.write("Shipping Charges 100 <br><br>");
document.write("Total cost of your order is" + total);
// Chapter - 5 part 8
document.write("<h1>Marksheet</h1>");
document.write("<br>");
var totalMarks = 980;
var gained = 804;
var percentage = gained*100/totalMarks;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + gained + "<br>");
document.write("Percentage: " + percentage + "%");
// Chapter - 5 part 9
document.write("<h1>Currency in PKR</h1>");
var dollar = 104.80;
var riyal = 28;
riyalInHand = 25;
dollarInHand = 10;
total = dollarInHand*dollar + riyalInHand*riyal;
document.write("Total Currency in PKR: " + total + "<br>");
// Chapter - 5 part 10
var numb,add,multi,div, 
numb = 10
add = numb + 5
multi = numb * 10
div = numb / 2;
document.write("<h1>Variable: " + numb + "</h1><br>" + "Addition " + add + "<br>" + "Multipy " + multi + "<br>" + "Divide " + div + "<br>")
// Chapter - 5 part 11
var currentYear = prompt("Type the current Year");
var birthYear = prompt("Type your birth Year");
var age = currentYear - birthYear;
if ( currentYear > birthYear) {
    document.write("<h1>Age Calculator</h1>");
    document.write("Current Year:" + currentYear + "<br>");
    document.write("Birth Year:" + birthYear + "<br>");
    document.write("Your Age is: " + age);
}else {
    alert("You entered wrong values!");
}
// Chapter - 5 part 12
var radius = 20;
var pi = 3.142;
circumference = 2*pi*radius;
area = pi*radius*radius;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is:" + circumference + "<br>");
document.write("The area is: " + area);
// Chapter - 5 part 13
var snack = "Kinder bueno";
var age = 25;
var maxAge = 65;
snackPerDay = 3;
answer = (maxAge - age) * snackPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + age + "<br>");
document.write("Estimated Maximum Age:" + maxAge + "<br>");
document.write("Amount of snacks per day:" + snackPerDay + "<br>");
document.write("You will need " + answer + " " + snack + " to last you until the ripe old age of " + maxAge);
