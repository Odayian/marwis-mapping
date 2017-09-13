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
                controller: 'MapCtrl as map',
                templateUrl: '/templates/lufft.html'
            });


    }
    
   
     angular
         .module('marwisMapping', ['ui.router','ui.bootstrap', 'firebase'])
         .config(config);
 })();