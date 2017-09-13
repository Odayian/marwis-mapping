/*global angular*/
(function() {
    function LufftCtrl(PollFirebase) {
    this.marwisData=null;
    
    this.getData = function(){
      this.marwisData = PollFirebase.getByDate();
    };
    
        
    }

    angular
        .module('marwisMapping')
        .controller('LufftCtrl', ['PollFirebase',LufftCtrl]);
})();
