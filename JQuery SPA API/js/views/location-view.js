define(function(){

    function createTable() {
        var HEADER = '<tr><th>Name</th><th>Type</th><th>Dimension</th></tr>';
        return '<table id="table" class="table">' + HEADER + '</table>';
    }

    function locationRow(location) {
        return '<tr><td>' + location.name + 
        '</td><td>' + location.type + 
        '</td><td>' + location.dimension + 
        '</td></tr>';
    }

    function createRow(location){
        var row = $(locationRow(location));
        row.appendTo($('#table'));

        row.click(function() {
            location.hash = '#locdetails/' + location.id;
        });

    }

    return {
        show: function (locations, loadNext) {
            var table = $(createTable());
            $('#app').html(table);

            locations.forEach(createRow)

            

            $(window).scroll(function() {
                if($(window).scrollTop() == $(document).height() - $(window).height()) {
                    loadNext()
                    .then(function(locations){
                        locations.results.forEach(createRow)
                    })
                }
            });


        }
    };
});