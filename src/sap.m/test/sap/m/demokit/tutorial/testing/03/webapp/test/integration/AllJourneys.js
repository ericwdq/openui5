sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Arrangement",
	"./WorklistJourney"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "sap.ui.demo.bulletinboard.view.",
		autoWait: true
	});
});