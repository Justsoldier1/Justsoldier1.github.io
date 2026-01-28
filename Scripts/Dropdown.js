
function DropdownListeners(){
    var elements = document.getElementsByClassName("DropdownTitle");

    for(var i = 0; i < elements.length;i++){
        elements[i].addEventListener("click",ClickDropdown);
    }
}

function ClickDropdown(){
    
    if(clicked){
        this.style.display = "block";
    }else{
        this.style.display = "none";
    }
    clicked = !clicked;
}

