'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('movieCat', [
  'ngRoute',
  // 'movieCat.in_theaters',
  // 'movieCat.coming_soon',
  // 'movieCat.top250'
  'movieCat.list'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
app.controller('NavController',['$scope','$location',function($scope,$location){
	//先转换为自己的
	$scope.$location=$location;

	$scope.$watch('$location.path()',function(now){
		if (now.startsWith('/in_theaters')) {
			$scope.id=1;
		}else if (now.startsWith('/coming_soon')) {
			$scope.id=2;
		}else if (now.startsWith('/top250')) {
			$scope.id=3;
		};
	});

}])
