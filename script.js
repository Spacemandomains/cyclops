function embedPolyCamRecording() {
  var embedCode = document.getElementById("polyCamEmbedCode").value;

  // Validate if embed code is not empty
  if(embedCode.trim() !== "") {
    // Display the embedded recording
    document.getElementById("embeddedRecording").innerHTML = embedCode;
  } else {
    // Show error message if embed code is empty
    document.getElementById("embeddedRecording").innerHTML = "<p>Please input the PolyCam embed code.</p>";
  }
}
