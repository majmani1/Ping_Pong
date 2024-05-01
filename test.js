var parent = document.querySelector(".parent");
var div_change = document.querySelector(".change");

var parent_style = window.getComputedStyle(parent);
var div_change_style = window.getComputedStyle(div_change);


var width_parent =  parseInt(parent_style.width);
var height_parent =  parseInt(parent_style.height);


var width_div_change =  parseInt(div_change_style.width);
var height_div_change =  parseInt(div_change_style.height);


var secondes =0

let chrono
function time()
{
    secondes += parseInt(width_parent * 10 /100)
    div_change.style.width = secondes + "px"
    if (secondes > width_parent)
    {
        pauseInterval()
        secondes = 0
    }
}
function pauseInterval() {
    clearInterval(chrono);
}
var click_souri = "up"
 
function startInterval() {
      chrono =  window.setInterval(time, 35);
}

document.addEventListener('mousedown', function(e) {
    startInterval()
    click_souri = "down"
    // return


    });


document.addEventListener('mouseup', function(e) {
    if (click_souri == "down")
    {
        div_change.style.width = 0 + "px"
        pauseInterval()
        click_souri = "up"
        secondes = 0
    }


    });

    // let chrono =  window.setInterval(time, 2);