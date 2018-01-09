const key = "c12dc5a97d67a3d1fa95dd742012de00";
const api_endpoint = "https://api.themoviedb.org/3/search/movie";
const query = "Star Wars";
const url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";

// as in the examples
fetch(url) 
    .then(response => response.json())
    .then(results => {
        console.log(results);
    })
    .catch(function(error) {
        console.log(error);
});

// figure out why the search function doesn't work as expected
/*
function search() {
    var query = document.querySelector('#movie-search').value;
    console.log(query);
    var url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";


    fetch(url) 
        .then(response => response.json())
        .then(results => {
            console.log(results);
       // showSearchResult(results, query);
        })
        .catch(function(error) {
            console.log(error);
    });
}
*/
var sBtn = document.querySelector('.search-btn');
var sBox = document.querySelector('#movie-search');
sBtn.addEventListener('click', search, false);
sBox.addEventListener('submit', search, false);

function showSearchResult(data, q) {
    console.log(data.results[0].title);
    console.log(data.results[0].release_date);
    
    var searchResults = document.querySelector('.search-results');
    var content = "<h2>Results for " + q + "</h2>";
    
    // Check that there are results before trying to load them.
    if (!data) {
        content += "<p id=msg>No matching results.</p>";
    }
    
    else {
        content += "<section class=\'movies\'>";

        for (var i=0; i < data.results.length; i++) {
            content += "<article>";
            content += "<img src=https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.results[i].backdrop_path + " alt=\'" + data.results[i].title + "\'>";

            content += "<h3>" + data.results[i].title + "</h3>";
            content += "<p>" + data.results[i].release_date + "</p>";
            content += "</article>";
        }

        content += "<button>See more on Hulu</button>";
        content += "</section>";
    }
    
    searchResults.innerHTML = content;
}