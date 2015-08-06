angular.module('olympics.controllers')
.controller('prevCompetition', ['Authentication', '$route','$routeParams', '$scope', '$rootScope', '$location', '$timeout', '$http', 'Competitions', 'UserDetails', 'Requests','TeamCreators',//'getWinners',
	function(Authentication, $route, $routeParams, $scope, $rootScope, $location, $timeout, $http, Competitions, UserDetails, Requests,TeamCreators) {

		$scope.show = false;
		//$scope.noShow = true;
		//$scope.competition_needed = $routeParams.prevCompetition;
		//console.log($scope.competition_needed)
		if( $rootScope.competition_list.length>1){
		 	$scope.show = true;

		 	//$scope.noShow=false;
		}

		$scope.initial = function() {
			//$scope.competition_info = Competitions.Olympics("Bot Olympics");
			console.log($rootScope.allcompetition_information)
		};

		$scope.initial();
	}])
