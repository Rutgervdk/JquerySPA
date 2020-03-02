define(function(){

    function createTable() {
        var HEADER = '<tr><th>Name</th><th>Airdate</th><th>Episode</th></tr>';
        return '<table id="table" class="table">' + HEADER + '</table>';
    }

    function episodeRow(episode) {
        return '<tr><td>' + episode.name + 
        '</td><td>' + episode.air_date + 
        '</td><td>' + episode.episode + 
        '</td></tr>';
    }

    function createRow(episode){
        var row = $(episodeRow(episode));
        row.appendTo($('#table'));

        row.click(function() {
            location.hash = '#epdetails/' + episode.id;
        });

    }

    return {
        show: function (episodes, loadNext) {
            var table = $(createTable());

            $('#app').html(table);
            episodes.forEach(createRow)

            

            $(window).scroll(function() {
                if($(window).scrollTop() == $(document).height() - $(window).height()) {
                    loadNext()
                    .then(function(episodes){
                        episodes.results.forEach(createRow)
                    })
                }
            });


        }
    };
});