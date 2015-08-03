angular.module('olympics.services')
  .factory('Requests', ['$cookies', '$http',
    function($cookies, $http) {
    	return {
        createTeam: function(url, object, callback) {
          $http.post(url, object)
          .success(function(data) {
            if(data.error) {
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
            console.log(data);
            callback();
            Materialize.toast('Your team was created!', 5000, 'teal accent-4');
          })
          .error(function(err) {
            Materialize.toast('ERROR: Team could not be created!\nPlease, try again later.', 5000, 'red darken-3');
            return err;
          });
        },

    		joinTeam: function(url, object, callback) {
    			$http.post(url, object)
    			.success(function(data) {
            if(data.error) {
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
    				console.log(data);
            callback();
            Materialize.toast('You have successfully joined the team!', 5000, 'teal accent-4');
    			})
    			.error(function(err) {
            Materialize.toast('ERROR: Team could not be joined!\nPlease, try again later.', 5000, 'red darken-3');
            console.log(err);
    				return err;
    			});
    		},

    		registerTeam: function(url, object, callback) {
    			$http.put(url, object)
    			.success(function(data) {
            if(data.error) {
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
    				console.log(data);
            callback();
            Materialize.toast('Your team was successfully registered!', 5000, 'teal accent-4');
    			})
    			.error(function(err) {
            Materialize.toast('ERROR: Team could not be registered!\nPlease, try again later.', 5000, 'red darken-3');
    				return err;
    			});
    		},
        //////////////////////////
        postlink: function(url, object, callback){
          console.log("post link in http.requests")
          console.log(url);
          console.log(object);
          $http.put(url, object)
          .success(function(data){
            if(data.error){
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
            console.log(data);
            callback();
            Materialize.toast('Link Posted', 5000, 'teal accent-4');
          })
          .error(function(err){
            Materialize.toast('ERROR posting link' , 5000, 'red darken-3');
            return err;
          });
        },
        /////////////////////////
        acceptMember: function(url, callback) {
          $http.put(url)
          .success(function(data) {
            if(data.error) {
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
            console.log(data);
            callback();
            Materialize.toast('Member has been successfully accepted!', 5000, 'teal accent-4');
          })
          .error(function(err) {
            Materialize.toast('ERROR: Member could not be accepted!\nPlease, try again later.', 5000, 'red darken-3');
            return err;
          });
        },

        declineMember: function(url, callback) {
          $http.delete(url)
          .success(function(data) {
            if(data.error) {
              Materialize.toast('ERROR: ' + data.error, 5000, 'red darken-3');
              return data.error;
            }
            console.log(data);
            callback();
            Materialize.toast('Member has been successfully rejected!', 5000, 'teal accent-4');
          })
          .error(function(err) {
            Materialize.toast('ERROR: Member could not be rejected!\nPlease, try again later.', 5000, 'red darken-3');
            return err;
          });
        }
    	};
    }
  ]);
