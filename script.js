function parseEmbedCode() {
  var embedCode = document.getElementById("embed-code").value;

  // Example regex to extract text content
  var textContent = extractTextContent(embedCode);

  // Example regex to extract image URL
  var imageUrl = extractImageUrl(embedCode);

  // Generate post preview
  var postPreviewHTML = '<div>';
  postPreviewHTML += '<p>' + textContent + '</p>';
  if (imageUrl) {
    postPreviewHTML += '<img src="' + imageUrl + '" alt="Embedded Image">';
  }
  postPreviewHTML += '</div>';

  // Display post preview
  document.getElementById("post-preview").innerHTML = postPreviewHTML;
}

function extractTextContent(embedCode) {
  // Example regex to extract text content
  var regex = /<p>(.*?)<\/p>/g;
  var match = regex.exec(embedCode);
  if (match) {
    return match[1];
  } else {
    return 'No text content found';
  }
}

function extractImageUrl(embedCode) {
  // Example regex to extract image URL
  var regex = /<img src="(.*?)" alt="Embedded Image">/g;
  var match = regex.exec(embedCode);
  if (match) {
    return match[1];
  } else {
    return null;
  }
}
