
var elements = document.getElementsByClassName("DropdownTitle");

window.addEventListener('load',function(){
    for(i = 0; i < elements.length;i++){
        elements[i].addEventListener('click',ClickDropdown);
        console.log(elements[i].innerHTML);
    }
});

function ClickDropdown(){
    if(clicked){
        this.style.display = "block";
    }else{
        this.style.display = "none";
    }
    clicked = !clicked;
}

