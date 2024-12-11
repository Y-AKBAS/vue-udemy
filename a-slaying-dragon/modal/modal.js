const modal = document.querySelector('#dialog');
const openButton = document.querySelector('#open-dialog');
const closeButton = document.querySelector('#close-dialog');

openButton.addEventListener('click', () => modal.showModal());
closeButton.addEventListener('click', () => modal.close());

modal.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
    
    if (!isInDialog) {
        dialog.close(); 
    }
})