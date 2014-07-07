angular.module('ngBoilerplate.listings', ['ui.router'])

.config(['$stateProvider', function config($stateProvider) {
  $stateProvider
    .state('listings', {
      abstract: true,
      url: '/listings',
      data:{pageTitle: 'Your Wanted Listings'},
      views: {
        "main": {
          controller: 'ListingsCtrl',
          templateUrl: 'listings/listings.tpl.html'
        }
      }
    })
    .state('listings.createListing', {
      url: '/create',
      data:{sectionTitle: 'Create New Listing'},
      views: {
        "listingsPage": {
          templateUrl: 'listings/listingCreate.tpl.html'
        }
      }
    })
    .state('listings.getListing', {
      url: '/{id}',
      data:{sectionTitle: 'View Listing'},
      views: {
        "listingsPage": {
          templateUrl: 'listings/listingCreate.tpl.html'
        }
      }
    })
    .state('listings.getListings', {
      url: '',
      data:{sectionTitle: 'All Listings'},
      views: {
        "listingsPage": {
          templateUrl: 'listings/listingsList.tpl.html'
        }
      }
    });
}])

.controller('ListingsCtrl', ['$scope', '$state', 'ListingsSvc', 
  function ListingsCtrl($scope, $state, ListingsSvc) {
    //$scope.listingForm = {};
    $scope.listing = {};
    $scope.listings = ListingsSvc;

    $scope.saveListing = function () {
      var dateTime = new Date();
      $scope.listings.$add({
        title: $scope.listing.title,
        content: $scope.listing.content,
        addedDateTime: dateTime
      });
      $scope.listing = '';
      $state.go('listings.getListings', {}, {reload: true});
    };

    $scope.deleteListing = function (id) {
      $scope.listings.$remove(id);
      $state.go('listings.getListings', {}, {reload: true});
    };

    $scope.cancel = function () {
      $state.go('listings.getListings', {}, {reload: true});
    };
  }
]);