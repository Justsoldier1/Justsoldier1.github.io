
var elements = document.getElementsByClassName("DropdownTitle");

window.addEventListener('load',function(){
    for(i = 0; i < elements.length;i++){
        elements[i].addEventListener('click',ClickDropdown (e));
    }
});

var clicked = false;

function ClickDropdown(e){
    
    var childobject = e.nextElementSibling;
    console.log(childobject.innerHTML);
    console.log(childobject.style.display);
    if(childobject.style.display == 'none'){
        childobject.style.display = "display";
    }else{
        childobject.style.display = "none";
    }
}

