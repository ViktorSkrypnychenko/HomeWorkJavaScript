window.onload = function(){
    let myDiv = document.getElementById("myDiv");
    myDiv.onmouseover = function(){
        if (this.style.marginLeft == "300px"){
             this.style.marginLeft = "0px"
            } else this.style.marginLeft = "300px";
    }
}