/**
 * Created by satyajeet on 27/12/15.
 */
'use strict';

angular.module('HDGoogleAuth',['ngRoute', 'ngCookies'])

    .controller('HDGoogleAuthController',
    ['$scope', '$rootScope', '$location', '$window','$cookieStore','$http','HDTokenService',
        function ($scope, $rootScope, $location, $window,$cookieStore,$http, HDTokenService) {
            // reset login status
            $rootScope.hdeskIp="http://localhost:4000";
            console.log('in ng controller..##'+$location.url());
            var query=$location.absUrl().split('?')[1];
            console.log('THE QUERY: '+query);
            HDTokenService.getToken(query).success(function(response){
                console.log('YEAH..'+response);
                HDTokenService.SetToken(response.email,response.hd_map_token);
                //$window.location.href ="http://localhost:3000/home";
                $window.location.href =($rootScope.hdeskIp+"/home");

            }).error(function(err){
                console.error('GERROR: '+err);
            });

        }]);