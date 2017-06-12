Ext.define('app.extJsBook',{
								config:{
										title:'',
										price:'',
										author:''
										},
								constructor:function(config){
									this.initConfig(config)
								},
								applyTitle:function(value){
									return Ext.String.capitalize(value.toUpperCase());
								},
								//Logging both new and ol value
								updateAuthor:function(newValue,oldValue){
									console.log("NewVal- " +newValue +":"+ "Old Val- " +oldValue);
								}
							});	