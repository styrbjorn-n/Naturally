var burgerEngaged = false;  
function burgerAction(){
    const burgerContainer = document.getElementById("burgerContainer");
    if (burgerEngaged) {
        burgerContainer.classList.add('hidden');
        burgerEngaged = false;
    }
    else {
        burgerContainer.classList.remove('hidden');
        burgerEngaged = true;
    }
}