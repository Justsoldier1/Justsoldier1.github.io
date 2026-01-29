
var elements = document.getElementsByClassName("DropdownTitle");
var childelements = document.getElementsByClassName("DropdownElement");

for(i = 0; i < elements.length;i++){
    elements[i].addEventListener('click',function(e){
        
        //wrapping sibling getting within a valid check to prevent errors
        if(i <= childelements.length){
            var sibling = childelements[i];
            console.log(sibling.innerHTML);
            console.log(sibling.style.display);
            if(sibling.style.display == 'none'){
                siblig.style.display = "display";
            }else{
                sibling.style.display = "none";
            }
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

