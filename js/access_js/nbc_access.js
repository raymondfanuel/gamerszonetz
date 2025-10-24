function checkPinNbc() {
  const pinInput = document.getElementById("pinInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (pinInput === "1212") {
    // Redirect or show success message
    alert("Access granted! You can now download the games.");
    window.location.href = "../nbc_game.html"; 
  } else {
    errorMessage.textContent = "Incorrect PIN. Please try again.";
  }
}