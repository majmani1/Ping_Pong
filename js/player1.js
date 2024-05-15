
function renisialisation()
{
    height_table =  parseInt(table_Style.height);
    width_table =  parseInt(table_Style.width);
    marginTop_table =  parseInt(table_Style.marginTop);
    marginLeft_table =  parseInt(table_Style.marginLeft);
   
    table.style.height = width_table *35/ 100 + "px"
    height_table =  width_table *35/ 100;
    width_table =  parseInt(table_Style.width);
    ball.style.height = height_table * 2 /100 + "px"
    ball.style.width = height_table * 2 /100 + "px"
    player1.style.height = height_table * 16/100 + "px";
    player1.style.width = width_table * 0.5/100 + "px"

    player2.style.height = height_table * 16/100 + "px";
    player2.style.width = width_table * 0.5/100 + "px"

    hold.style.height = height_table * 16/100 + "px";
    hold.style.width = width_table * 8 / 100 + "px"
    
    hold2.style.height = height_table * 16/100 + "px";
    hold2.style.width = width_table * 8 / 100 + "px"
    // line.style.height = height_table * 100/ 100 + "px"
    div_score.style.height = window.innerWidth * 10/100 + "px"
    div_score.style.width = window.innerWidth * 50 / 100 + "px"
    height_div_score = window.innerWidth * 50 / 100
 
 height_players =  parseInt(player1_Style.height);
//-----------------table---------------------
 height_table =  parseInt(table_Style.height);
 width_table =  parseInt(table_Style.width);
 marginTop_table =  parseInt(table_Style.marginTop);
 marginLeft_table =  parseInt(table_Style.marginLeft);
//-----------------hold----------------------
 height_hold =  parseInt(hold_Style.height);
 width_hold =  parseInt(hold_Style.width);
 height_hold2 =  parseInt(hold2_Style.height);
 width_hold2 =  parseInt(hold2_Style.width);
//-----------------score------------------------
 height_div_score =  parseInt(div_score_Style.height);
//-----------------line-------------------------
 height_line =  parseInt(line_style.height);
 marginTopline =  parseInt(line_style.marginTop);
 marginRightline =  parseInt(line_style.marginLeft);

 player1.style.height = height_table * 16/100 + "px";
 player1.style.width = width_table * 0.5/100 + "px"
 player2.style.height = height_table * 16/100 + "px";
 player2.style.width = width_table * 0.5/100 + "px"
 
 height_div_score = window.innerWidth * 10 /100


 player2.style.marginLeft = window.innerWidth * (marginLeft_hold2 ) / old_width_window + height_hold2   + "px";
 player2.style.marginTop = height_table* marginTop_hold2 / old_height_table + "px"
 player1.style.marginLeft = window.innerWidth* (marginLeft_hold ) / old_width_window   + "px";
 player1.style.marginTop = ((height_div_score + height_table )* (marginTopPlayer1 ) / (old_height_table + old_height_div_score))   + "px";
 marginLeft_hold =  parseInt(hold_Style.marginLeft);
   marginTopBall =  parseInt(ball_Style.marginTop);
     

 hold.style.marginTop = height_table* marginTop_hold / old_height_table + "px"
 hold.style.marginLeft = window.innerWidth* (marginLeft_hold ) / old_width_window + "px" 


 hold2.style.marginTop = height_table* marginTop_hold2 / old_height_table + "px"
 hold2.style.marginLeft = window.innerWidth* (marginLeft_hold2 ) / old_width_window + "px"

 marginLeft_hold2 =  parseInt(hold2_Style.marginLeft);
  marginTop_hold2 =  parseInt(hold2_Style.marginTop);

   marginTop_hold =  height_table* marginTop_hold / old_height_table;
   marginLeft_hold =  parseInt(hold_Style.marginLeft);

     old_width_table = width_table

     marginTopPlayer1 = ((height_div_score + height_table )* (marginTopPlayer1 ) / (old_height_table + old_height_div_score))  
     marginLeftPlayer1=window.innerWidth* (marginLeft_hold ) / old_width_window 

     marginTopPlayer2 =  height_table* marginTop_hold2 / old_height_table
     marginLeftPlayer2 = window.innerWidth* (marginLeft_hold2 ) / old_width_window 

     old_width_window = window.innerWidth
     old_height_window = window.innerHeight
     //---------------------------------------------
     old_height_table = height_table 
     old_height_div_score  = height_div_score    

      hold2.style.height = height_table * 16 / 100 +"px"
      height_hold2 = height_table * 16 / 100 + "px"
      hold2.style.width = height_table * 16 / 100 + "px"
      width_hold2 = height_hold2

      if (player1_or_player2=="player1")
      {
         if (jonglage == false)
         {
            ball.style.marginTop  =  height_table * marginTopBall / old_height_table + "px"
            ball.style.marginLeft  =  window.innerWidth* (marginRightBall ) / old_width_window    + "px"
            marginTopBall = height_table * marginTopBall / old_height_table
            marginRightBall = window.innerWidth* (marginRightBall ) / old_width_window
         }
         else
         {
            ball.style.marginTop = marginTop_hold - height_hold   + "px" 
            ball.style.marginLeft = marginLeft_hold  - ((height_hold* 80) /100 )   + "px"
            marginTopBall = marginTop_hold - height_hold
            marginRightBall = marginLeft_hold  - ((height_hold* 80) /100 )
   
         }
      }

      else if (player1_or_player2=="player2")
      {
         if (jonglage == false)
         {
            ball.style.marginTop  =  height_table * marginTopBall / old_height_table + "px"
            ball.style.marginLeft  =  window.innerWidth* (marginRightBall ) / old_width_window    + "px"
            marginTopBall = height_table * marginTopBall / old_height_table
            marginRightBall = window.innerWidth* (marginRightBall ) / old_width_window
         }
         else
         {
            ball.style.marginTop = marginTop_hold2 - height_hold2   + "px" 
            ball.style.marginLeft = marginLeft_hold2  + (height_hold2)   + "px"
            marginTopBall = marginTop_hold2 - height_hold2
            marginRightBall = marginLeft_hold2  + (height_hold2  )
   
         }
      }
      // marginTopBall =  parseInt(ball_Style.marginTop);
      // marginRightBall =  parseInt(ball_Style.marginLeft);
      // marginLeft_hold2 = width_table - height_players2 

   speed =    10

}