/*global angular*/
(function() {
    function LufftCtrl(PollFirebase) {
    this.marwisData=null;
    var deviceName = "date_time";
    this.polls = null;
    this.lat = null;
    this.lon = null;
    this.dateTime = null;
    this.surfaceTemp = null;
    this.roadCond = null;
    
    this.getData = function(){
       this.polls = PollFirebase.getByDate();
       console.log("lufft setting this.polls");
    };
    
    this.setData = function(){
        console.log("lufft setting data");
        PollFirebase.send(this.dateTime, this.lat, this.lon, this.surfaceTemp, this.roadCond);
        this.lat = null;
        this.lon = null;
        this.dateTime = null;
        this.surfaceTemp = null;
        this.roadCond = null;
        
    };
}
    angular
        .module('marwisMapping')
        .controller('LufftCtrl', ['PollFirebase',LufftCtrl]);
})();
