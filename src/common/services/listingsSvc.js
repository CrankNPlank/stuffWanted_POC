/*
 * listingsSvc.js
 *
 */
angular.module('ngBoilerplate.listingsSvc', [])

.factory('ListingsSvc', ['$log', '$firebase', function ($log, $firebase) {
  var ref = new Firebase('https://resplendent-fire-5673.firebaseio.com/listing');
  return $firebase(ref);
}]);