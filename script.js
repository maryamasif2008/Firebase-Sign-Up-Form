function toggleForm() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    if (signupForm.style.display === 'none') {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    } else {
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
    }
  }
  document.getElementById('signUp').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Sign Up Data:', { name, email, password });
    alert('Sign Up Successful! Check console for data.');
    document.getElementById('signUp').reset();
    toggleForm();
  });
  document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    console.log('Login Data:', { email, password });
    alert('Login Successful! Check console for data.');
    document.getElementById('login').reset();
  });

 