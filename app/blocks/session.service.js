( function () {
	'use strict';

	function Session ( $localStorage ) {

		function setSessionToken ( token ) {
			$localStorage.token = token;
		}

		function setPersonalInfo ( info ) {
			$localStorage.personalInfo = info;
		}

		function getSessionToken () {
			return $localStorage.token;
		}

		function getPersonalInfo () {
			return $localStorage.personalInfo;
		}

		function destroySession () {
			$localStorage.$reset();
		}

		return {
			'setSessionToken': setSessionToken,
			'setPersonalInfo' : setPersonalInfo,
			'getSessionToken': getSessionToken,
			'getPersonalInfo' : getPersonalInfo,
			'destroySession' :  destroySession
		};
	}

	angular
		.module( 'app.blocks' )
		.factory( 'Session', Session );

	Session.$inject = [ '$localStorage'];
} )();