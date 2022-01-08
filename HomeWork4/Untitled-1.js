(function(){
    let cordX = 0;
    let cordY = 0;
    document.onkeypress = function(e) {
      document.querySelector("div").innerHTML = e.keyCode;
      
      if (e.keyCode==39) {
        cordX = cordX + 10;
        document.querySelector("div").style.left = cordX + "px";      
      }
      if (e.keyCode==37) {
        cordX = cordX - 10;
        document.querySelector("div").style.left = cordX + "px";      
      }
      if (e.keyCode==38) {
        cordY = cordY - 10;
        document.querySelector("div").style.top = cordY + "px";      
      }
      if (e.keyCode==40) {
        cordY = cordY + 10;
        document.querySelector("div").style.top = cordY + "px";      
      }
    }  
  })();