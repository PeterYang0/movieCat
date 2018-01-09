(function (angular) {

var list =angular.module('movieCat.list', ['ngRoute','movieCat.services.http']);

list.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:type/:page', {
    templateUrl: 'movielist/view.html',
    controller: 'listCtrl'
  });
}]);

list.controller('listCtrl', ['$scope','$route','$routeParams','HttpServices',function($scope,$route,$routeParams,HttpServices) {

	var count=10;
	var page=parseInt($routeParams.page);
	var start=(page-1)*count;

	$scope.title='';
	$scope.page=page;
	$scope.tiao=0;
	$scope.loading=true;
	HttpServices.jsonp('http://api.douban.com/v2/movie/'+$routeParams.type,
		{
			start:start,
			count:count,
			q:$routeParams.q
		},
		function(data){
			$scope.subjects=data.subjects;
			$scope.tiao=data.total;
			$scope.title=data.title;
			$scope.loading=false;
			$scope.pageCount=Math.ceil(data.total/count);
			//让表达式重新同步，放在最后
			$scope.$apply('subjects');

		});

	$scope.go=function(page){
		$route.updateParams({page:page});
	};


}]);



})(angular);



	// var doubanAPI='http://api.douban.com/v2/movie/list';
	// $http.jsonp(doubanAPI+'?callback=JSON_CALLBACK').then(function(data){
	// 	if (data.status==200) {
	// 		$scope.subjects=data.data.subjects;
	// 	}else {
	// 		$scope.message='信息加载出错，错误信息：'+data.statusText;
	// 	}
	// }),function(err){
	// 	console.log(err);
	// }