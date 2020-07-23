// Chap 6-9 part-1
var a = 10;
document.write("Result: <br> The value of a is: " + a + "<br>");
document.write("********************** <br><br>");
var a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");
document.write("The value of a++ is: " + a + "<br>");
var a = ++a;
document.write("Now the value of a is: " + a + "<br><br><br>");
var a = --a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");
document.write("The value of a-- is: " + a + "<br>");
var a = --a;
document.write("Now the value of a is: " + a + "<br><br><br>");
// Chap 6-9 part-2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + --a + "<br>");
document.write("b is " + --b + "<br>");
document.write("Result is " + result + "<br><br>");
// Chap 6-9 part-3
var name = prompt("Enter you full name");
alert("welcome " + name);
// Chap 6-9 part-5
var table = prompt("Enter any table which you see")
var table = parseInt(table);
for (i = 1; i <= 10; i++) {
    if (table >= 0) {
        document.write(table + " x " + i + " = " + table * i + "<br>");
    } else {
        document.write("5 x " + i + " = " + 5 * i + "<br>");
    }
}
// Chap 6-9 part-6
var sub1 = prompt("Enter first subject!");
var sub2 = prompt("Enter second subject!");
var sub3 = prompt("Enter third subject!");
var Marks = 100;
var obtained1 = +prompt("Enter marks you obtained in " + sub1);
var obtained2 = +prompt("Enter marks you obtained in " + sub2);
var obtained3 = +prompt("Enter marks you obtained in " + sub3);
var totalMarks = Marks*3;
obtained = obtained1 + obtained2 + obtained3;
var totalPer = Math.ceil(obtained / totalMarks * 100);
if (obtained1 <= 100 && obtained2 <= 100 && obtained3 <= 100) {
    document.write("<table>")
    document.write("<tr>")
    document.write("<th>Subjects </th>")
    document.write("<th>Totals Marks </th>")
    document.write("<th>Obtained Marks </th>")
    document.write("<th>Percentage </th>")
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td>"+sub1+"</td>")
    document.write("<td>"+Marks+"</td>")
    document.write("<td>"+obtained1+"</td>")
    document.write("<td>"+ Math.ceil(obtained1/Marks*100) +"%</td>")
    document.write("<tr>")
    document.write("<td>"+sub2+"</td>")
    document.write("<td>"+Marks+"</td>")
    document.write("<td>"+obtained2+"</td>")
    document.write("<td>"+ Math.ceil(obtained2/Marks*100) +"%</td>")
    document.write("<tr>")
    document.write("<td>"+sub3+"</td>")
    document.write("<td>"+Marks+"</td>")
    document.write("<td>"+obtained3+"</td>")
    document.write("<td>"+ Math.ceil(obtained3/Marks*100) +"%</td>")
    document.write("<tr>")
    document.write("<td> </td>")
    document.write("<td><b>"+ totalMarks +"</b></td>")
    document.write("<td><b>"+ obtained +"</b></td>")
    document.write("<td><b>"+ totalPer +"%</b></td>")
    document.write("</table>")
} else {
    document.write()
}
