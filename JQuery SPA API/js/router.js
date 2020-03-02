define(function() {
  var routes = {
    home: {
      hash: '#home',
      controller: 'home-controller'
    },
    location: {
      hash: '#location',
      controller: 'location-controller'
    },
    episode: {
      hash: '#episode',
      controller: 'episode-controller'
    },
    characterDetails: {
      hash: '#details',
      controller: 'character-details-controller'
    }
  };

  var defaultRoute = routes.home;

  function load() {
    var hash = location.hash;

    var route = Object.values(routes).find(function(route) {
      return hash.startsWith(route.hash);
    });

    if (!route) {
      route = defaultRoute;
      location.hash = route.hash;
    }

    require(["controllers/" + route.controller], function(controller) {
      controller.start();
    });
  }

  load();
  window.onhashchange = load;
});
