function switchStartStopButton() {
    const button = document.querySelector('.js-btn-start');

    button.addEventListener('click', () => {
        if (button.innerHTML === 'Start Recognition') {
            button.innerHTML = 'Stop Recognition';
        } else {
            button.innerHTML = 'Start Recognition';
        }
    });
}

switchStartStopButton();

function uploadImageButton() {
    const button = document.querySelector('.js-btn-upload');

    button.addEventListener('click', () => {
        button.innerHTML = 'Uploaded!';
        setTimeout(() => {
            button.innerHTML = 'Upload Image';
        }, 2000); 
    });
}
uploadImageButton();

function returnHomeButton() {
    const returnHome = document.querySelector('.js-pressable-btn');

    button.addEventListener('click', () => {
        
    });

}

returnHomeButton();