Ext.application({
name :'app',
requires:['Ext.window.MessageBox','app.extjsButton','app.model.Users'],

launch:function(){




	var extJS_UserGrid = Ext.create('Ext.grid.Panel',{
														title:'Ext JS Users List',
														store:extJS_UserStore, //created in previous chapter
														columns:[
																	{header:'Name',dataIndex:'name'},
																	{header:'Age',dataIndex:'age',width:30},
																	{header:'Employed',dataIndex:'employed'},
																	{header:'Email',dataIndex:'email',flex:1}
																]
													}
									);

/*
var extjsBookPanel= Ext.create('Ext.panel.Panel',{
													bodyPadding: 5,
													width:300,
													title: 'extjsBookPanel',
													items:[
															{

																xtype: 'textfield',
																fieldLabel: 'Publish date'
															},
															Ext.create('app.extjsButton',{
																							text:'Custom button instantiated using Ext.Create()'

																						 }
																	  ),
															{
																xtype:'extjsButton',
																text: 'Custom button instantiated using xtype'
															}

														  ],
														  renderTo: Ext.getBody()


													}
								);
	*/


	Ext.create('Ext.tab.Panel',{

								 width: 400,
								 height: 200,
								 dockedItems:[
								 				{
								 					xtype:'toolbar',
								 					dock:'bottom',
								 					items:[{text:'Docked Button'}]

								 				}
								 			 ],
								 renderTo: document.body,
								 items:[
								 		{
								 			title : 'Page 1',
								 			items:[
								 					extJS_UserGrid
								 				 ]

								 		},
								 		{
								 			xtype:'panel',
								 			title : 'Page 2',
								 			html:'Page2'

								 		}
								 	   ]

								}
			 );

}
});