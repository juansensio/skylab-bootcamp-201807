'use strict';
+
// my custom components

function SearchPanel() {
    Component.call(this, 'form');

    var input = document.createElement('input');
    input.type = 'search';
    input.placeholder = 'Input a text...';

    var button = document.createElement('button');
    button.type = 'submit';
    button.innerHTML = 'Search';

    this.element.appendChild(input);
    this.element.appendChild(button);

    var _callback;

    this.element.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = input.value;

        if (query && _callback) _callback(query);
    }.bind(this));

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
    this.element.innerHTML = '';

    results.forEach(function (result) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.href = '#/' + result.id;
        a.innerHTML = result.text;
        a.onclick = function () {
            if (this._callback) this._callback(result.id, result.text);
        }.bind(this);

        this.element.appendChild(li);

        li.appendChild(a);
    }, this);
};

ResultsList.prototype.onItemClick = function (callback) {
    this._callback = callback;
};

/**
 * 
 * @param {string} title The item title
 * @param {string} info The information about an item
 * @param {string} image The image of the item
 */
function DetailPanel(title, popularity, preview, spotifyUrl) {
    Panel.call(this, title, 'section');

    var p = document.createElement('p');
    p.innerText = popularity;
    this.element.appendChild(p);

    var iframe = document.createElement('iframe');
    iframe.src = preview;
    this.element.appendChild(iframe);

    var a1 = document.createElement('a');
    a1.href = spotifyUrl;
    a1.setAttribute('target', '_blank');
    a1.innerHTML = 'Complete song on Spotify';
    this.element.appendChild(a1);

}

DetailPanel.prototype = Object.create(Panel.prototype);
DetailPanel.prototype.constructor = DetailPanel;