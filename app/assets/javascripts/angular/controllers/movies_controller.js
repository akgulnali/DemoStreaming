var app = angular.module('movies', []);

app.controller('MoviesCtrl', ['$scope', function($scope) {
	$scope.title = 'Movies';
}]);