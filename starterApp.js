Ext.application({
name :'app',
requires:['Ext.window.MessageBox','app.extJsBook'],

launch:function(){



var book= Ext.create('app.extJsBook');
book.setTitle("ExtJSStarter");
book.setPrice("10$");
book.setAuthor('Luis Cevallos');

console.log("Message 1 -",book.getTitle());
//This message will be overridden by the second message
Ext.Msg.alert("Message 1 -",book.getTitle());


//Setting values during instantiation

var book2=Ext.create('app.extJsBook',{
										title:'Ext JS Upgrade',
										author: 'Alex',
										price:'20$'
									}
					);

Ext.Msg.alert("Message 2 -",book2.getTitle());


}
});