
const elements = Array.from(document.getElementsByClassName("DropdownTitle"));
const childelements = Array.from(document.getElementsByClassName("content"));

for(i = 0; i < elements.length;i++){
    elements[i].addEventListener('click',function(e){
        var position = elements.findIndex(e.currentTarget);
        //wrapping sibling getting within a valid check to prevent errors
        if(position <= childelements.length){
            
            var sibling = childelements[position];
            if(sibling.style.display == 'none'){
                siblig.style.display = "display";
            }else{
                sibling.style.display = "none";
            }
        }else{
            console.log("ammount of titles does not match ammount of elements. i is: " + i + "while childelements is: " + childelements.length);
        }
    });
}

var clicked = false;

