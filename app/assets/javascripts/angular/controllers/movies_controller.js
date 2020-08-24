var app = angular.module('movies', []);

app.controller('MoviesCtrl', ['$scope', function($scope) {
	$scope.movies = $scope.data.entries.filter(x => x.programType === 'movie');
	$scope.movies = $scope.movies.filter(x => x.releaseYear >= 2010);
}]);