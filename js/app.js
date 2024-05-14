
var old_width_window = window.innerWidth
var old_height_window = window.innerHeight

 addEventListener("resize", (event) => {
    renisialisation()
 });



 
//  addEventListener("keyup", (event) => {
//     if (event.key == ' ')
//     {

//         if (jonglage == true)
//         {
//             if (left_or_right == "left" )
//                 left_or_right = "right"
//             else
//                 left_or_right = "left"
//             jonglage = false
//             marginRightBall = old_position_ball +  25
//             jonglage_up_down = "stop"

//         }

//         player1.style.transform = "rotate(25deg)";
//         player1.style.transition = " .0s ease-in";
//        }



//  });
 var secondes = 0;

 function time()
 {
     secondes += parseInt(width_div_tir * 10 /100)
    div_tir.style.cssText = ` background-image: linear-gradient(
        to right,
        #ff4b09 5%,
        #ff000000 ${secondes}%
      );`
 }
 function pauseInterval(chrono) {
     clearInterval(chrono);
     secondes += parseInt(width_div_tir * 10 /100)

 }
 var click_souri = "up"
  
 function startInterval() {
       chrono =  window.setInterval(time, 70);
       return chrono
 }
 

 var old_position_ball_top

document.addEventListener('mousedown', function(e) {
    
         
    var x = e.clientX
        var y = e.clientY
    if (check_move_player(x,y) == 0){
        if (jonglage == false)
            chrono =   startInterval()
    // if(player1_or_player2 == "player1")
        click_souri = "down"
 
        secondes = 0
    
        player1.style.transform = "rotate(-80deg)";
        player1.style.transformOrigin = " bottom left";
        player1.style.transition = " .1s ease-in-out";
    }


    });
    var tir_speed = 0;
    document.addEventListener('mouseup', function(e) {
       
        if (click_souri == "down")
        {
            div_tir.style.cssText = ` background-image: linear-gradient(
                to right,
                #ff4b09 0%,
                #ff000000 0%
                );`
                div_tir.style.transition = " .1s ease-in-out";
                pauseInterval(chrono)
                click_souri = "up"
                    tir_speed = 40 * secondes / 100
                secondes = 0
        }
        if (player1_or_player2 == "player1" && jonglage == true)
        {
                speed += tir_speed
            if (left_or_right == "left" )
                left_or_right = "right"
            else
                left_or_right = "left"
            jonglage = false
          
            play_pause_sound()
           
            marginRightBall = old_position_ball 
            marginTopBall = old_position_ball_top //marginTop_hold - height_div_score
            jonglage_up_down = "stop"

        }
        player1.style.transform = "rotate(25deg)";
        player1.style.transition = " .0s ease-in";
 

    });

    function check_move_player(x,y)
    {
 
        if (y < height_div_score || y + height_players > height_div_score + height_table)
            return 1
        if (x < width_players + height_hold / 2 || x > width_table/2)
            return 1
        return 0
    }
    document.addEventListener('mousemove', function(e) {

    if (jonglage == true && left_or_right == "right")
    {
        return
    }
        var x = e.clientX
        var y = e.clientY
        // console.log(check_move_player(x,y))
        if (check_move_player(x,y) == 0)
        {
            table.style.cursor = "none"
            
            marginLeft_hold = x
            marginTop_hold = y
            hold.style.marginLeft= x + "px";
            hold.style.marginTop = y + "px";
            marginTopPlayer1 = y
            marginLeftPlayer1 = x

            player1.style.marginLeft = x + "px";
            player1.style.marginTop = y + "px";
        
        }
        else
            table.style.cursor = "not-allowed"
 


    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }




var container = document.querySelector(".container");
 

function showProfil()
{
    container.style.opacity = "100%"
    table.style.opacity =  "30%";
    table.style.transition = " 1s ease-in";
    container.style.transition = " 1s ease-in";

}

function hideProfil()
{
    container.style.opacity = "0"
    table.style.opacity =  "100%";

 
}









//https://codepen.io/onlyveen/pen/KmoaVR