// Chap # 14-16 part # 1
var names = [];
// Chap # 14-16 part # 3
var names = ["faraz","ahmed"];
// Chap # 14-16 part # 4
var names = [1,2];
// Chap # 14-16 part # 5
var names = [true,false];
// Chap # 14-16 part # 6
var names = [1, "text" , true , 13.4];
// Chap # 14-16 part # 7
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
document.write("<h1>Qualification</h1>");
document.write(qualification[0] + "<br>");
document.write(qualification[1] + "<br>");
document.write(qualification[2] + "<br>");
document.write(qualification[3] + "<br>");
document.write(qualification[4] + "<br>");
document.write(qualification[5] + "<br>");
document.write(qualification[6] + "<br>");
document.write(qualification[7] + "<br>");
// Chap # 14-16 part # 8
var students = ["Michael","John","Tony"];
var Marks = [320,230,480];
var totalMarks = 500 ;
document.write("Score of " + students[0] + " is " + Marks[0] + "." + " Percentage: " + Marks[0]/totalMarks*100 + "%<br>");
document.write("Score of " + students[1] + " is " + Marks[1] + "." + " Percentage: " + Marks[1]/totalMarks*100 + "%<br>");
document.write("Score of " + students[2] + " is " + Marks[2] + "." + " Percentage: " + Marks[2]/totalMarks*100 + "%<br>");
// Chap # 14-16 part # 9
// problem in this question
// Chap # 14-16 part # 10
var studentsMarks = [320,230,480,120];
studentsMarks.sort(function(a, b){return a-b});
document.write(studentsMarks + "<br>");
// Chap # 14-16 part # 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var cities = cities.slice(0,3)
document.write(cities + "<br>");
// Chap # 14-16 part # 12
var arr = ["This","is","my","cat"];
document.write("<h1>Array:</h1>");
document.write(arr + "<br>");
document.write("<h1>String</h1>");
document.write(arr.join(" ") + "<br>");
// Chap # 14-16 part # 13
var devices = ["keyboard","mouse","printer","monitor"];
document.write("<h1>Devices:</h1>");
document.write(devices + "<br><br>");
document.write("Out:<br>");
document.write(devices[0] + "<br>");
document.write("Out:<br>");
document.write(devices[1] + "<br>");
document.write("Out:<br>");
document.write(devices[2] + "<br>");
document.write("Out:<br>");
document.write(devices[3] + "<br>");
// Chap # 14-16 part # 14
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
document.write (fruits + "<br>");
// Chap # 14-16 part # 15
var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];