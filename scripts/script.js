const key = "c12dc5a97d67a3d1fa95dd742012de00";
const api_endpoint = "https://api.themoviedb.org/3/search/movie";
const query = "Star Wars";
const url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";


fetch(url) 
    .then(response => response.json())
    .then(results => {
        console.log(results);
        showSearchResult(results);
    })


function showSearchResult(data) {
    console.log(data);
    
    console.log(data.results[0].title);
    console.log(data.results[0].release_date);
    
    var searchResults = document.querySelector('.search-results');
    
    var content = "<h2>Results for " + query + "</h2>";
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
    
    
    searchResults.innerHTML = content;
}