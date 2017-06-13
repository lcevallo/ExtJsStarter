Ext.application(
					{
						name:'app',
						requires:['Ext.window.MessageBox','app.model.Users',
						'app.controller.extjsUsersController',
						'app.view.extjsUsersListView',
						'Ext.container.Viewport','Ext.grid.Panel'
						],
						controllers: [
										'extjsUsersController'
									],
						launch:function(){
											Ext.create('Ext.container.Viewport', {
																					items: [
																							{xtype:'extjsUsersList' }
																						   ]
																				}
													 );
										}
					}
				);