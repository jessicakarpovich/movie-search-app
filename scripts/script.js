const key = "c12dc5a97d67a3d1fa95dd742012de00";
const api_endpoint = "https://api.themoviedb.org/3/search/movie";
// const query = "Star Wars";
// const url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";


// prevent default form action to avoid encountering 
//  "NetworkError when attempting to fetch resource"
function search(e) {
    e.preventDefault();
    
    const query = document.querySelector('#movie-search').value;
    // Store search in localStorage
    localStorage.setItem('search-term', query);
    
    const url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";


    fetch(url) 
        .then(response => response.json())
        .then(results => {
            showSearchResult(results, query);
        })
        .catch(function(error) {
            console.log(error);
    });
}

// Add event listener to search button and to search field
const sBtn = document.querySelector('.search-btn');
const sBox = document.querySelector('#movie-search');
sBtn.addEventListener('click', search, false);
sBox.addEventListener('submit', search, false);


// Use localStorage to show last search on load
function showLastSearch() {
    if (localStorage.getItem('search-term')) {
        const query = localStorage.getItem('search-term');
        const url = api_endpoint + "?api_key=" + key + "&query=" + query + "&page=1";
        
        fetch(url) 
            .then(response => response.json())
            .then(results => {
                showSearchResult(results, query);
            })
            .catch(function(error) {
                console.log(error);
        });
    }
    
}

window.addEventListener('load', showLastSearch, false);


// load search results and display them
function showSearchResult(data, q) {
    const searchResults = document.querySelector('.search-results');
    let content = "<h2>Results for " + q + "</h2>";
    
    // Check that there are results before trying to load them.
    if (data.results.length < 1) {
        content += "<div><p id=msg>No matching results.</p></div>";
    }
    
    else {
        content += "<section class=\'movies\'>";

        for (let i=0; i < data.results.length; i++) {
            content += "<article>";
            content += "<img src=https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.results[i].backdrop_path + " alt=\'" + data.results[i].title + "\'>";

            content += "<div class=\"text-container\"><h3>" + data.results[i].title + "</h3>";
            content += "<p>" + data.results[i].release_date + "</p></div>";
            content += "</article>";
        }

        content += "</section>";
        content += "<button>See more on Hulu</button>";
    }
    
    searchResults.innerHTML = content;
}

/* Primarily for mobile screens */
// Small screen size menu click - expand menu 
function expandMenu() {
    const header = document.querySelector('header');
    
    if (header.classList.contains('expanded-menu')) {
        header.classList.remove('expanded-menu');
    } else {
        header.classList.add('expanded-menu');
    }
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', expandMenu, false);