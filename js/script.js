function verifyEmail() {
  var email = document.getElementById('email').value;
  var confirmEmail = document.getElementById('confirm-email').value;

  if (email !== confirmEmail) {
    alert('Email addresses do not match!');
    return false;
  }
}
