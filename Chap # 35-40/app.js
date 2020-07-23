// // Chap # 35-38 part # 1
function curTime() {
    var time = new Date()
    document.write(time + "<br>");
}
curTime();
// // Chap # 35-38 part # 2
function greeting (firstName,LastName) {
    var firstName = prompt("Enter your first name!");
    var LastName = prompt("Enter your last name!");
    var fullName = firstName + " " + LastName;
    document.write("Welcome "+fullName + "<br>");
}
greeting();
// // Chap # 35-38 part # 3
function add (a,b) {
    var sum = a + b;
    return sum;
}
var a = +prompt("enter first number to add!")
var b = +prompt("enter second number to add!")
document.write(add(a,b) + "<br>")
// Chap # 35-38 part # 4
function cal (a,b,c) {
    var a = +prompt("Enter first number to calculate!")
    var b = +prompt("Enter second number to calculate!")
    var c = prompt("Enter arithmetic operator to calculate (i.e +,-,*,/)")
    if (c=== "+") {
        sum = a + b
    }else if (c=== "-") {
        sum = a - b
    }else if (c=== "*") {
        sum = a * b
    }else if (c=== "/") {
        sum = a / b
    }else {
        alert("Error")
    } 
    return sum
}
document.write(cal() + "<br>") 
// Chap # 35-38 part # 5
function square (a,b) {
    var a = +prompt("Enter your first value to square it");
    var b = +prompt("Enter your second value to square of");
    sqr = a ** b;
    return sqr;
}
document.write(square () + "<br>");
// Chap # 35-38 part # 6
function fac (n){
    if (n > 0 && n <= 1) {
        return 1;
    }
    else {
        return n * fac(n-1)
    }
}
var a = +prompt("Enter number to find Factorials")
document.write(fac(a) + "<br>")
// Chap # 35-38 part # 7
function counter (a,b) {
    for (i = b;i <= a;i++) {
        document.write(i + "<br>")
    }
}
var a = +prompt("Enter the starting number");
var b = +prompt("Enter the ending number");
counter(b,a)
// Chap # 35-38 part # 8 (Nested function problem)
// function calculateHypotenuse (h,b,p) {
//     calculateSquare(h,b,p)
//     var a = h
//     var b = b;
//     var c = p;
//     document.write(a + " " + p + " " + p)
//     function calculateSquare(a,b,c) {
//         calculateHypotenuse();
//         var a = a**2;
//         var b = b**2;
//         var c = c**2
//     }
// }
// calculateHypotenuse(12,8,0);
// Chap # 35-38 part # 9
// function area(a,b) {
//     var ans = a*b
//     document.write(ans)
// }
// area(10,5);
// Chap # 35-38 part # 10 (problem)
function palindrome (){
    var str = "A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam."
    var strToLower = str.toLowerCase();
    var strSplit = strToLower.split(" ").reverse().join("");
    for (var i = 0; i<strSplit.length; i++) {
        if (strJoin[i] = strSplit[i]) {
            return false
        }
        return true
    }
} 
document.write(palindrome())
// Chap # 35-38 part # 11
var word = "the quick brown fox'"
function titleCase(word){
    var words = word.toLowerCase().split(" ");
    for (var i=0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    document.write( "EXAMPLE STRING: " + word + "<br>");
    document.write( "EXAMPLE OUTPUT: " + words.join(" ") + "<br>");
}
titleCase(word);
// Chap # 35-38 part # 12
var word = "Web Development Tutorial"
var wordSplit = word.split(" ")
var longWord = 0; 
function longestword(wordSplit){
    for (var i = 0;i < wordSplit.length; i++) {
        if (wordSplit[i].length > longWord ) {
            longWord = wordSplit[i].length;
        }
    }
    return longWord;
}
var chk = longestword(word)
document.write( "EXAMPLE STRING: " + word + "<br>");
document.write( "EXAMPLE OUTPUT: " + wordSplit[chk] + "<br>");
// Chap # 35-38 part # 13 (did not get the question)
// Chap # 35-38 part # 14
function calcCircumference (r,pi = Math.PI){
    var circumference = 2*pi*r;
    var circumference = circumference.toFixed(2)
    document.write("The circumference of radius of a circle is: " + r + " = " + circumference + "<br>")
}
function calcArea (r,pi = Math.PI){
    var area = pi*r**2;
    var area = area.toFixed(2)
    document.write("The area of radius of a circle is: " + r + " = " + area + "<br>")
}
var radius = 3;
calcCircumference (radius);
calcArea (radius)