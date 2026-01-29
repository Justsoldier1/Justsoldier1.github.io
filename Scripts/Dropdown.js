
var elements = document.getElementsByClassName("DropdownTitle");

for(i = 0; i < elements.length;i++){
    elements[i].addEventListener('click',function(e){
        var childobject = e.target.next;
        console.log(childobject);
        console.log(childobject.style.display);
        if(childobject.style.display == 'none'){
            childobject.style.display = "display";
        }else{
            childobject.style.display = "none";
        }
    });
}

var clicked = false;

function ClickDropdown(){
    
    console.log(childobject.innerHTML);
    console.log(childobject.style.display);
    if(childobject.style.display == 'none'){
        childobject.style.display = "display";
    }else{
        childobject.style.display = "none";
    }
}

