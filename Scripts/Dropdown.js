var clicked = false;
function ClickDropdown(){
    var element = document.getElementById("DropdownElement");
    if(clicked){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
    clicked = !clicked;
}