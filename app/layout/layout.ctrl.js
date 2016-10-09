( function () {
	'use strict';

	function Layout ( apiService, Session, ROUTE, _ ) {
		var self = this;

		var path = 'mycrm-';

		self.items = _.reject( ROUTE, [ 'isSub', true ] );

		function isCurrent () {

		}

		function fetchUser () {
			apiService.getPersonalInfo
				.get( {}, function ( res ) {
					self.userInfo = res;
					Session.setPersonalInfo( self.userInfo );
				} );
		}

		function activate () {
			if ( !Session.getSessionToken() ) {

				apiService.login
					.save( {
						'username': 'testuser6@loanmarket.co.nz',
						'password': 'U9LGMJK3'
					} )
					.$promise.then( function ( res ) {
						fetchUser();
						Session.setSessionToken( res.token );
					} );
				return;
			}
			fetchUser();
		}

		self.isCurrent = isCurrent;

		activate();
	}

	angular
		.module( 'app.layout' )
		.controller( 'Layout', Layout );

	Layout.$inject = [ 'apiService', 'Session', 'ROUTE', '_' ];
} )( );
