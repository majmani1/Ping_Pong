function up_down()
{

    if (top_bottom == "buttom" && marginTopBall + height_ball + 5 <= height_table )
    {
        marginTopBall += 5;
        ball.style.marginTop = marginTopBall + "px";
    }
    else
          top_bottom = "top"
    if (top_bottom == "top" && marginTopBall >= 0)
    {

        marginTopBall -= 5;
        ball.style.marginTop = marginTopBall + "px";
    }
    else
          top_bottom = "buttom"
}


function left_right()
{
    // console.log( marginRightBall + height_ball + speed , width_table)
    if (left_or_right == "left" && marginRightBall + height_ball + speed <= width_table )
    {
        marginRightBall += speed;
        if (marginRightBall + height_ball  + speed  >= width_table )
        {
            if (default_tir == false)
                default_tir = true
                tir_speed = 0;
                speed = 10
            score_pl1++;
            result_player1.innerHTML = score_pl1;
            left_or_right = "right";
            score_change = true
        }
        ball.style.marginLeft = marginRightBall + "px";
    }
    else
    {
        left_or_right = "right"
    }
    if (left_or_right == "right" && marginRightBall >= 0)
    {
        if (marginRightBall <= 0)
        {
            score_pl2++;
            result_player2.innerHTML = score_pl2;
            left_or_right = "left";
            
            score_change = true
        }

        marginRightBall -= speed;
       
        ball.style.marginLeft = marginRightBall + "px";
    }
    else
    {
        left_or_right = "left"
        if (marginRightBall < 0)
        {
            score_pl2++;
            result_player2.innerHTML = score_pl2;
            left_or_right = "left";
            score_change = true
        }
            // clearInterval(intervalId)
    }
}

function move_ball()
{
    marginTop_hold2 =  parseInt(hold2_Style.marginTop);
      marginLeft_hold2 =  parseInt(hold2_Style.marginLeft);
      width_hold2 =  parseInt(hold2_Style.width);
      console.log(left_or_right) 
 
    if (jonglage == false && marginRightBall >= marginLeft_hold2 &&  marginRightBall < marginLeft_hold2 + width_hold2  
        && marginTopBall >= marginTop_hold2 - height_div_score && marginTopBall < marginTop_hold2 - height_div_score + height_hold2)
        {  
 
            speed = 10;
            jonglage = true
            init = false
        }

    else if (jonglage == false && (marginRightBall >= marginLeft_hold   && marginRightBall < marginLeft_hold + width_hold - (width_hold * 50 / 100))
    && marginTopBall >= marginTop_hold - height_div_score && marginTopBall < marginTop_hold - height_div_score + (height_hold  ) )//- (width_hold * 50 / 100)
    { 
        speed = 10;
 
        jonglage = true
        init = false
    }
    else
        jonglage_up_down = "up"
    if (score_change == true)
    {
        marginRightBall = width_table/2;
        marginTopBall =   (height_table/2);
        score_change = false
        // hadi ghir binma nbda nmoviha top
        ball.style.marginTop = marginTopBall + "px"
    }
    left_right();
    if (default_tir == true)
    {
        up_down();
    }
}



function move_ball_in_jonglage()
{
    marginTopBall =  parseInt(ball_Style.marginTop);
  marginRightBall =  parseInt(ball_Style.marginLeft);
    if (init == true)
    {
        if (left_or_right == "right")
        {
            if (jonglage_top_bottom == "buttom" && marginTopBall + height_ball + 5  <= marginTop_hold  - height_hold   )
            {
                jonglage_up_down = "up"
                marginTopBall += 5;
                ball.style.marginTop = marginTopBall + "px";
            }
            else
                  jonglage_top_bottom = "top"
            if (jonglage_top_bottom == "top" && marginTopBall  >= marginTop_hold - height_div_score  )
            {
                jonglage_up_down = "down"
    
                marginTopBall -= 5;
                ball.style.marginTop = marginTopBall + "px";
            }
            else
                  jonglage_top_bottom = "buttom"
        }


        else  if (left_or_right == "left")
        {
            if (jonglage_top_bottom == "buttom" && marginTopBall + height_ball + 5  <= marginTop_hold2  - height_hold2   )
            {
                jonglage_up_down = "up"
                marginTopBall += 5;
                ball.style.marginTop = marginTopBall + "px";
            }
            else
                  jonglage_top_bottom = "top"
            if (jonglage_top_bottom == "top" && marginTopBall  >= marginTop_hold2 - height_div_score  )
            {
                jonglage_up_down = "down"
    
                marginTopBall -= 5;
                ball.style.marginTop = marginTopBall + "px";
            }
            else
                  jonglage_top_bottom = "buttom"
        }

    }
}

function move_ball_jonglage(){
    if (jonglage == true)
    {

        move_ball_in_jonglage()
    }
}
function move_ball_normal()
{

        if (jonglage == false)
        {
            move_ball()

        }

}


var load;
var secondes_load = 0;
var intervalId
var speed_change = 7
load =  window.setInterval(tt, 1000);
window.clearInterval(intervalId)
function tt()
{
   secondes_load += 1

    if (secondes_load >= 2)
    {
        ball.style.display = 'block' 
          intervalId = setInterval(move_ball_normal, 15);
       window.clearInterval(load)
    }
}
 



// mochkil dyal jonglage player 2

function jonglage_ball()
{
      marginTop_hold2 =  parseInt(hold2_Style.marginTop);
  marginLeft_hold2 =  parseInt(hold2_Style.marginLeft);
    height_hold2 =  parseInt(hold2_Style.height);
  width_hold2 =  parseInt(hold2_Style.width);
    if (  left_or_right == "right" )
    {
        player1_or_player2 = "player1"

        old_position_ball = marginRightBall + (height_hold  )  ;
        old_position_ball_top = marginTopBall
       ball.style.marginTop = marginTop_hold - height_hold   + "px" 
       ball.style.marginLeft = marginLeft_hold  - ((height_hold* 80) /100 )   + "px"
    }
    else if(  left_or_right == "left" )
    {
        player1_or_player2 = "player2"
        old_position_ball = marginRightBall - (height_hold2  )  ;
        old_position_ball_top = marginTopBall
       ball.style.marginTop = marginTop_hold2 - (height_hold2 * 2)  + "px" 
       ball.style.marginLeft = marginLeft_hold2  + ((height_hold2* 100) /100 ) + ((height_hold2* 50) /100 )   + "px"
    }
    marginTopBall =  parseInt(ball_Style.marginTop);
      marginRightBall =  parseInt(ball_Style.marginLeft);

//    speed += tir_speed

   init = true
}

var play = false
var intervalId_jonglage = setInterval(function() {
    if (jonglage_up_down == "up" && jonglage == true)
    {
        
        if (init == false)
            jonglage_ball()
    if (left_or_right == "right")
    {
        player1.style.transform = "rotate(-90deg)";
        player1.style.transformOrigin = " bottom left";
        player1.style.transition = " .1s ease-in-out";

    }
    else if (left_or_right == "left")
    {
        player2.style.transform = "rotate(90deg)";
        player2.style.transformOrigin = " bottom left";
        player2.style.transition = " .1s ease-in-out";
    }
    play = false
}
else if (jonglage_up_down == "down" && jonglage == true)
{
    if (play == false)
    {
        play_pause_sound()
        play = true
    }
    if (left_or_right == "right")
    {
        player1.style.transform = "rotate(-80deg)";
        player1.style.transition = " .0s ease-in";
    }
    else if (left_or_right == "left")
    {
        player2.style.transform = "rotate(60deg)";
        player2.style.transition = " .0s ease-in";
    }


    }
}, 30);


var speeeed = 25
var intervalId = setInterval(move_ball_jonglage, speeeed);

var q = 0;

function time_jonglage()
{
    if (jonglage == true)
    {
        q += 1;
        if (q >= 5)
        {
            default_tir = false
            if (left_or_right == "left" )
                left_or_right = "right"
            else
                left_or_right = "left"
            jonglage = false
            play_pause_sound()
            marginRightBall = old_position_ball +  25
            // jonglage_up_down = "stop"
            jonglage = false
            if (player1_or_player2 == "player1")
            {
                player1.style.transform = "rotate(25deg)";
                player1.style.transition = " .0s ease-in";
            }
            else if (player1_or_player2 == "player2")
            {
                player2.style.transform = "rotate(-25deg)";
                player2.style.transition = " .0s ease-in";
            }
            q = 0
        }
    }
}

let chrono = window.setInterval(time_jonglage, 1000);