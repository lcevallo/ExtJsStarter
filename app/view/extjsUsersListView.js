Ext.define('app.view.extjsUsersListView',{
												extend: 'Ext.grid.Panel',
												alias : 'widget.extjsUsersList',
												title : 'Ext JS Users',
												initComponent: function() {
																				this.store=extJS_UserStore,
																				this.columns=[
																								{header:'Name',dataIndex:'name'},
																								{header:'age',dataIndex:'age',width:30},
																								{header:'employed',dataIndex:'employed'},
																								{header:'Email',dataIndex:'email',flex:1}
																							]
																				this.callParent(arguments);
												}
										}
		);