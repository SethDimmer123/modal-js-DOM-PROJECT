// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn") /*accessing the open modal button  */
const modalOverlay = document.querySelector(".modal-overlay") /**accessing the modal overlay after clicking the button */
const closeBtn = document.querySelector(".close-btn")/**closes the modal overlay */



modalBtn.addEventListener("click", function(){
    console.log(modalOverlay.classList)
    // if(modalOverlay.classList.contains('open-modal')){
    //     modalOverlay.classList.remove('open-modal')
    //     /*if the modal overlay has (contains) the class called open-modal
    //     class ALREADY then i would want to remove it*/

    //     modalOverlay.classList.remove('open-modal')
    // }
    // else{
    //     modalOverlay.classList.add('open-modal')
    // }

    // (line 27) THIS IS THE SECOND AND SHORTER WAY OF TOGGLING THE open modal button

    modalOverlay.classList.toggle('open-modal')
});





// CLOSE BUTTON TO CLOSE MODAL IS DOWN BELOW

closeBtn.addEventListener("click", function() {
    console.log(modalOverlay.classList)
    modalOverlay.classList.remove('open-modal')
})