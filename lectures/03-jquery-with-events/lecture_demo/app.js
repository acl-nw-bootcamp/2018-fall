// function addMenuItem(textForItem) {
//   var newItem = document.createElement('li');
//   newItem.innerText = textForItem;
//   var menu = document.getElementById('main-menu');
//   menu.appendChild(newItem);
// }

function addMenuItemUsingJQuery(textForItem) {
  // var $newItem = $('<li>').text(textForItem);
  $('#main-menu').append($('<li>').text(textForItem));
}

function setupMenuEventListenerWithVanilla() {
  var mainMenu = document.getElementById('main-menu');
  var items = mainMenu.getElementsByTagName('li');
  for (var index = 0; index < items.length; index++) {
    items.item(index).addEventListener('click', addHighlight);
  }
}

function addHighlight(event) {
  removeHighlight();
  event.target.setAttribute('class', 'highlight');
}

function removeHighlight() {
  var highlightedItems = document.getElementsByClassName('highlight');
  for (var index = 0; index < highlightedItems.length; index++) {
    highlightedItems.item(index).classList.remove('highlight');
  }
}

function setupMenuDelegate() {
  var mainMenu = document.getElementById('main-menu');
  mainMenu.addEventListener('click', addHighlight);
}

function handleMenuClick(event) {
  console.log(event.target);
}

function setupMenuDelegateWithJQuery() {
  $('#main-menu').on('click', 'li', addHighlightWithJQuery);
}

function addHighlightWithJQuery(event) {
  $('.highlight').removeClass('highlight');
  // var highlightColor = event.target.dataset.highlight || 'yellow';
  // event.target.dataset.alreadyClicked = "Yes";
  //
  // Using .attr() to read the data-highlight value of an element.
  var highlightColor = $(event.target).attr('data-highlight') || 'yellow';
  // Using .attr() to set the data-already-clicked value of an element.
  // The value will show up in the DOM.
  $(event.target).attr('data-already-clicked', 'Yes-JQuery');
  console.log("JQuery Info: ",$(event.target).data('jqueryInfo'));
  console.log("Highlight Info: ", $(event.target).data('highlight'))
  // Using .data() to set the jqueryInfo value of an element.
  // The value will NOT show in the DOM (because ???).
  $(event.target).data('jqueryInfo', 'secret message');
  $(event.target).css('background-color', highlightColor);
  // $(event.target).addClass('highlight');
}
