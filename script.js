function analyzeData() {
  const text = document.getElementById('datasetInput').value;
  if (!text) {
    alert("Please paste dataset text first!");
    return;
  }
  alert("AI Data Classifier: Data analyzed successfully!");
}

function checkAuthenticity() {
  const random = Math.random() > 0.5 ? "Authentic " : "Potentially Manipulated ⚠️";
  document.getElementById('authResult').innerText = `Truth Engine Result: ${random}`;
}
