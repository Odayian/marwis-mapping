/*global angular*/
/*global firebase*/
(function() {
  function PollFirebase($firebaseArray) {
    var PollFirebase = {};
    var ref = firebase.database().ref().child("marwis002");
    var marwisData = $firebaseArray(ref);
    var deviceName = "Marwis002";
    PollFirebase.getByDate = function() {
      console.log("Polling Firebase and receiving: "+ $firebaseArray(ref.orderByChild("date_time")));
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("date_time"));
        //return $firebaseArray(ref.orderByChild("date_time").equalTo(date));
        
        
    };
    
    PollFirebase.send = function(date, lat, lon, stemp, rcond ){
      console.log("entering send");
      marwisData.$add({
  				dateTime: date,
  				latitude: lat,
  				longitude: lon,
  				surfaceTemp: stemp,
  				roadCond: rcond,
  				sentAt: firebase.database.ServerValue.TIMESTAMP,
  				deviceName: deviceName,
  				altTime: Date.now()
  			});  
    };

    return PollFirebase;
    
  }

  angular
    .module('marwisMapping')
    .factory('PollFirebase', ['$firebaseArray', PollFirebase]);
})();