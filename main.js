document.addEventListener('DOMContentLoaded', function() {
    var heart = document.querySelector('.heart');
    var popupMessage = document.getElementById('popup-message');
    var popup = document.getElementById('popup');
    var closeButton = document.querySelector('.close');
    var okButton = document.getElementById('popup-button');
  
    heart.addEventListener('click', function() {
      showMessage('не рофл');
    });
  
    closeButton.addEventListener('click', closePopup);
    okButton.addEventListener('click', function() {
      closePopup();
    });
  
    function showMessage(message) {
      popupMessage.textContent = message;
      popup.style.display = 'block';
    }
  
    function closePopup() {
      popup.style.display = 'none';
    }

    }
);
