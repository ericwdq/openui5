sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.m.sample.ComboBoxGrouping.Component", {

		metadata : {
			rootView : {
				"viewName": "sap.m.sample.ComboBoxGrouping.Page",
				"type": "XML",
				"async": true
			},
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"Page.view.xml",
						"Page.controller.js"
					]
				}
			}
		}
	});

	return Component;

});
