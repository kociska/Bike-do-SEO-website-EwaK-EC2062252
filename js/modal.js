// modal window with image Sorry on 3 Bestsellers buttons "Contact"

let modal = document.getElementById("modalSorry");
let modal2 = document.getElementById("modalSorry2");
let modal3 = document.getElementById("modalSorry3");



let btn = document.getElementById("modalBtn");
let btn2 = document.getElementById("modalBtn2");
let btn3 = document.getElementById("modalBtn3");

let span = modal.querySelector(".close");
let span2 = modal2.querySelector(".close");
let span3 = modal3.querySelector(".close");


btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}



span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}


//when user clicks anywhere outside modal-it closes modal. 

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else  if (event.target == modal3) {
        modal3.style.display = "none";
    }
}