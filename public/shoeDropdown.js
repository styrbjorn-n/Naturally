var shoeDropdownEngaged = false;  
function shoeDropdownAction(){
    const shoeDropdownContainer = document.getElementById("shoeDropdownContainer");
    if (shoeDropdownEngaged) {
        shoeDropdownContainer.classList.add('hidden');
        shoeDropdownEngaged = false;
    }
    else {
        shoeDropdownContainer.classList.remove('hidden');
        shoeDropdownEngaged = true;
    }
}