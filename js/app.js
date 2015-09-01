var app = angular.module("unit2", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/directives', {
        templateUrl: 'partials/directives.html',
        controller: 'CustomDirectivesController'
      })
      .when('/pokemon', {
        templateUrl: 'partials/pokemon.html',
        controller: 'PokemonController'
      })
      // .when('/:path', {
      //   redirectTo: ('/#/:path')
      // })
      // .when('/add/:querystring', {
      //   templateUrl: 'partials/add.html',
      //   controller: 'AddController'
      // })
      .otherwise({
        redirectTo: ('/')
      });
      $locationProvider.html5Mode(true);
});
