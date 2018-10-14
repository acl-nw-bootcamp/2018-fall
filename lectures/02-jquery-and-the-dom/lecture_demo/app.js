$(document).ready(function() {
  $('#main-menu li:first-of-type').addClass('highlight bold');
  $('#main-menu li').on('click', highlightMenuItem);
})

function highlightMenuItem(event) {
  $('#main-menu .highlight').removeClass('highlight');
  $(event.target).addClass('highlight');
  // $(this).addClass('bold green');
}

// window.addEventListener('load', function() {
//   document.getElementById('main-menu').style.backgroundColor='yellow';
// })
