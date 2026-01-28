
var elements = document.getElementsByClassName("DropdownTitle");

window.addEventListener('load',function(){
    for(i = 0; i < elements.length;i++){
        elements[i].addEventListener('click',ClickDropdown);
    }
});

var clicked = false;

function ClickDropdown(){
    var child = this.child;

    var style = window.getComputedStyle(child);
    style = style.getPropertyValue('display');
    console.log(style);
    if(style == 'none'){
        child.style.display = "display";
    }else{
        child.style.display = "none";
    }
}

