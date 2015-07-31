angular.module('olympics.controllers')
.controller('mainCtrl', ['Authentication', '$route','$scope', '$rootScope', '$location', '$timeout', '$http', 'Competitions', 'UserDetails', 'Requests','TeamCreators',//'getWinners',
	function(Authentication, $route, $scope, $rootScope, $location, $timeout, $http, Competitions, UserDetails, Requests,TeamCreators){//getWinners) {

		$scope.login = function() {
			Authentication.login();
			var creators=TeamCreators.getCreators();
			//console.log(creators);
		};
		$rootScope.checkCreator = function(){
			console.log($rootScope.team_id);
			//$rootScope.current_user = $rootScope.currentUser.uid;
			$rootScope.current_user= "google:101661651649346650647" //testing purposes
			var _ =require('lodash');
			console.log($rootScope.creators)
			_.forEach($rootScope.creators,function(i){
				if(_.include(i.creators,$rootScope.current_user)){
					console.log("yes, current user created the team");
					$rootScope.showLinkBox = true;
					$route.reload();
				}
			})
		}
		$scope.link={link:""};
		$rootScope.updateLink =function(){
			console.log('posting link to database');
			console.log($scope.link);
		}
		
		$scope.logout = function() {
			//console.log($rootScope.creators) testing
			Authentication.logout();
			
      		Materialize.toast('You have successfully logged out!', 5000, 'teal accent-4');
		};


		$scope.init = function() {
			var competitions = Competitions.botOlympics();
			competitions.$loaded().then(function(data) {
				// _.forEach(data.teams, function(team, team_id) {
				// 	var members = [];
				// 	for(var i in team.members) {
				// 		var profile = UserDetails.profile(i);
				// 		team.members[i] = profile;
				// 	}
				// });
				
				$rootScope.competition = data;
			});
			// var _ =require('lodash');
			// //$scope.using_now = $rootScope.currentUser.uid;
			// var all_competitions = getWinners.competitionGetter();
			// all_competitions.$loaded().then(function(data) {
			// 	$scope.allCompetitions = data;
			// 	_.forEach($scope.allCompetitions,function(i){
			// 		_.forEach(i.teams,function(j){
			// 			console.log(j);
			// 		})
			// 	})
			// })
		};

		
		$scope.postLink =function(){
			var url = '/competitions/Bot Olympics/postlink';
			Requests.postlink(url, $scope.team, $scope.init);
		}
		$scope.createTeam = function() {
			var url = '/competitions/Bot Olympics/register';
			$scope.team.team_id = $rootScope.currentUser.uid;
			//var whatCompetition = {comp_name:}
			Requests.createTeam(url, $scope.team, $scope.init);
		};

		$scope.joinTeam = function(team_id) {
			var url 		= '/competitions/Bot Olympics/teams/' + team_id + '/members/',
					object 	= {user_id: $rootScope.currentUser.uid};
			console.log(url, object);
			Requests.joinTeam(url, object, $scope.init);
		};

		$scope.registerTeam = function(team_id) {
			var url = '/competitions/Bot Olympics/register/' + team_id;
			Requests.registerTeam(url, {registerId: team_id, user_id: $rootScope.currentUser.uid});
		};

		$scope.acceptMember = function(memberId) {
			$scope.team_id =  $rootScope.currentUser.uid;
			var url = '/competitions/Bot Olympics/teams/' + $scope.team_id + '/members/' + memberId;
			Requests.acceptMember(url, $scope.init);
		};

		$scope.declineMember = function(memberId) {
			$scope.team_id =  $rootScope.currentUser.uid;
			var url = '/competitions/Bot Olympics/teams/' + $scope.team_id + '/members/' + memberId;
			Requests.declineMember(url, $scope.init);
		};

		$scope.init();
	}
]);
