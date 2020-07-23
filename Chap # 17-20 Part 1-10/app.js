// // Chap # 17-20 part-1
var arr = [0,1,2,3]
var arr1 = [1,0,1,2]
var arr3 = [2,1,0,1]
// Chap # 17-20 part-2
var arr = [0,1,2,3]
var arr1 = [1,0,1,2]
var arr3 = [2,1,0,1]
document.write(arr + "<br>");
document.write(arr1 + "<br>");
document.write(arr3 + "<br>");
// // Chap # 17-20 part-3
var i = 1;
for (i=1;i<=10;i++) {
    document.write(i + "<br>");
 }
// // Chap # 17-20 part-4
var table = +prompt("Type which table you want to see on the screen");
var range = +prompt("Type the length of the table you want to see on the screen");
for (i=1;i<=range;i++) {
    document.write(table + " x " + i + " = " + table*i + "<br>");
}
// // Chap # 17-20 part-5
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var i;
for (i=0;i < fruits.length; i++) {
    document.write(fruits[i] +"<br>")
}
for (i=0;i < fruits.length; i++) {
    document.write(fruits.indexOf[i] +"<br>")
}
// // Chap # 17-20 part-6
var i;
document.write("<h1>Counting:</h1>")
for (i=1;i <= 15; i++) {
    document.write(i +",")
}
var i;
document.write("<h1>Reverse Counting:</h1>")
for (i=10;i > 0; i--) {
    document.write(i +",")
}
document.write("<h1>Even</h1>")
for (i=0;i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i +",")
    }
}
document.write("<h1>Odd</h1>")
for (i=0;i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i +",")
    }
}
document.write("<h1>Series</h1>")
for (i=2;i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i +"k,<br>")
    }
}
// Chap # 17-20 part-7
a = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am?");
var search = search.toLowerCase();
if (a.indexOf(search) !== -1) {
    document.write(search + " is <b>available</b> at index " + a.indexOf(search)  +" in our bakery")
}else {
    document.write("We are sorry: " + search + " <b>not available</b> in our bakery")
}
// Chap # 17-20 part-8
var arr = [24,53,78,91,12];
var max = Math.max.apply(null, arr)
document.write("<br>" + max);
// Chap # 17-20 part-9
var arr = [24,53,78,91,12];
var min = Math.min.apply(null, arr)
document.write("<br>" + min + "<br><br>");
// Chap # 17-20 part-10
var arr = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
var i;
for (i = 0; i < arr.length; i++) {
    document.write(arr[i]*5 + "<br>");
}