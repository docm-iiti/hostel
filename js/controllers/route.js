angular.module('main',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/home', {templateUrl: 'home/home.html', controller: homeCtrl}).
  when('/facilities', {templateUrl: 'facilities/facilities.html', controller: facilitiesCtrl}).
  when('/facilities/:topic', {templateUrl: 'facilities/facilities.html', controller: facilitiesCtrl}).
  when('/life', {templateUrl: 'life/life.html', controller: lifeCtrl}).
  when('/life/:topic', {templateUrl: 'life/life.html', controller: lifeCtrl}).
  when('/contactus', {templateUrl: 'views/contactus.html'}).
  when('/gallery', {templateUrl: 'views/gallery.html'}).
  when('/people', {templateUrl: 'people/people.html', controller: peopleCtrl}).
  when('/404', {templateUrl: 'views/404.html'}).
  otherwise({redirectTo: '/home'});
  $locationProvider.hashPrefix('!');
}]);
angular.module('hostel',[]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/profile', {templateUrl: 'profile/profile.html', controller: profileCtrl}).
  when('/profile/edit', {templateUrl: 'profile/edit.html', controller: profileCtrl}).
  when('/profile/:userID', {templateUrl: 'profile/profile.html', controller: profileCtrl}).
  when('/complaints', {templateUrl: 'complaints/complaints.html', controller: complaintCtrl}).
  when('/complaints/add', {templateUrl: 'complaints/add.html', controller: complaintCtrl}).
  when('/complaints/info', {templateUrl: 'complaints/info.html', controller: complaintCtrl}).
  when('/memes', {templateUrl: 'memes/memes.html', controller: memeCtrl}).
  when('/memes/add', {templateUrl: 'memes/add.php', controller: memeCtrl}).
  otherwise({redirectTo: '/profile'});
}]);