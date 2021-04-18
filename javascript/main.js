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
        SoundCouldAPI.renderTracks(tracks);
    });
}

SoundCouldAPI.getTrack('Hey Jude');

/* Display the cards */
SoundCouldAPI.renderTracks = function(tracks) {

    tracks.forEach(track => {
    
        var card = document.createElement("div");
        card.classList.add("card");
        
        // image insertion
        var image = document.createElement("div");
        image.classList.add("image");
        var img = document.createElement("img");
        img.classList.add("image_img");
        img.src = track.artwork_url || "https://picsum.photos/200";
        image.appendChild(img);
        card.appendChild(image);

        // adding content
        var content = document.createElement("div");
        content.classList.add("content");
        var header = document.createElement("div");
        header.classList.add("header");
        var a = document.createElement("a");
        a.href = "https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance";
        a.target = "_blank";
        a.innerHTML = track.title;
        header.appendChild(a);
        content.appendChild(header);
        card.appendChild(content);

        // adding button
        var button = document.createElement("div");
        button.classList.add("ui", "bottom", "attached", "button", "js-button");
        var icon = document.createElement("i");
        icon.classList.add("add", "icon");
        button.appendChild(icon);
        var span = document.createElement("span");
        span.innerHTML = "Add to playlist";
        button.appendChild(span);
        card.appendChild(button);
        
        var searchResults = document.querySelector(".js-search-results");
        searchResults.appendChild(card);

    });
    
}


/* Add to the playlist */