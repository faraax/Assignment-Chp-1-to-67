// Chap 49 - 52 Quation # 1
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Chap 49 - 52 Quation # 2
function moreFunction() {
    var cont = document.getElementById('continue');
    var showMore = document.getElementById('showMore');
    var moreBtn = document.getElementById('more-Btn');
    if (cont.style.display === "none") {
        cont.style.display = "inline";
        moreBtn.innerHTML = "Read more"; 
        showMore.style.display = "none";
      } else {
        cont.style.display = "none";
        moreBtn.innerHTML = "Read less"; 
        showMore.style.display = "inline";
      }

}
// Chap 49 - 52 Quation # 3 problem i editing left because sir Ghous suggested
function students() {
    var name = ["Jhone","Doe","Mark","James"];
    var Class = [10,9,10,8];
    for (var i = 0; i < name.length; i++) {
      var id = "stdid" + (i+1).toString();
      var std = "std" + (i+1).toString();
      var stdClass = "stdclass" + (i+1).toString();
      document.getElementById(id).innerHTML = name.indexOf(name[i]);
      document.getElementById(std).innerHTML = name[i];
      document.getElementById(stdClass).innerHTML = Class[i];
    }
}
function del(id) {
    document.getElementById('table').deleteRow(id);
}
// function edit(id) {
//   // var std = "std" + (id).toString();
//   // var stdClass = "stdclass" + (id).toString();
//   // var std = document.getElementById(std);
//   // var stdClass = document.getElementById(stdClass);
//   // var index = std.firstChild;
//   // var indexOfClass = stdClass.firstChild;
  
// }
students()
