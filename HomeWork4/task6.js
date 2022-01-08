window.onload=function(){
    let divOne = document.getElementById('one');
    let x = 300;
    let y = 300;
    divOne.style.top = x+"px";
    divOne.style.left = y+"px";
    let myBody = document.getElementById("myBody");
  // це перероблене з ДЗ4
    
   myBody.onkeydown = function(myKey){
     if (event.code == "ArrowUp"){
       let i = 0;
       let up = setInterval(Animat,10)
         function Animat(){
            divOne.style.top = (x-i +"px");
            i+=1;
            if (i>10) { x-=10;
            clearInterval(up);
             }
          }
      }
    else if (event.code == "ArrowDown"){
     let i = 0;
     let up = setInterval(Animat,10)
       function Animat(){
          divOne.style.top = (x+i +"px");
          i+=1;
          if (i>10) { x+=10;
          clearInterval(up);
           }
        }
     }
     else if (event.code == "ArrowLeft"){
      let i = 0;
      let up = setInterval(Animat,10)
        function Animat(){
          divOne.style.left = (y-i +"px");
          i+=1;
          if (i>10) { y-=10;
           clearInterval(up);
           }
         }
      }
      else if (event.code == "ArrowRight"){
        let i = 0;
        let up = setInterval(Animat,10)
          function Animat(){
            divOne.style.left = (y+i +"px");
            i+=1;
            if (i>10) { y+=10;
             clearInterval(up);
           }
        }
     }
  }
    
}
    