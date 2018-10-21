function showPreview() {
  // $('#preview').text($('#codeExample').val());
  var markedContent = marked($('#codeExample').val());
  $('#preview').html(markedContent);
  $('#preview pre code').each(function(i, block) {
    hljs.highlightBlock(block);
});

}

$(document).ready(function() {
  $('#previewButton').on('click', showPreview);
  hljs.initHighlightingOnLoad();
});
