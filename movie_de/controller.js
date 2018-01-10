(function (angular) {

var del =angular.module('movieCat.del', ['ngRoute','movieCat.services.http']);

del.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:type/1/:id', {
    templateUrl: 'movie_de/view.html',
    controller: 'delCtrl'
  });
}]);

del.controller('delCtrl', ['$scope','$route','$routeParams','HttpServices',function($scope,$route,$routeParams,HttpServices) {

	HttpServices.jsonp('http://api.douban.com/v2/movie/'+$routeParams.type+'/'+$routeParams.id,
		// +'/'+$routeParams.id,
		{},
		function(data){
			
			$scope.data=data;
			//让表达式重新同步，放在最后
			$scope.$apply();

		});


}]);

})(angular);



	// var doubanAPI='http://api.douban.com/v2/movie/del';
	// $http.jsonp(doubanAPI+'?callback=JSON_CALLBACK').then(function(res){
	// 	if (res.status==200) {
		           //里面还有一个data
	// 		$scope.subjects=res.data.subjects;
	// 	}else {
	// 		$scope.message='信息加载出错，错误信息：'+data.statusText;
	// 	}
	// }),function(err){
	// 	console.log(err);
	// }