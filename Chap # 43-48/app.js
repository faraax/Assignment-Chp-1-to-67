// Chap # 43-48 Question 1 & 2
function purchase () {
    alert ("Thank you for purchasing");
}
// Chap # 43-48 Question 3
function students() {
    var index = [0,1,2,3];
    var name = ["Jhone","Doe","Mark","James"];
    var Class = [10,9,10,8];
    document.getElementById('stdid1').innerHTML = index[0];
    document.getElementById('std1').innerHTML = name[0];
    document.getElementById('stdclass1').innerHTML = Class[0];
    document.getElementById('stdid2').innerHTML = index[1];
    document.getElementById('std2').innerHTML = name[1];
    document.getElementById('stdclass2').innerHTML = Class[1];
    document.getElementById('stdid3').innerHTML = index[2];
    document.getElementById('std3').innerHTML = name[2];
    document.getElementById('stdclass3').innerHTML = Class[2];
    document.getElementById('stdid4').innerHTML = index[3];
    document.getElementById('std4').innerHTML = name[3];
    document.getElementById('stdclass4').innerHTML = Class[3];
}
function del(id) {
    document.getElementById('table').deleteRow(id);
}
students();
// Chap # 43-48 Question 3
function changeImg() {
    document.getElementById('img').src = "img/Xperia-1-425x425.jpg";
}
function oldImg() {
    document.getElementById('img').src = "img/Realme 6 pro.jpg";
}
var counter = 0
function increase() {
    counter++
    document.getElementById('counter').innerHTML = counter;
}
function decrease() {
    counter--
    document.getElementById('counter').innerHTML = counter;
}
