

function loggedIn(){
  const userId = localStorage.getItem('user_id');
  if (userId) {
    alert("You have already logged in...");
    window.location.href = '../index.html';
  }
}
loggedIn();
function loginUser(){
    const form = document.getElementById('loginForm');
    const formData = new FormData(form);
    console.log(...formData)

    fetch('https://bloodbankbd.pythonanywhere.com/donor/login/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        alert('ইমেইল অথবা পাসওয়ার্ড সঠিক নয়!')
        window.location.href = '../pages/login.html';
        throw new Error('Failed to register user');
      }
      return response.json();
  })
  .then(data => {
    localStorage.setItem("token",data.token);
    localStorage.setItem("user_id",data.user_id);
    console.log('User Login successfully:', data);
    window.location.href = '../index.html';
      // Handle success
  })
  .catch(error => {
        error.response.json().then(errorData => {
            const errorMessage = errorData.error;
            console.log(errorMessage);
            // Display error message to the user, for example:
            // const errorElement = document.getElementById('error-message');
            // errorElement.textContent = errorMessage;
          })
  });
}
