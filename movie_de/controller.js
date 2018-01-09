(function (angular) {

var del =angular.module('movieCat.del', ['ngRoute','movieCat.services.http']);

del.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subject/:id', {
    templateUrl: 'movie_de/view.html',
    controller: 'delCtrl'
  });
}]);

del.controller('delCtrl', ['$scope','$route','$routeParams','HttpServices',function($scope,$route,$routeParams,HttpServices) {



	HttpServices.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,
		// +'/'+$routeParams.id,
		{},
		function(data){
			
			$scope.data=data;
			//让表达式重新同步，放在最后
			$scope.$apply();

		});

	// $scope.del=function(id){
	// 	$route.updateParams({type:subject,id:$scope.id});
	// };


}]);

})(angular);



	// var doubanAPI='http://api.douban.com/v2/movie/del';
	// $http.jsonp(doubanAPI+'?callback=JSON_CALLBACK').then(function(data){
	// 	if (data.status==200) {
	// 		$scope.subjects=data.data.subjects;
	// 	}else {
	// 		$scope.message='信息加载出错，错误信息：'+data.statusText;
	// 	}
	// }),function(err){
	// 	console.log(err);
	// }