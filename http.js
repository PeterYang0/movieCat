(function (angular) {

var http =angular.module('movieCat.services.http', []);
	http.service('HttpServices',['$window','$document',function($window,$document){

			//1.先处理url地址参数<script src="http://api.douban"></script>
			//2.创建一个script标签
			//3.挂在回调函数 HttpServices.jsonp()
			//4.将script标签放在页面中
			this. jsonp=function(url,data,callback){

			var cbMath='my_json_callback'+Math.random().toString().replace('.','');

			window[cbMath]=callback;

			//将data转换成url字符串的形式{id：1，name=zhangsan}
			var querystring=url.indexOf('?')==-1?'?':'&';
			for (var key in data) {
				querystring+=key+'='+data[key]+'&'
			}

			//挂在回调函数
			//querystring=?id=1&name=zhangsan&
			querystring+='callback='+cbMath;
			//querystring=?id=1&name=zhangsan&callback=my_json_callback1234556255

			//创建一个script标签
			// $document里面有个document对对象
			var scriptElement= $document[0].createElement('script');
			scriptElement.src=url+querystring;

			//将script加到页面中
			$document[0].body.appendChild(scriptElement);

			};
	}]);
})(angular);

