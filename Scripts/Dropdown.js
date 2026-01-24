var clicked = false;
function ClickDropdown(){
    if(clicked){
        document.getElementById("DropdownElement").innerHTML = "Dumb";
    }else{
        document.getElementById("DropdownElement").innerHTML = "JS";
    }
    !clicked;
}