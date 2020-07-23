// Chap # 26-30  part # 1
var positiveInt = prompt("Enter Any number in Positive ")
if (positiveInt > 0) {
    document.write("Number: " + positiveInt + "<br>")
    document.write("Round off value: " + Math.round(positiveInt) + "<br>")
    document.write("floor value: " + Math.floor(positiveInt) + "<br>")
    document.write("ceil value: " +Math.ceil(positiveInt) + "<br>")
}else {
    alert("Enter Positive value!")
}
// Chap # 26-30  part # 2
var negativeInt = prompt("Enter Any number in Negative ")
if (negativeInt < 0) {
    document.write("Number: " + negativeInt + "<br>")
    document.write("Round off value: " + Math.round(negativeInt) + "<br>")
    document.write("floor value: " + Math.floor(negativeInt) + "<br>")
    document.write("ceil value: " +Math.ceil(negativeInt) + "<br>")
}else {
    alert("Enter Negative value!")
}
// Chap # 26-30  part # 3 (problem)
var absolute = prompt("Enter any absolute value!")
var split = absolute.split("")
for (var i = 1;i < split.length;i++){
    var negative = split[i]
}
if (absolute > 0) {
    document.write("The absolute value of " + absolute + " is " + absolute + "<br>")
}else if (absolute < 0) {
    document.write("The absolute value of " + negative + " is " + absolute + "<br>")
}else {
    alert("enter the correct value")
}
// Chap # 26-30  part # 4
var dice = Math.random() * 6
var dice = Math.ceil(dice);
document.write("random dice value: " + dice  + "<br>")
// Chap # 26-30  part # 5
var toss = Math.random() * 2
var toss = Math.ceil(toss);
if (toss === 1){
    document.write(toss + "<br> random coin value: Tails " + "<br>")
}else {
    document.write(toss + "<br> random coin value: Heads " + "<br>")
}
// Chap # 26-30  part # 5
var random = Math.random() * 100
var random = Math.ceil(random);
document.write("random number between 1 and 100: " + random + "<br>")
// Chap # 26-30  part # 6
var weight = prompt("Enter your weight Kilograms ?")
document.write("The weight of user is " + weight + " kilograms" + "<br>")
// Chap # 26-30  part # 7
var weight = prompt("Enter your weight Kilograms ?")
document.write("The weight of user is " + weight + " kilograms" + "<br>")
// Chap # 26-30  part # 8 
var random = Math.random() * 10
var random = Math.ceil(random);
var answer = +prompt("Guess any number between 1 to 10 ??")
if (random === answer) {
    document.write("Congratulations you have guessed the correct number " + random + "<br>")
}else {
    document.write("Try again! the correct number was " + random + "<br>")
}