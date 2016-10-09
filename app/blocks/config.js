( function () {
	'use strict';

	function Configuration ( $httpProvider, $urlRouterProvider, $stateProvider, ROUTE ) {

		var dir = '/app/';

		angular.extend( $httpProvider.defaults.headers.common );

		$httpProvider.interceptors.push( function AuthInterceptor ( $q, $window, Session ) {
			return {
				'request' : function requestInterceptor ( config ) {
					config.headers = config.headers || {};

					if ( Session.getSessionToken() ) {
						config.headers.Authorization = 'Bearer ' + Session.getSessionToken();
					}

					return config;
				},

				'responseError' : function responseError ( response ) {
					if ( response.status === 401 || response.status === 400 ) {
						Session.destroySession();
						$window.location.hash = '#/';
						$window.location.reload();
					}
					return $q.reject( response );
				}
			};
		} );

		function maskSubRoute ( val ) {
			return $stateProvider
				.state( val.state, val.options );
		}

		function maskRoute ( val ) {
			if ( val.subRoute ) {
				$stateProvider
					.state( 'my' + val.state, val.options );
				return angular
					.forEach( val.subRoute, maskSubRoute );
			}
			return $stateProvider
				.state( 'my' + val.state, val.options );
		}

		function route () {
			angular.forEach( ROUTE, maskRoute );

		}

		route();

		// $stateProvider
		// 	// .state( 'mycrm-dashboard', {
		// 	// 	'url' : '/',
		// 	// 	'templateUrl' : dir + 'dashboard/dashboard.html',
		// 	// } )
		// 	.state( 'mycrm-contacts', {
		// 		'url' : '/contacts',
		// 		'templateUrl' : dir + 'contacts/contacts.html',
		// 		'controller' : 'ContactsCtrl',
		// 		'controllerAs' : 'vm'
		// 	} )
		// 	.state( 'mycrm-contacts.view', {
		// 		'url' : ':id',
		// 		'templateUrl' : dir + 'dashboard/dashboard.html',
		// 	} );

		$urlRouterProvider.otherwise( '/' );
	};

	angular
		.module( 'app.blocks' )
		.config( Configuration );

	Configuration.$inject = [ '$httpProvider', '$urlRouterProvider', '$stateProvider', 'ROUTE' ]
} ) ();