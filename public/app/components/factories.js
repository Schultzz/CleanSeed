'use strict';

/* Factories */

angular.module('myAppRename.factories', []).
  factory('InfoFactory', function () {
    var info = "Factory calling..";

    var _getInfo = function(){
      return info;
    };



    return {
      getInfo: _getInfo
    }
  })

;