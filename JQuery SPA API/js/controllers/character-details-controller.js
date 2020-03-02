define([
    'services/api',
    'views/character-details-view'
], function(api, view) {
    var app = document.getElementById('app');

    return {
        start: function() {

            var hash = location.hash;
            var id = hash.slice(hash.lastIndexOf('/') + 1);

            api.characterDetails(id)
                .then(function(results) {
                    view.show(results);
                })
        }
    };
});