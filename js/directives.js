app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png" width="200px">',
    restrict: 'E',
    templateUrl: ''
  };
});


app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyo: '=yoyoData'
    }
  };
});
