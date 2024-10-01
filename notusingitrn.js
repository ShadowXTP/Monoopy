
// Responsive Drop Down
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

//EASTER EGGS





//CHANGE NATES HOUSE TO NATE
document.getElementById("nateshouse").addEventListener("click", function() {
    let originalImage = "/assets/images/pieceicons/nateshouse.png";
    let newImage = "/assets/images/NATE2.png";
    
    // Change the image to the new one
    this.src = newImage;

    // Automatically change it back after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        this.src = originalImage;
    }, 3000);
});





//Self Explanatory.
console.log("JavaScript is loading properly!");
