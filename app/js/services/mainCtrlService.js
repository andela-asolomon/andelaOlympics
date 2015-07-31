angular.module('olympics.services')
  .factory('TeamCreators', ['$cookies','Authentication', '$firebaseObject','Refs',"$rootScope",
  function($cookies,Authentication, $firebaseObject,Refs,$rootScope){ 

    //var userName= $rootScope.currentUser.name;
    //console.log(userName);
    $rootScope.creators =[]
    var getCreators = function(){
        console.log("INIT5")
        var _ = require('lodash')
        var all_competitions = $firebaseObject(Refs.competitions);
        //$scope.using_now = $rootScope.currentUser.uid;
        //console.log(all_competitions);
        all_competitions.$loaded().then(function(data) {
          $rootScope.allCompetitions = data;
          //delete unwanted objects always present
          delete $rootScope.allCompetitions.$id;
          delete $rootScope.allCompetitions.$$conf;
          delete $rootScope.allCompetitions.$priority;
          //////////////////////
          console.log($rootScope.allCompetitions)
          
          _.forEach($rootScope.allCompetitions,function(i){
            //console.log(i.teams)
            console.log(i.name)
            console.log(Object.keys(i.teams))
            competition_name=i.name;
            team_creators=Object.keys(i.teams)
            var pair={}
            pair['competition']=competition_name
            pair['creators']=team_creators;
            $rootScope.creators.push(pair);
             team_creators;
            // _.forEach(i.teams,function(j){
            //   console.log(j);
            // })
          })
          console.log($rootScope.creators);
          return($rootScope.creators);
        })
       // console.log($rootScope.currentUser.name);
      }
      //console.log($rootScope.creators);
      return {
        getCreators: getCreators
      };
    }
  ]);

