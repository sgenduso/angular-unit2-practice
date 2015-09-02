app.controller('HomeController', function ($scope, $http) {
  $scope.message ='yo_yo_yo';
  $scope.pig = 'whiskey ginger';
  $scope.forRedaction = 'my dog rusty is 2 dorables';
  $http.get('https://api.github.com/zen').then(function (data) {
    $scope.zenData = data.data;
  });
  $http.get('js/itunes.json').then(function (data) {
    $scope.response = data.data.results;
  }, function (err) {
    $scope.response = 'invalid url';
  });
  $http.get('https://shielded-peak-6345.herokuapp.com/messages').then(function (data) {
    $scope.posts = data.data;
  });
  $scope.addMessage = function () {
    $http.post('https://shielded-peak-6345.herokuapp.com/messages',
    {
    name: $scope.messageName,
    content: $scope.messageContent
  }).then(function (response) {
    console.log(response);
  });
};
});


app.controller('DogsController', function ($scope) {
  $scope.message ='woof_woof_woof';
});

app.controller('BioController', function ($scope) {
  $scope.message ='yo_yo_yo';
});


app.controller('ProjectsController', function ($scope) {
  $scope.message ='woof woof woof';
});

app.controller('ResumeController', function ($scope) {
  $scope.message ='woof woof woof';
});

app.controller('AddController', function ($scope, $routeParams, $location) {
    console.log($routeParams);
    console.log($location.url());
    $scope.sum = 0;
    for (var num in $routeParams) {
      $scope.sum += Number($routeParams[num]);
    }
});

app.controller('CustomDirectivesController', function ($scope) {

});

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);

app.controller('PokemonController', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://pokeapi.co/api/v1/pokedex/1/')
  .then(function (response) {
    $scope.pokemonToDisplay = [];
    var pokemon = response.data.pokemon;
    for (var i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * pokemon.length);
      $http.get('http://pokeapi.co/' + pokemon[randomIndex].resource_uri)
      .then(function (singlePokemon) {
        $http.get('http://pokeapi.co/'+singlePokemon.data.sprites[0].resource_uri)
        .then(function (sprite) {
          singlePokemon.imgUrl = 'http://pokeapi.co' + sprite.data.image;
        $scope.pokemonToDisplay.push(singlePokemon);
        });
      });
    }
  });
}]);
