define(function() {
  var API_URL = "https://rickandmortyapi.com/api/";

  return {
    character: function(page) {
      return fetch(API_URL + 'character/?page=' + page).then(function(response) {
        return response.json();
      });
    },
    location: function(page) {
      return fetch(API_URL + 'location/?page=' + page).then(function(response) {
        return response.json();
      });
    },
    episode: function(page) {
        return fetch(API_URL + 'episode/?page=' + page).then(function(response) {
            return response.json();
        });
    },
    characterDetails: function(id) {
        return fetch(API_URL + 'character/' + id).then(function(response) {
            return response.json();
        });
    }
  };
});
