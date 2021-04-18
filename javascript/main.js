/* Search */


/* Query SoundCloud API */

var SoundCouldAPI = {};

SoundCouldAPI.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}

SoundCouldAPI.init();
 
SoundCouldAPI.getTrack = function(inputValue) {
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        console.log(tracks);
    });
}

SoundCouldAPI.getTrack('Hey Jude');

SoundCouldAPI.renderTracks = function() {
    var card = document.createElement("div");
    card.classList.add("card");
    
    var searchResults = document.querySelector(".js-search-results");
    searchResults.appendChild(card);
}

SoundCouldAPI.renderTracks();

/* Display the cards */


/* Add to the playlist */