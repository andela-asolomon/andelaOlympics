angular.module('olympics.services')
  .factory('Competitions', ['$cookies', '$firebaseObject', 'Refs','$rootScope',
    function($cookies, $firebaseObject, Refs,$rootScope) {  
      

      var competition_list=$firebaseObject(Refs.competitions).$loaded().then(function(data) {
        var initial_competition_list = data;
        console.log(data);
        $rootScope.competition_list = Object.keys(initial_competition_list);
        $rootScope.competition_list.shift();
        $rootScope.competition_list.shift();
        $rootScope.competition_list.shift();
        console.log($rootScope.competition_list);
      });

      var getCompetition = function() {
        //console.log("in bot olympics function")
        //var competition = $firebaseObject(Refs.bot_olympics);
        
        //console.log("trying out current_competition variable");
        var current_competition = $firebaseObject(Refs.current);
        console.log(['current_competition', current_competition]);
        return current_competition;
      };


      var Olympics = function(compName) {
        console.log(compName)
        var competition_info = $firebaseObject(Refs.competitions).$loaded().then(function(data) {

        $rootScope.allcompetition_information = data
        console.log($rootScope.allcompetition_information);
        return ($rootScope.allcompetition_information);
      })
        
      };

      return {
        getCompetition: getCompetition,
       Olympics: Olympics
      };
    }
  ]);


