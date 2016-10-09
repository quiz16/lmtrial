/* global angular */
( function () {
	'use strict';

	function route () {
		var dir = '/app/';

		return [
			{
				'id' : 1,
				'name' : 'Dashboard',
				'state' : 'crm-dashboard',
				'options' : {
					'url' : '/',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 2,
				'name' : 'Contacts',
				'state' : 'crm-contacts',
				'options' : {
					'url' : '/contacts',
					'templateUrl' : dir + 'contacts/contacts.html',
					'controller' : 'ContactsCtrl',
					'controllerAs' : 'vm'
				},
				'subRoute' : [
					{
						'state' : 'mycrm-contacts.view',
						'options' : {
							'url' : '/:id',
							'views' : {
								'@' : {
									'templateUrl' : dir + 'dashboard/dashboard.html'
								}
							}

						}
					}
				]
			},
			{
				'id' : 3,
				'name' : 'Loan Tools',
				'state' : 'crm-loantools',
				'options' : {
					'url' : '/loantools',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 4,
				'name' : 'Insurance Tools',
				'state' : 'crm-insurancetools',
				'options' : {
					'url' : '/insurancetools',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 5,
				'name' : 'Workflow',
				'state' : 'crm-workflow',
				'options' : {
					'url' : '/workflow',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 6,
				'name' : 'Communicate',
				'state' : 'crm-communicate',
				'options' : {
					'url' : '/communicate',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 7,
				'name' : 'Report',
				'state' : 'crm-report',
				'options' : {
					'url' : '/report',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 8,
				'name' : 'Commission',
				'state' : 'crm-commission',
				'options' : {
					'url' : '/commission',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 9,
				'name' : 'Resources',
				'state' : 'crm-resources',
				'options' : {
					'url' : '/resources',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			},
			{
				'id' : 10,
				'name' : 'Referral',
				'state' : 'crm-referrals',
				'options' : {
					'url' : '/referrals',
					'templateUrl' : dir + 'dashboard/dashboard.html'
				}
			}
		]
	}

	angular
		.module( 'app.core' )
		.constant( 'ROUTE', route() )
		.constant( '_', window._ )
		.constant( '$', window.$ );
} )( );
