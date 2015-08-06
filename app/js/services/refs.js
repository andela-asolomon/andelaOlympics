angular.module('olympics.services')
  .factory('Refs', ['$cookies', '$firebase', //'$scope',
    function($cookies, $firebase){
      var rootRef = new Firebase($cookies.rootRef || 'YOUR_FIREBASE_URL');     
      var current_competition='Bot Olympics'
      // define every standard ref used application wide
      return {
        root: rootRef,
        users: rootRef.child('users'),
        competitions: rootRef.child('competitions'),
        bot_olympics: rootRef.child('competitions').child('Bot Olympics'),//now useless
        current : rootRef.child('competitions').child(current_competition),
        
      };


    }
  ]);
