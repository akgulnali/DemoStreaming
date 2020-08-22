var app = angular.module('DemoStreamingApp', ['ui.router', 'series', 'movies']);

app.config(function($stateProvider, $urlRouterProvider){

    // $urlRouterProvider.otherwise('/dashboard');
    $urlRouterProvider.otherwise('');

	  $stateProvider
	  .state("series", {
	    url:'/series',
	    templateUrl: 'series.html',
	    // controller: 'SeriesCtrl',
	  })
	  .state("movies", {
	    url:'/movies',
	    templateUrl: 'movies.html',
	    // controller: 'MoviesCtrl',
	  });
  }
);

app.controller('DashboardCtrl', ['$scope', function($scope, $location) {
	// $scope.title = 'Series';
}]);

// app.controller('SeriesCtrl', ['$scope', function($scope) {
// 	$scope.title = 'Series';
// }]);

// app.controller('MoviesCtrl', ['$scope', function($scope) {
// 	$scope.title = 'Movies';
// }]);
