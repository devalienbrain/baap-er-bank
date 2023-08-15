document.getElementById('login-btn').addEventListener('click', function () {

  const loginId = document.getElementById('email-id');
  const password = document.getElementById('password');
  if (loginId.value === 'baap@bank.com' && password.value === 'secret') {
    document.location.href = 'bank.html';
  }
  else {
    alert('Wrong id or password!');
  }
});