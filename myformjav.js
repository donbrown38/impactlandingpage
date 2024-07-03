const form = document.querySelector('#myForm');
const successMessage = document.querySelector('#successMessage');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const firstName = form.querySelector('#first_name').value.trim();
  const lastName = form.querySelector('#last_name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const companyName = form.querySelector('#company_name').value.trim();
  const website = form.querySelector('#website').value.trim();

  if (!firstName || !lastName || !email) {
    alert('Please fill in all required fields');
    return;
  }

  successMessage.style.display = 'block';

  setTimeout(() => {
    successMessage.style.display = 'none';
    form.reset();
  }, 5000);
});

successMessage.querySelector('.close-btn').addEventListener('click', event => {
  event.preventDefault();
  successMessage.style.display = 'none';

  form.reset();
});