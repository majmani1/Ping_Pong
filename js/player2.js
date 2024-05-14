var move_or_stop = "stop"


addEventListener("keydown", (event) => {
    
    if (player1_or_player2 == "player2" && event.key == ' ')
    {

        player2.style.transform = "rotate(80deg)";
        player2.style.transformOrigin = " bottom left";
        player2.style.transition = " .1s ease-in-out";
        if (jonglage == false)
        chrono =   startInterval()
    click_souri = "down"

    secondes = 0
       }
    //    if (check_move_player2() == 0)
    //    {
       if (event.key == "ArrowUp")
            move_or_stop = "up"
       if (event.key == "ArrowLeft")
            move_or_stop = "left"

       if (event.key == "ArrowRight")
            move_or_stop = "right"

       if (event.key == "ArrowDown")
            move_or_stop = "down"
    //    }

 });



 
 addEventListener("keyup", (event) => {
  
    if (player1_or_player2 == "player2" && event.key == ' ')
    {

        if (jonglage == true)
            {
                    // speed += 15
                if (left_or_right == "left" )
                    left_or_right = "right"
                else
                    left_or_right = "left"
                
                play_pause_sound()
                
                marginRightBall = old_position_ball 
                marginTopBall = old_position_ball_top //marginTop_hold - height_div_score
                jonglage = false
                jonglage_up_down = "stop"
    
            }
            player2.style.transform = "rotate(-25deg)";
            player2.style.transition = " .0s ease-in";
       
       }
      
            if (event.key == "ArrowUp")
                    move_or_stop = "stop"
            if (event.key == "ArrowLeft")
                    move_or_stop = "stop"
        
            if (event.key == "ArrowRight")
                    move_or_stop = "stop"
        
            if (event.key == "ArrowDown")
                    move_or_stop = "stop"
      
       

 });



// var speed_top = (marginTopPlayer2 + height_table * 1 /100)

 function check_move_player2()
 {
    marginTopPlayer2 =  parseInt(player2_Style.marginTop);
    width_players2 =  parseInt(player2_Style.width);
    height_players2 =  parseInt(player2_Style.height);
    if (move_or_stop == "down" &&  (marginTopPlayer2 + height_table * 2 /100) + height_players2 > height_div_score + height_table)
        return 1
 
    else if (move_or_stop == "up" && (marginTopPlayer2 - height_table * 2 /100) < height_div_score)
            return 1
    else if (move_or_stop == "left" && (marginLeftPlayer2 - width_table * 2 /100) < width_table/2)
        return 1
    else if (move_or_stop == "right" && (marginLeftPlayer2 + width_table * 2 /100 + height_players2) > width_table )
        return 1
    return 0
 }

function move_player()
{
    height_hold2 =  parseInt(hold2_Style.height);
    if (check_move_player2() == 1)
    {
        return
    }
    if (move_or_stop == "down")
    {
        marginTopPlayer2 += height_table * 2 /100;
        player2.style.marginTop = marginTopPlayer2 + "px";
        hold2.style.marginTop = marginTopPlayer2 + "px";

    }
    else if (move_or_stop == "up")
    {
        marginTopPlayer2 -= height_table * 2 /100;
        player2.style.marginTop = marginTopPlayer2 + "px";
        hold2.style.marginTop = marginTopPlayer2 + "px";
    }
    else if (move_or_stop == "left")
    {
        marginLeftPlayer2 -= width_table * 1/100 
        player2.style.marginLeft = marginLeftPlayer2+ height_hold2 + "px";
        hold2.style.marginLeft = marginLeftPlayer2 + "px";
    }
    else if (move_or_stop == "right")
    {
        marginLeftPlayer2 += width_table * 1/100
        player2.style.marginLeft = marginLeftPlayer2 + height_hold2 + "px";
        hold2.style.marginLeft = marginLeftPlayer2 + "px";
    }
}


var intervalId2 = setInterval(function() {
    // move_ball()
        
        if (move_or_stop != "stop")
            move_player();
        
    }, 15);
  