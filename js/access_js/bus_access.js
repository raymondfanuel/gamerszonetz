function checkPinBus() {
  const pinInput = document.getElementById("pinInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (pinInput === "1313") {
    // Redirect or show success message
    alert("Access granted! You can now download the games.");
    window.location.href = "../bus_game.html"; // change this to your actual games page
  } else {
    errorMessage.textContent = "Incorrect PIN. Please try again.";
  }
}