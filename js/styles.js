var ball = document.querySelector(".ball");
var table = document.querySelector(".table");
var player2 = document.querySelector(".player2");
var player1 = document.querySelector(".player1");
var result_player1 = document.querySelector(".result_player1");
var result_player2 = document.querySelector(".result_player2");
var hold = document.querySelector(".hold");
var div_score = document.querySelector(".score");
var line = document.querySelector(".line");
var div_tir = document.querySelector(".tir");

var score_pl1 = 0;
var score_pl2 = 0;

const audio = new Audio("../sound.mp3");
document.getElementById('audio1').pause();

//-----------------style------------------------
var div_tir_style = window.getComputedStyle(div_tir);
var line_style = window.getComputedStyle(line);
var div_score_Style = window.getComputedStyle(div_score);
var player1_Style = window.getComputedStyle(player1);
var table_Style = window.getComputedStyle(table);
var ball_Style = window.getComputedStyle(ball);
var hold_Style = window.getComputedStyle(hold);
//------------------BALL----------------------
var height_ball =  parseInt(ball_Style.height);
var marginTopBall =  parseInt(ball_Style.marginTop);
var marginRightBall =  parseInt(ball_Style.marginLeft);
//---------------player-----------------------
var marginTopPlayer1 =  parseInt(player1_Style.marginTop);
var marginLeftPlayer1 = parseInt(player1_Style.marginLeft)
var width_players =  parseInt(player1_Style.width);
var height_players =  parseInt(player1_Style.height);
//----------------div_tir---------------------
var width_div_tir =  parseInt(div_tir_style.width);
var height_div_tir =  parseInt(div_tir_style.height);
//-----------------table---------------------
var height_table =  parseInt(table_Style.height);
var width_table =  parseInt(table_Style.width);
var marginTop_table =  parseInt(table_Style.marginTop);
var marginLeft_table =  parseInt(table_Style.marginLeft);
//-----------------hold----------------------
var height_hold =  parseInt(hold_Style.height);
var width_hold =  parseInt(hold_Style.width);
var marginTop_hold =  parseInt(hold_Style.marginTop);
var marginLeft_hold =  parseInt(hold_Style.marginLeft);
//-----------------score------------------------
var height_div_score =  parseInt(div_score_Style.height);
//-----------------line-------------------------
var height_line =  parseInt(line_style.height);
var marginTopline =  parseInt(line_style.marginTop);
var marginRightline =  parseInt(line_style.marginLeft);



 var sound = "on"

 function Sound()
 {
    if(sound == "on")
    {
        document.querySelector(".sound").textContent = "sound"
        sound = "off"
    }
    else
    {
        sound = "on"
        document.querySelector(".sound").textContent = "mute"

    }
 }




var init = false
var jonglage_up_down = "up";

var jonglage = false;
var old_position_ball = -1;
var type_click = "up"
var direction_player = "stop"
var score_change = false
var speed_interval = 20
var top_bottom = "top"
var left_or_right = "right"
var timer_change_speeed = 0;
var jonglage_top_bottom = "buttom"
var default_tir = false
var speed =  10
var old_width_table =  width_table
height_table =  width_table * 35/ 100
table.style.height = width_table *35/ 100 + "px"
// line.style.height = height_table * 100/ 100 + "px"
table.style.height = width_table *35/ 100 + "px"
ball.style.height = height_table * 2 /100 + "px"
ball.style.width = height_table * 2 /100 + "px"
player1.style.height = height_table * 16/100 + "px";
player1.style.width = width_players * 0.5 + "px"
hold.style.height = height_table * 16 / 100 +"px"
height_hold = height_table * 16 / 100 + "px"
hold.style.width = height_table * 16 / 100
width_hold = height_hold
marginTopBall =  height_table/  2
ball.style.marginTop  = height_table/  2  +"px";
div_score.style.height = window.innerWidth * 10/100 + "px"
div_score.style.width = window.innerWidth * 50 / 100 + "px"

hold.style.height =height_table * 16 / 100 +"px"
height_hold =height_table * 16 / 100
hold.style.width =height_table * 16 / 100 + "px"
width_hold = height_hold

marginRightBall = width_table / 2  ;
renisialisation()
// line.style.height = height_table * 100/ 100 + "px"
var old_height_table = height_table
var old_height_div_score  = height_div_score


function play_pause_sound()
{
    if(sound == "on")
    {
        document.getElementById('audio1').currentTime = 0;
        document.getElementById('audio1').play();
    }
}
