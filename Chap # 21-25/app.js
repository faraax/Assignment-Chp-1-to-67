//  Chap # 21-25 Part # 1
var firstName = prompt("Enter you first name!");
var lastName = prompt("Enter you last name!");
var fullName = firstName + " " + lastName;
var fullName = fullName.toUpperCase();
alert("Welcome " + fullName);
// Chap # 21-25 Part # 2
var favMobile = prompt("Enter your favorite mobile with model number!");
document.write("My favorite phone is: " + favMobile + "<br>");
var favMobile = favMobile.length;
document.write("Length of string: " + favMobile + "<br>");
//  Chap # 21-25 Part # 3
var word = "Pakistani"
document.write("String: " + word + "<br>");
var index = word.indexOf("n");
document.write("Index of 'n': " + index + "<br>");
// Chap # 21-25 Part # 4
var word = "Hello World"
document.write("String: " + word + "<br>");
var index = word.lastIndexOf("l");
document.write("Index of 'l': " + index + "<br>");
// Chap # 21-25 Part # 5
var word = "Pakistani"
document.write("String: " + word + "<br>");
var char = word.charAt(3);
document.write("Character at index 3: " + char + "<br>");
// Chap # 21-25 Part # 6
var firstName = prompt("Enter you first name!");
var lastName = prompt("Enter you last name!");
var fullName = firstName.concat(lastName);
var fullName = fullName.toUpperCase();
alert("Welcome " + fullName);
// Chap # 21-25 Part # 7
var city = "Hyderabad";
var replacedCity = city.replace(/Hyder/g, 'Islam');
document.write("City: " + city + "<br>")
document.write("After replacement: " + replacedCity + "<br>")
//  Chap # 21-25 Part # 8
var a = "Ali and Sami are best friends. They play cricket and football together.";
var b = a.replace(/and/g, '&');
document.write("Sentence: " + a + "<br>")
document.write("After replacement: " + b + "<br>")
//  Chap # 21-25 Part # 9
var numb = "472";
document.write("Value: " + numb + "<br>");
document.write("Type: " + typeof (numb) + "<br>");
var numb = parseInt(numb);
document.write("Value: " + numb + "<br>");
document.write("Type: " + typeof (numb) + "<br>");
//  Chap # 21-25 Part # 10
var char = prompt("Enter any word to convert to upper case");
document.write("User input: " + char + "<br>");
var char = char.toUpperCase();
document.write("Upper case " + char + "<br>");
// Chapt # 21-25 part # 11
var word = prompt("Enter any one word to change it to title case! (i.e. Title Case");
var words = word.toLowerCase().split(" ");
for (var i=0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    document.write( "User input: " + word + "<br>");
    document.write( "Title case: " + words.join(" ") + "<br>");
}
// Chapt # 21-25 part # 12
var num1 = 33.36;
var num1 = num1.toString();
var numb1 = num1.replace(".","");
document.write("Number: " + num1 + "<br>");
document.write("Result: " + numb1 + "<br>");
// Chapt # 21-25 part # 13
var word = prompt("Enter any one word!");
var symbol = ["!",".",",","@"]
for (var i=0; i < symbol.length; i++) { 
    var j = symbol[i];
    if (word.indexOf(j) !== -1){
        alert("Please enter a valid username!")
    }
}
//  Chap # 21-25 Part # 14
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am?");
var search = search.toLowerCase();
if (a.indexOf(search) !== -1) {
    document.write(search + " is <b>available</b> at index " + a.indexOf(search) + " in our bakery")
} else {
    document.write("We are sorry: " + search + " <b>not available</b> in our bakery<br>"); }
// Chap # 21-25 Part # 15
var pass = prompt("Type the password: ");
var password = pass.charAt(0) ;
if (password >= 0 || pass.length <= 5 ) {
    document.write("Entered password:" + pass + "<br>")
    document.write("Password can not begin with a number & it should contain atleast 6 character : <br>")
    document.write("Please enter valid password <br>")
} else if (pass.length >= 5) {
    document.write("Entered password:" + pass + "<br>")
    document.write("Password you entered is valid <br>")
}
// Chap # 21-25 Part # 16
var university = "University of Karachi";
var split = university.split("")
for (i = 0; i < split.length;i++) {
    var j = split[i];
    document.write(j + "<br>")
    }
// // Chap # 21-25 Part # 17
var country = "Pakistan";
var len = country.length;
var lastChar = country.charAt(len-1);
document.write("User input: " + country + "<br>")
document.write("Last character of input: " + lastChar + "<br>")
// // Chap # 21-25 Part # 18
var text = "The quick brown fox jumps over the lazy dog";
var textToLower = text.toLowerCase();
var word = textToLower.split(" ");
var count = 0;
for (var i=0;i<word.length;i++) {
    var chk = word[i];
    if (chk == "the") {
        count++;
    }
}
document.write("Text:" + text + "<br>")
document.write("There are " + count + " occurrence(s) of word 'the' <br>")