/*global angular*/
(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });
 
        $stateProvider
            .state('mapping', {
                url: '/',
                controller: 'LufftCtrl as lufft',
                templateUrl: '/templates/lufft.html'
            });


    }
    
   
     angular
         .module('marwisMapping', ['ui.router','ui.bootstrap', 'firebase'])
         .config(config);
 })();