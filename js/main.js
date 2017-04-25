// function initMap(){
//   //Create variable with new google Maps and place it along with properties in Div****
//   var map= new google.maps.Map(document.getElementById('googleMap'),{
//     center: {lat: 37.954133, lng: -122.339226},
//     zoom: 5,
//     scrollwheel: false,
//     mapTypeId: 'roadmap'
//   });
// }


function bookSearch(){
  var search = document.getElementById('search').value;
  //Results innerHTML is an empty string, so it would be a new search each time.
  document.getElementById('results').innerHTML= ""

  $.ajax ({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: function(data){
      var results= document.getElementById('results');
      for(i = 0; i < data.items.length; i++){
        results.innerHTML += "<span id='span' class='col-md-4'>" + data.items[i].volumeInfo.title + "<br>" + "<p>" + "Rating: " +data.items[i].volumeInfo.averageRating + "</p>" + "<img id='img' class='col-md-4' src='" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "'>" + "</span>"
      }
    },
    type: 'GET'
  });
}

document.getElementById('button').addEventListener('click', bookSearch, false)
