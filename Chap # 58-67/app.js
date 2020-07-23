// Chap # 58-67 Question 1 Part-2
var getElements = document.getElementById('main-content');
console.log("Chap # 58-67 Question 1 Part-3")
console.log(getElements.innerHTML);
// Chap # 58-67 Question 1 Part-4 problem
var getElementsByClass = document.getElementsByClassName('render');
document.write(getElementsByClass.innerHTML = "faraz");
var createElement = document.createTextNode(getElementsByClass)
console.log(createElement);
// Chap # 58-67 Question 1 Part-5
document.getElementById('first-name').value = "Faraz" + "<br>";
// Chap # 58-67 Question 1 Part-6
document.getElementById('last-name').value = "Ahmed";
// Chap # 58-67 Question 2 Part-1
document.write(document.getElementById('form-content').nodeType + "<br>");
// Chap # 58-67 Question 2 Part-2
var lstName = document.getElementById('lastName').nodeType;
document.write(lstName + "<br>");
var lstNameChild = document.getElementById('lastName').firstChild.nodeType;
document.write(lstNameChild + "<br>");
// Chap # 58-67 Question 2 Part-3 problem
var lstNameUpdate = document.getElementById('lastName').firstChild;
lstNameUpdate.innerHTML = document.getElementById('first-name').value + "<br>" 
// Chap # 58-67 Question 2 Part-4
var typeOf =  document.getElementById('email');
typeOf.nodeType;
