angular.module('myApp')

.service('sharedProperties', function () {
    
    var origin = "SFO";
    var destination;

    return {
      getDest: function () {
        return destination;
      },
      setDest: function(value) {
        destination = value;
      },
      getOrigin:function(){
        return origin;
      },
      setOrigin: function(newOrigin){
        origin = newOrigin;
      }
    };
  })


.service('fetchFBData', function($http , $q) {
  var friendLoc = {};
  var locData = [];

  var fetchData =function(){
    var deferred = $q.defer();

    FB.getLoginStatus(function(response) {

      // Check if the user is logged into faceboom, if not prompt
      if (response.status !== 'connected') { FB.login(function(response) {}, {scope:'friends_location'});}

      //Grab the location data from facebook and get it deduped into locData
      FB.api({
        method: 'fql.query',
        query: 'SELECT current_location FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me())'
      }, function(data) {
        for (var key in data){
          if (data[key].current_location){
            var cur = data[key].current_location.city;
            if (cur in friendLoc){ friendLoc[cur]++;}
            else {
              friendLoc[cur] = 1;
              locData.push(data[key].current_location);
            }
          }
        }

        // Add # of friends to locData
        for (var i = 0 ; i < locData.length ; i++){
          locData[i].friends = friendLoc[locData[i].city];
        }

        console.log("locData is ready");

        deferred.resolve(locData);
      });
    });

    return deferred.promise;

  };

  return {
    fetchData: fetchData,
    getData: function (){
      return locData;
    },
  };

});

