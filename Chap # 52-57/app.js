function img() {
    // Chap # 53-58 Question 2
    img = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.png","images/5.jpg","images/6.jpg","images/7.png","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.png","images/15.jpg"]
    // Chap # 53-58 Question 3
    for (var i = 0; i < img.length; i++) {
        var element = document.createElement('img');
        element.setAttribute('src',img[i]);
    // Chap # 53-58 Question 4
        element.setAttribute('onclick','getModal(this)');
        element.setAttribute('onclick','onClosedImagModal(this)');
        element.setAttribute('id','modal');
        var div = document.getElementById('div');
        div.appendChild(element)
    }
}
img()
// Chap # 53-58 Question 5 part 'A'
function getModal(e) {
    var modal = document.getElementById('modal');
    // Chap # 53-58 Question 5 part 'B'
    console.log(e.classList.add("modal-open"));
    // Chap # 53-58 Question 5 part 'C'
    console.log(e.classList.remove("modal-close"));
}
    // Chap # 53-58 Question 6 part 'A'
function onClosedImagModal(e) {
    var modal = document.getElementById('modal');
    // Chap # 53-58 Question 6 part 'B'
    console.log(e.classList.add("modal-close"));
    // Chap # 53-58 Question 6 part 'C'
    console.log(e.classList.remove("modal-open"));
    // Chap # 53-58 Question 6 part 'D'
    setTimeout(()=>{ e.style.display = "none"; }, 550)
}