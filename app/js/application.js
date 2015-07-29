// defining modules
angular.module('olympics.controllers', []);
angular.module('olympics.services', []);

/* loading services */
require('./services/auth.js');
require('./services/refs.js');
require('./services/competitions.js');
require('./services/user.js');
require('./services/http.requests.js');
require('./services/http.requests.js');
require('./services/dashboardServices.js');

// loading controller
require('./controllers/mainCtrl.js');
require('./controllers/dashboardCntrl.js')

window.Olympics = angular.module('Olympics', [
	'ngRoute',
	'ngCookies',
	'firebase',
	'olympics.controllers',
	'olympics.services'
]);

Olympics.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'mainCtrl'
			})
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html',
				controller: 'dashboardCntrl'
			})
			.otherwise({
				templateUrl: '404.html'
			});
	}]);

Olympics.run(['$rootScope', 'Authentication', 'Refs',
  function($rootScope, Authentication, Refs) {
  	Refs.root.onAuth(function(authData) {
  		if(authData) {
  			var user = {
          uid: authData.uid,
          name: authData.google.displayName,
          email: authData.google.email,
          accessToken: authData.google.accessToken,
          picture: authData.google.cachedUserProfile.picture
        };
  			$rootScope.currentUser = user;
  			return $rootScope.currentUser;
  		}
      else {
      	Authentication.logout();
      }
    });
  }]);








$(function() {
	$('.how-link').on('click', function() {
		console.log("Clicked");
		$('.overlay').scrollTo('.content.how', 800);
	});
});
