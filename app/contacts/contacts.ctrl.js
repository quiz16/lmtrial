( function () {
	'use strict';

	function ContactsCtrl ( apiService, Session, $state ) {
		var self = this;

		self.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
		self.isLoading = true;

		self.tableItems = [
			{
				'name' : 'Family Name',
				'class' : 'col-xs-2'
			},
			{
				'name' : 'City',
				'class' : 'col-xs-2'
			},
			{
				'name' : 'Contact #',
				'class' : 'col-xs-2'
			},
			{
				'name' : 'Adviser',
				'class' : 'col-xs-2'
			},
			{
				'name' : 'Client Type',
				'class' : 'col-xs-1'
			}
		];

		function goContact ( id ) {
			$state.transitionTo( 'mycrm-contacts.view', { 'id' : id } )
			// $location.path( '/contacts/' + id );
		}

		function fetchList ( startWith ) {
			apiService.getFamilyList
				.get( {
					'startWith' : startWith || '*'
				}, function ( res ) {
					self.isLoading = false;
					self.collection = res;
				} );
		}

		function activate () {
			fetchList();
		}

		self.goContact = goContact;

		activate();
	}

	angular
		.module( 'app.contacts' )
		.controller( 'ContactsCtrl', ContactsCtrl );

	ContactsCtrl.$inject = [ 'apiService', 'Session', '$state' ];
} )( );
