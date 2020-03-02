define(function(){

    function createTable() {
        var HEADER = '<tr><th>Name</th><th>Status</th><th>Species</th><th>Image</th></tr>';
        return '<table id="table" class="table">' + HEADER + '</table>';
    }

    function characterRow(character) {
        return '<tr><td>' + character.name + 
        '</td><td>' + character.status + 
        '</td><td>' + character.species + 
        '</td><td><img src="' + character.image + '" width="100" height="100">' +
        '</td></tr>';
    }

    function createRow(character){
        var row = $(characterRow(character));
        row.appendTo($('#table'));

        row.click(function() {
            location.hash = '#details/' + character.id;
        });

    }

    return {
        show: function (characters, loadNext) {
            var table = $(createTable());

            $('#app').html(table);
            characters.forEach(createRow)

            

            $(window).scroll(function() {
                if($(window).scrollTop() == $(document).height() - $(window).height()) {
                    loadNext()
                    .then(function(characters){
                        characters.results.forEach(createRow)
                    })
                }
            });


        }
    };
});