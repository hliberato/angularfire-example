angular.module('firebase.config', [])
  .constant('FBURL', 'https://meetup-focus.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
