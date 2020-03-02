define(['views/home-view', 'services/api'], function(home, api){
    var page = 1;
    var maxPage;


    function loadNext() {
        if(page === maxPage){
            return;
        }
        page++;
        return api.character(page)

    }

    return  {

        start: function() {
            
            api.character(page)
            .then(function (characters) {
                maxPage = characters.info.pages;

                home.show(characters.results, loadNext);
            })
        },

    }


});