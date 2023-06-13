const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirm-email');

confirmEmailInput.addEventListener('input', function () {
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;

  if (email !== confirmEmail) {
    confirmEmailInput.setCustomValidity('Email addresses must match.');
  } else {
    confirmEmailInput.setCustomValidity('');
  }
});
