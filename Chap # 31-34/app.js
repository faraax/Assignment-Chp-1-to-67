// Chap # 31-34 Part # 1
var time = new Date();
document.write(time + "<br>");
// Chap # 31-34 Part # 2
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentMonth = time.getMonth();
document.write("Current month: " + month[currentMonth] + "<br>");
// Chap # 31-34 Part # 3
var timeToStrings = time.toString();
var time = timeToStrings.split(" ")
document.write("Today is "+time[0] + "<br>");
// Chap # 31-34 Part # 4
if (time[0] === "Sat" || time[0] === "Sun") {
    document.write("It's Fun day!<br>")
}else {
    document.write("It's working day<br>")
}
// Chap # 31-34 Part # 5
var time = new Date();
var timeToStrings = time.toString();
var time = timeToStrings.split(" ")
var date = time[2]
if (date <= 15) {
    document.write("First fifteen days of the month <br>");
}else {
    document.write("Last days of the month <br>");
}
// Chap # 31-34 Part # 6
var today = new Date();
var mili = today.getTime();
var min = Math.floor(mili / 1000 / 60 / 60);
document.write("Current date: "+ today + "<br>");
document.write("Elapsed miliseconds since January 1,1970: "+ mili + "<br>");
document.write("Elapsed minutes since January 1,1970: "+ min + "<br>");
// Chap # 31-34 Part # 7
var today = new Date().getTime();
var today = new Date();
var time = today.getHours(); 
if (time >= 0 || time <= 11 ) {
    document.write(" Its PM <br>");
}else{
    document.write(" Its AM <br>");
}
// Chap # 31-34 Part # 8
var lastDate = new Date("Dec 31, 2020");
document.write(lastDate + "<br>")
// Chap # 31-34 Part # 9
var ramadanDate = new Date("June 18, 2015")
var daysPassed = new Date("Dec 6,2015");
var dif = daysPassed - ramadanDate;
document.write(dif/(1000*60*60*24) + " days have passed since 1st Ramadan 2015<br>");
// Chap # 31-34 Part # 10
var date = new Date("Jan 1,2015")
var dateMili = date.getTime();
var now = new Date().getTime();
var difference = now - dateMili / (1000*60);
document.write(difference + " secons had passed since beginning of 2015 till today <br>");
// Chap # 31-34 Part # 11 (problem in this question)
// var date = new Date()
// var hours = date.setHours(date.getHours() - 1);
// document.write("Current date: " + date + "<br>")
// document.write("1 Hours ago: " + new Date(date.getTime() -1) + "<br>")
// Chap # 31-34 Part # 12
var date = new Date()
var currYear = date.getFullYear()
var dif = currYear - 100;
document.write("Current date: " +  date + "<br>")
document.write("100 years back,it was : " + new Date(dif.toString()) + "<br>")
// Chap # 31-34 Part # 13
var dob = prompt("Enter you birth Month,Date & Year (i.e Jun 29,1995");
var birth = new Date(dob)
var dobInMili = birth.getTime();
var today = new Date();
var todayMili = today.getTime();
var diffInMili = todayMili - dobInMili;
var age = diffInMili / (1000*60*60*24*30*12)
var age = Math.floor(age);
document.write("Your age is : " + age + "<br>")
document.write("Your birth year is  : " + birth.getFullYear() + "<br>")
// Chap # 31-34 Part # 13
var customer = "Faraz Ahmed";
var month = new Date().getMonth();
var unites = 410;
var charges = 16;
var latePay = 350;
var payableWithinDate = unites * charges
var payableAfterDate = unites * charges + latePay
document.write("<h1>K-Electric bill</h1><br>")
document.write("Customer Name: " + customer + "<br>")
document.write("Month: " + month + "<br>")
document.write("Number of unites: " + unites + "<br>")
document.write("Charges per unites: " + charges + "<br><br>")
document.write("Net Amount Payable (within Due Date): " + payableWithinDate + "<br>")
document.write("Late payment surcharge: " + latePay + "<br>");
document.write("Net Amount Payable (within Due Date): " + payableAfterDate + "<br>")









