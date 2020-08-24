var app = angular.module('series', []);

app.controller('SeriesCtrl', ['$scope', function($scope) {
 	$scope.series = $scope.data.entries.filter(x => x.programType === 'series');
	$scope.series = $scope.series.filter(x => x.releaseYear >= 2010);
}]);
