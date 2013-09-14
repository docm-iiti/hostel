angular.module('main',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/home', {templateUrl: 'views/home.html'}).
  when('/facilities', {templateUrl: 'facilities/facilities.html', controller: facilitiesCtrl}).
  when('/life', {templateUrl: 'life/life.html', controller: lifeCtrl}).
  when('/contactus', {templateUrl: 'views/contactus.html'}).
  when('/gallery', {templateUrl: 'views/gallery.html'}).
  when('/people', {templateUrl: 'people/people.html', controller: peopleCtrl}).
  otherwise({redirectTo: '/home'});
  $locationProvider.hashPrefix('!');
}]);