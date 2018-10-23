var httpRequest;

function getText() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = showText;
  httpRequest.open('GET', 'sample.txt');
  httpRequest.send();
  console.log("Request has been sent.");
}

function showText() {
  if (httpRequest.readyState == XMLHttpRequest.DONE) {
    if (httpRequest.status == 200) {
      document.getElementById('ajax-holder').innerText = httpRequest.response;
      console.log('Added content to page.');
    }
  }
}

window.addEventListener('load', function() {
  document.getElementById('ajax-button').addEventListener('click', getText);
});
