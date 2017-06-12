Ext.application({
name :'app',
requires:['Ext.window.MessageBox'],
launch:function(){
console.log("Welcome to Ext Starter Tutorial");
Ext.Msg.alert("Message"," Welcome to Ext Starter Tutorial");
}
});