$(document).ready(function(){
  
  var mousePos = {};

  
 function getRandomInt(min, max) {
  

   return Math.round(Math.random() * (max - min + 1)) + min;
 
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  var cnt =0;
  var rand = 0;
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 15; //범위
      rand = Math.random() * 100;
      rand = Math.floor(rand + 100);
      console.log(rand)
    if(rand > 150)
    {
      var color = "border: 1px solid rgb("+getRandomInt(100,255)+","+getRandomInt(0,255)+","+getRandomInt(400,255)+");";
    }
    else
    {
      var color = "background: rgb("+getRandomInt(100,255)+","+getRandomInt(0,255)+","+getRandomInt(400,255)+");";
    } 
      var sizeInt = getRandomInt(5, 30); //크기
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      cnt++;
      if(cnt >14)
      {
        cnt=0;
      $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }
  }, 1);
});