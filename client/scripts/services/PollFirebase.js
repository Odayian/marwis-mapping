/*global angular*/
/*global firebase*/
(function() {
  function PollFirebase($firebaseArray) {
    var PollFirebase = {};
    var ref = firebase.database().ref().child("marwis002");
//    var marwisData = $firebaseArray(ref);

    PollFirebase.getByDate = function() {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("date_time"));
        //return $firebaseArray(ref.orderByChild("date_time").equalTo(date));
        
    };
    
    // PollFirebase.send = function(content, roomId, user){
    //   messages.$add({
  		// 		content: content,
  		// 		username: user,
  		// 		roomId: roomId,
  		// 		sentAt: firebase.database.ServerValue.TIMESTAMP,
  		// 		altTime: Date.now()
  		// 	});  
    // };

    return PollFirebase;
    
  }

  angular
    .module('marwisMapping')
    .factory('PollFirebase', ['$firebaseArray', PollFirebase]);
})();