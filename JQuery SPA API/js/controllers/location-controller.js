define(['views/location-view', 'services/api'], function(location, api){
    var page = 1;
    var maxPage;

    function loadNext() {
        if(page === maxPage){
            return;
        }

        page++;
        return api.location(page)

    }

    return {
        start: function() {
            
            api.location(page)
            .then(function (locations) {
                maxPage = locations.info.pages;

                location.show(locations.results, loadNext);
            })
        },

    }


});