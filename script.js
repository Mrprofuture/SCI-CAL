function trackDelivery() {
  const code = document.getElementById('AYUSH').value;
  const output = document.getElementById('statusOutput');

  if (!AYUSH) {
    output.innerHTML = "Please enter a delivery code.";
    return;
  }

  // For demo: fake response
  output.innerHTML = `Tracking info for code <strong>${AYUSH}</strong>:<br>Status: GHAR KE BAHAR BANI 🛵`;
}
