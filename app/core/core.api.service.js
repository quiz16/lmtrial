( function () {
	'use strict';

	function apiService ( $resource ) {
		function login () {
			return $resource( '/api/login', {}, {
				'save' : {
					'method' : 'POST',
					// need to add `transformResponse` because API returns string
					'transformResponse' : function ( data ) {
						return {
							'token' : angular.fromJson( data )
						}
					}
				}
			} );
		}

		function getFamilyList () {
			return $resource( '/api/contacts/FamilyListGet' );
		}

		function getPersonalInfo () {
			return $resource( '/api/User/PersonalInfoGet' );
		}

		var service = {
			'login' : login(),
			'getFamilyList' : getFamilyList(),
			'getPersonalInfo' : getPersonalInfo()
		};

		return service;
	}

	angular
	.module( 'app.core' )
	.factory( 'apiService', apiService );
} )( );
