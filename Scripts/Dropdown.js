
const elements = Array.from(document.getElementsByClassName("DropdownTitle"));
const childelements = Array.from(document.getElementsByClassName("content"));

for(i = 0; i < elements.length;i++){
    elements[i].addEventListener('click',function(e){
        var position = elements.findIndex(el => el === e.currentTarget);
        //wrapping sibling getting within a valid check to prevent errors
        if(position <= childelements.length){
            
            var sibling = childelements[position];
            if(sibling.style.display == "none"){
                sibling.style.display = "block";
            }else{
                sibling.style.display = "none";
            }
        }else{
            console.log("ammount of titles does not match ammount of elements. Elements is " + elements.length + "while childelements is: " + childelements.length);
        }
    });
}

var clicked = false;

