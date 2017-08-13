// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var submit = document.querySelector('button');
var results = document.querySelector('.results');
console.log(results);

submit.addEventListener('click', function(){
  var searchTerm = document.querySelector('input[name="search"]').value;
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    dataType: "json",
    success: function(data) {
      results.innerHTML = '';
      for (var i = 0; i < data[1].length; i++) {
        $('.results').prepend(
          '<ul>' +
            '<li><h3><a href="' + data[3][i] +'" target="_blank">' + data[1][i] + '</a></h3></li>' +
            '<li><p>' + data[2][i] + '</p></li>' +
          '</ul>'
        );
      }
    },
    error: function() {
      console.log('Error 37');
    }
  });
});
