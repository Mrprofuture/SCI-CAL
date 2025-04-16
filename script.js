function trackDelivery() {
  const code = document.getElementById('Deliverycode').value;
  const output = document.getElementById('statusOutput');

  if (!code) {
    output.innerHTML = "Please enter a delivery code.";
    return;
  }

  // For demo: fake response
  output.innerHTML = `Tracking info for code <strong>${code}</strong>:<br>Status: GHAR KE BAHAR BANI 🛵`;
}
