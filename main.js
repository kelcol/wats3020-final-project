// Get modal element
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click',outsideClick)


// Function to open modal
function openModal() {
    console.log(123);
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    console.log(456);
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none'
    }
}
