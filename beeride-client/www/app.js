/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
 */
window.serverAddress = "http://192.168.0.102:8080";
Ext.application({
	name : 'Beeride',
	models : [ 'Path' ],
	stores : [ 'Path' ],
	requires : [ 'Ext.MessageBox', 'Beeride.util.Auth' ],
	controllers : [ 'Login', 'Crud', 'Form' ],
	views : [ 'Main', 'Login', 'Map', 'Crud', 'ListToolbar', 'FormToolbar' ],

	icon : {
		'57' : 'resources/icons/Icon.png',
		'72' : 'resources/icons/Icon~ipad.png',
		'114' : 'resources/icons/Icon@2x.png',
		'144' : 'resources/icons/Icon~ipad@2x.png'
	},

	isIconPrecomposed : true,

	startupImage : {
		'320x460' : 'resources/startup/320x460.jpg',
		'640x920' : 'resources/startup/640x920.png',
		'768x1004' : 'resources/startup/768x1004.png',
		'748x1024' : 'resources/startup/748x1024.png',
		'1536x2008' : 'resources/startup/1536x2008.png',
		'1496x2048' : 'resources/startup/1496x2048.png'
	},

	launch : function() {
		Ext.fly('appLoadingIndicator').destroy();
		Ext.Viewport.add(Ext.create('Beeride.view.Login'));

	},

	onUpdated : function() {
		Ext.Msg.confirm("Application Update",
				"Application Updated. Reload now?", function(buttonId) {
					if (buttonId === 'yes') {
						window.location.reload();
					}
				});
	}
});
Ext.define('Override.util.PaintMonitor', {
	override : 'Ext.util.PaintMonitor',
	constructor : function(config) {
		return new Ext.util.paintmonitor.CssAnimation(config);
	}
});
Ext.define('Override.util.SizeMonitor', {
	override : 'Ext.util.SizeMonitor',
	constructor : function(config) {
		var namespace = Ext.util.sizemonitor;
		if (Ext.browser.is.Firefox) {
			return new namespace.OverflowChange(config);
		} else if (Ext.browser.is.WebKit || Ext.browser.is.IE11) {
			return new namespace.Scroll(config);
		} else {
			return new namespace.Default(config);
		}
	}
});