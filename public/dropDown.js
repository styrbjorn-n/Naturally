var dropdownEngaged = false;  
function dropdownAction(){
    const dropdownContainer = document.getElementById("dropdownContainer");
    if (dropdownEngaged) {
        dropdownContainer.classList.add('hidden');
        dropdownEngaged = false;
    }
    else {
        dropdownContainer.classList.remove('hidden');
        dropdownEngaged = true;
    }
}