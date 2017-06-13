Ext.define('app.controller.extjsUsersController', {
														extend: 'Ext.app.Controller',
														views: ['extjsUsersListView'],
														init: function() {
														console.log('Initialized!');
														this.control(
																		{
																		// Events of panel referred through Ext.ComponentQuery
																		'viewport > panel': {
																							//This event is fired, as the grid panel extends panel.
																							render: this.onPanelRendered
																						},
																		// Events of grid panel referred through its xtype
																		'extjsUsersList': {
																							itemclick: this.editUser,
																							afterrender:this.gridAfterRender
																							}
																		}
																	);
														},
														onPanelRendered: function() {
														console.log('The panel was rendered');
														},
														gridAfterRender: function(grid, opts) {
																								console.log('Grid Component rendered');
																							},
														editUser: function(grid, record) {
																							console.log('Clicked on ' + record.get('name'));
																						}
})