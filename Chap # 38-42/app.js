// Chap 38-42 Question 1 
function power(a,b) {
    var power =Math.pow(a,b);
    document.write(power + "<br>");
}
var powOf = +prompt("Enter a number to find the of!")
var powTo = +prompt("Enter a number to find the to!")
power(powOf,powTo);
// // Chap 38-42 Question 2
function leapYear() {
    var year = +prompt("Enter a year between 1582 to onwords to find the leap year")
    var leapYear = year % 4;
    if (leapYear === 0) {
    document.write(year + " is leap year! <br>");
    }else {
    document.write(year + " is  not leap year! <br>");
    }
}
leapYear();
// 8-42 Question 3
var a = 7
var b = 8
var c = 8
function s () {
    var s = a + b + c;
    var s = s / 2;
    return s;
}
function area () {
    var val = s();
    var area = val * (val - a) * (val - b) * (val - c);
    document.write("the area of triangle is " + val + "<br>");
}
area ();
// 8-42 Question 4
var sub1 = +prompt("Enter the marks of the subject 1?")
var sub2 = +prompt("Enter the marks of the subject 2?")
var sub3 = +prompt("Enter the marks of the subject 3?")
var totalMarks = 300;

function precentage () {
    var gainedMarks = sub1 + sub2 + sub3;
    var per = gainedMarks * 100;
    var per = per / totalMarks;
    return per; 
}
function average () {
    var gainedMarks = sub1 + sub2 + sub3;
    var avg = gainedMarks / 3;
    return avg;
}
function mainFunction() {
    var per = precentage ();
    var avg = average ();
    var gainedMarks = sub1 + sub2 + sub3;
    document.write("Marks of first Subject " + sub1 + "<br>")
    document.write("Marks of second Subject " +sub2 + "<br>")
    document.write("Mark's of third Subject " +sub3 + "<br>")
    document.write("You average marks are " + Math.floor(avg) + "<br>")
    document.write("You have gained " + Math.floor(per) + " %<br>")
}
mainFunction()
// 8-42 Question 5 did not get the question

// Chap 38-42 Question 6
var str = "i am the best programmer in the world!";
var str = str.toUpperCase();
document.write("Before<br>");
document.write(str + "<br>");
var str = str.split("");
for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "A": delete str[i];
            break;
        case "E": delete str[i];
            break;
        case "I": delete str[i];
            break;
        case "O": delete str[i];
            break;
        case "U": delete str[i];
            break;
    }
}
document.write("After<br>");
document.write(str.join(""));
// 8-42 Question 7 problem

// Chap 38-42 Question 8
var conversion = +prompt("Enter the distance in Kilometer");
function Mainfuction() {
    var toMeters = conversionToMeters();
    var toFeets = conversionToFeets();
    var toInches =  conversionToInches();
    var toCentimeters  = conversionToCentimeters();
    document.write("From " + conversion + " Kilometer to Meters is " + toMeters + "<br>");
    document.write("From " + conversion + " Kilometer to Feets is " + toFeets + "<br>");
    document.write("From " + conversion + " Kilometer to Inches is " + toInches + "<br>");
    document.write("From " + conversion + " Kilometer to Centimeters is " + toCentimeters + "<br>");
}
function conversionToMeters() {
    var toMeters = conversion * 1000;
    return toMeters;
}
function conversionToFeets() {
    var toFeets = conversion * 3280.84 ;
    return toFeets;
}
function conversionToInches() {
    var toInches = conversion * 39370.1;
    return toInches;
}
function conversionToCentimeters() {
    var toCentimeters = conversion * 100000;
    return toCentimeters;
}
Mainfuction();
// Chap 38-42 Question 9
var payPerMin = 0.2;
function overTimeInMin () {
    var timeInMin = +prompt("Enter Total time of employee in Min");
    var extraTime = timeInMin - 40;
    if (extraTime >= 1) {
        var cash = extraTime * payPerMin;
        document.write("Overtime is RS: " + cash);
    }else {
        document.write("Overtime is RS: 0");
    }
}
overTimeInMin ()
// Chap 38-42 Question 10
var withdrawn = +prompt("Enter the cash amount to withdrawn");
var tenNote = 10;
var fiftyNote = 50;
var hundredsNote = 100;
// for hundreds Note
var hundreds = Math.floor(withdrawn / hundredsNote);
var remaining = withdrawn - (hundreds * hundredsNote);
// for fifty Note
var fiftys = Math.floor(remaining / fiftyNote);
var remaining = remaining - (fiftys * fiftyNote);
// for ten Note
var tens = Math.floor(remaining / tenNote);
var remaining = remaining - (tens * tenNote);
console.log(remaining);
document.write("Total amount you entered is RS: " + withdrawn + "<br>")
document.write("================Denominations================" + "<br>")
document.write("Hundred notes are " + hundreds + " = RS: " + hundreds*hundredsNote + "<br>")
document.write("Fifty notes are " + fiftys + " = RS: " + fiftys * fiftyNote + "<br>")
document.write("Ten notes are " + tens + " = RS: " + tens*tenNote + "<br>")
document.write("Coins are = " + remaining + "<br>")
document.write("================Total Amount================" + "<br>")
document.write("Total Amount is RS: " + withdrawn + "<br>")
