// Get-start for form submission behavior

function jumpToForm() {
    const form = document.getElementById('get-started');
    const nameField = document.getElementById('#first_name');
    form.scrollIntoView({ behavior: 'smooth' });
    nameField.focus();
  }

// For email marketing form submission behavior
    var alertBox = document.querySelector('.alert-box');
    var closeBtn = document.querySelector('.close-btn');
    
    window.onload = function() {
      alertBox.style.display = 'block';

      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 9000);
    }

    closeBtn.addEventListener('click', function() {
      alertBox.style.display = 'none';
    });
    
    function validateEmail() {
      var emailInput = document.querySelector('email');
      var errorMessage = document.querySelector('.error-message');
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        return false;
      } else {
        errorMessage.style.display = 'none';
        return true;
      }
    }
