const buttonDiv = document.getElementById('first-button');
const buttonContainer = document.getElementById('button-74')
const introText = document.getElementById('header-section');

buttonContainer.addEventListener('click', function () {
    buttonDiv.style.display = 'none';
    buttonContainer.style.display = 'none';
    if (introText.style.display === 'none' || introText.style.display === '' ) {
        introText.style.display = 'block';
    } 
    else {
        introText.style.display  = 'none';
    }
});