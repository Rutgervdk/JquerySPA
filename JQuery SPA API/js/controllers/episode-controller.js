define(['views/episode-view', 'services/api'], function(episode, api){
    var page = 1;
    var maxPage;

    function loadNext() {
        if(page === maxPage){
            return;
        }
        page++;
        return api.episode(page)
    }

    return {
        start: function() {
            
            api.episode(page)
            .then(function (episodes) {
                maxPage = episodes.info.pages;

                episode.show(episodes.results, loadNext);
            })
        }
    }
});