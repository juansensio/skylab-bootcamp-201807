// my custom components

function SearchPanel() {
    Component.call(this, 'form');

    //Input

    /*var input = document.createElement('input');
    input.type = 'search';
    input.placeholder = 'Input a text...';
    this.element.appendChild(input);*/

    var $input = $('<input>').attr({'type': 'search', 'placeholder': 'Input a text...'});
    $(this.element).append($input);

    //Button

    /*var button = document.createElement('button');
    button.type = 'submit';
    button.innerHTML = 'Search';
    this.element.appendChild(button);*/

    var $button = $('<button>').attr('type', 'submit').text('Search').click(function (event) {
        event.preventDefault();

        var query = $('input').val();

        if (query && _callback) _callback(query);
    }.bind(this));

    $(this.element).append($button);



    var _callback;

    /*this.element.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = $('input').val();

        if (query && _callback) _callback(query);
    }.bind(this));*/

    this.onSearch = function (callback) {
        _callback = callback;
    };
}

SearchPanel.prototype = Object.create(Component.prototype);
SearchPanel.prototype.constructor = SearchPanel;

function ResultsList() {
    Component.call(this, 'ul');
}

ResultsList.prototype = Object.create(Component.prototype);
ResultsList.prototype.constructor = ResultsList;

ResultsList.prototype.updateResults = function (results) { // => { id, text }
    this.clear();

    results.forEach(function (result) {

        //Makeing li

        //var li = document.createElement('li');
        //this.element.appendChild(li);
        var $li = $('<li>'); 
        var $elem = $(this.element);
        $($elem).append($li);
        
        
        //var a = document.createElement('a');
        //li.appendChild(a);
        var $a = $('<a>'); 
        $($li).append($a);

        a.href = '#/' + result.id;
        a.innerHTML = result.text;
        a.onclick = function () {
            if (this._callback) this._callback(result.id, result.text);
        }.bind(this);


    }, this);
};

ResultsList.prototype.clear = function() {
    this.element.innerHTML = '';
};

ResultsList.prototype.onItemClick = function (callback) {
    this._callback = callback;
};

/**
 * 
 * @param {string} title The track title
 * @param {string} image The image URL of the track
 * @param {string} file The file URL of the track
 * @param {string} url The URL of the track
 */
function TrackPlayer(title, image, file, url) {
    Panel.call(this, title, 'section');

    var img = document.createElement('img');
    img.src = image;

    this.element.appendChild(img);

    var audio = document.createElement('audio');
    audio.controls = true;

    var source = document.createElement('source');
    source.src = file;
    source.type = 'audio/mpeg';

    audio.appendChild(source);

    this.element.appendChild(audio);

    var a = document.createElement('a');
    a.href = url;
    a.innerText = 'Open in original player';
    a.target = '_blank';

    this.element.appendChild(a);
}

TrackPlayer.prototype = Object.create(Panel.prototype);
TrackPlayer.prototype.constructor = TrackPlayer;

/**
 * 
 * @param {string} id The track id
 */
function SpotifyPlayer(id) {
    Component.call(this, 'section');

    this.element.innerHTML = '<iframe src="https://open.spotify.com/embed?uri=spotify:track:'+ id +'" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
}

SpotifyPlayer.prototype = Object.create(Component.prototype);
SpotifyPlayer.prototype.constructor = SpotifyPlayer;