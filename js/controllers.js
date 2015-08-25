app.controller('HomeController', function ($scope) {
  $scope.message ='yo_yo_yo';
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

// app.controller('AddController', function ($scope, $routeParams, $location) {
//   console.log($routeParams);
//   console.log($location.search().x);
// });
