/* Search */

var button = document.querySelector(".js-submit");
button.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    
    /* clear previous results */
    var searchResults = document.querySelector(".js-search-results");
    searchResults.innerHTML = "";
    
    SoundCouldAPI.getTrack(input);
});

document.querySelector(".js-search").addEventListener('keyup', function(e){
    var input = document.querySelector("input").value;

    // if the key ENTER is pressed ...
    if(e.which === 13)    {
        /* clear previous results */
        var searchResults = document.querySelector(".js-search-results");
        searchResults.innerHTML = "";
        
        SoundCouldAPI.getTrack(input);
    }
});

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
        a.href = track.permalink_url;
        a.target = "_blank";
        a.innerHTML = track.title;
        header.appendChild(a);
        content.appendChild(header);
        card.appendChild(content);

        // adding button
        var button = document.createElement("div");
        button.classList.add("ui", "bottom", "attached", "button", "js-button");
        button.addEventListener('click', function(){
            SoundCouldAPI.getEmbed(track.permalink_url);
        });

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

/* Add to the playlist and play */
SoundCouldAPI.getEmbed = function(trackURL)  {
    // console.log("click");
    SC.oEmbed(trackURL, {
        auto_play: true
    }).then(function(embed){
        var sideBar = document.querySelector('.js-playlist');
        
        var box = document.createElement('div');
        box.innerHTML = embed.html;
        sideBar.insertBefore(box, sideBar.firstChild);
        /* storing */
        localStorage.setItem("key", sideBar.innerHTML);

    });
}

var sideBar = document.querySelector(".js-playlist");
sideBar.innerHTML = localStorage.getItem("key");
