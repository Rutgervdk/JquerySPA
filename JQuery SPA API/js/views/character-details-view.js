define(function() {
    function info(character) {
        return (
            '<div>' +
            '<p><strong>Name</strong> ' +
            character.name +
            '</p>' +
            '<p><img src="' + character.image + '"</p>' +
            '<p><strong>Status</strong> ' +
            character.status +
            '</p>' +
            '<p><strong>Species</strong> ' +
            character.species +
            '</p>' +
            '<p><strong>Gender</strong> ' +
            character.gender +
            '<p><strong>Origin</strong> ' +
            character.origin.name +
            '<p><strong>Location</strong> ' +
            character.location.name +
            '</p>'
        );
    }

    function episodeRow(episode) {
        return '<tr>' +
            '<td>' +
            '<a href="' + episode + '">' + episode + '</a>' +
            '</td>' +
            '</tr>'
        ;
    }

    function episodeTable(episodes) {
        var HEADER = '<tr><th>Episode</th></tr>';
        return '<table>' + HEADER + episodes.map(episodeRow).join('') + '</table>';
    }

    return {
        show: function(character) {
            $('#app').html(info(character) + episodeTable(character.episode));
        }
    };
});