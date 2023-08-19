document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById("signup-button");
    
    signupButton.addEventListener("click", function() {
      // Redirect the user to the sign-up page
      window.location.href = "signup.html";
    });
  });
  