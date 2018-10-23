function getText() {
  console.log("Using jQuery to execute AJAX");
  $.get('sample-html.txt', showText);
}

function showText(response) {
  console.log("Using jQuery to insert response into page");
  $('#ajax-holder').html(response);
}

function getJSON() {
  $.get('sample.json', showJSON);
}

function showJSON(response) {
  console.log('Retrieved JSON: ', response);
}

$(document).ready(function() {
  $('#ajax-button').on('click', getText);
  $('#json-button').on('click', getJSON);
})
