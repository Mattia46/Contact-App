'use strict';
angular.module('contactsApp')
  .factory('api', function($http, $q) {

    var getContactList = function() {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: "http://www.mocky.io/v2/58088826100000e9232b75b0",
        headers: {
          'Access-Control-Allow-Origin': 'http://www.mocky.io/',
        }
      }).then(function(response){
        defer.resolve(response.data)
      }).catch(function(response){
        defer.reject(response);
        console.error('error', response)
      })
      return defer.promise;
    };
    return {
      getContactList: getContactList,
    };

  });

