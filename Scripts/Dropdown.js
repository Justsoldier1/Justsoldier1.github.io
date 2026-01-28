
var elements = document.getElementsByClassName("DropdownTitle");

window.addEventListener('load',function(){
    for(i = 0; i < elements.length;i++){
        elements[i].addEventListener('click',ClickDropdown);
    }
});

var clicked = false;

function ClickDropdown(){
    var childobject = this.nextSibling;

    var style = window.getComputedStyle(childobject);
    style = style.getPropertyValue('display');
    console.log(style);
    if(style == 'none'){
        childobject.style.display = "display";
    }else{
        childobject.style.display = "none";
    }
}

