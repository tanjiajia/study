var app = angular.module('MyApp', []);
app.controller('QuestionController', function($scope, $http) {
	$scope.Score = 0;
	//加载数据
	function LoadData() {
		$scope.QuestionLists = [];
		//		console.log($scope.QuestionListsString);
		for(var i = 0; i < $scope.QuestionListsString.length; i++) {
			var d = $scope.QuestionListsString[i];
			d.items = JSON.parse(d.QuestionItems);
			d.nextBtn = true;
			$scope.QuestionLists.push(d);
		}
	}
	//重新测试
	$scope.againTest = function() {
			$scope.Score = 0;
			$http.get("json/testData.json")
				.success(function(response) {
					if(response.success) {
						$('#p6').removeClass('p6_manfen p6_jige p6_guake');
						$scope.QuestionListsString = response.data;
						LoadData();
						MainSwiper.slideTo(1, 0);
					} else {
						alert('获取数据失败');
					}
				});
		}
		//下一题
	$scope.Nextquestion = function(index) {
			
			if(MainSwiper.activeIndex != 5) {
				MainSwiper.slideNext();
			} else {
				console.log($scope.Score);
				if($scope.Score == 5) {
					$('#p6').addClass('p6_manfen');
				} else if($scope.Score == 3 || $scope.Score == 4) {
					$('#p6').addClass('p6_jige');
				} else {
					$('#p6').addClass('p6_guake');
				}
				MainSwiper.slideNext();
			}
		}
		//点击答题
	$scope.AnswerClick = function(question, item) {
		//判断是否已经点击过
		if(question.nextBtn != false) {
			item.imgSrc = 'Red';
			question.nextBtn = false;
			if(question.Answer != item.option) {
				item.imgStyle = 'errBg';
				for(var i = 0; i < question.items.length; i++) {
					if(question.items[i].option == question.Answer) {
						question.items[i].imgStyle = 'correctBg_Not';
						break;
					}
				}
			} else {
				item.imgStyle = 'correctBg';
				$scope.Score += 1;
			}
		}
	}
	$scope.QuestionLists = Array();
	$http.get("json/testData.json")
		.success(function(response) {
			if(response.success) {
				$scope.QuestionListsString = response.data;

				LoadData();

			} else {
				alert('获取数据失败');
			}
		});

});