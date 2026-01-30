
var elements = document.getElementsByClassName("DropdownTitle");
var childelements = document.getElementsByClassName("content");

for(i = 0; i < elements.length;i++){
    elements[i].addEventListener('click',function(e){
        
        //wrapping sibling getting within a valid check to prevent errors
        if(i <= childelements.length){
            console.log("ammount of titles matches ammount of elements");
            console.log(i);
            var sibling = childelements[i];
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

