$('button').on('click', function(){
  var title = $("#searchBox").val();
  var url = "http://www.omdbapi.com/?s=" + title;
  $("div").empty();
  $.ajax(url, {dataType: 'json'}).done(function(data){
    for(var i = 0; i < data["Search"].length; i++){
      $('div').append("<p data-imdblink="+'"'+ data["Search"][i].imdbID +'"'+">" + data["Search"][i].Title + "</p>")
    }
  })
})

$('div').on('click', 'p', function(){
  var movieId = $(this).data("imdblink")
  var imdbUrl = "http://www.omdbapi.com/?i=" + movieId;
  $("div").empty()
  $.ajax(imdbUrl, {dataType: 'json'}).done(function(data){
    $('div').append("<img src="+"'"+ data.Poster +"'"+">")
    $('div').append("<p>"+ data.Title + "</p>")
    $('div').append("<p>"+ data.Year + "</p>")
    $('div').append("<p>"+ data.Plot + "</p>")
    $('div').append("<p>"+ data.imdbRating + "</p>")
    $('div').append("<p>"+ data.Director + "</p>")
  })
})
