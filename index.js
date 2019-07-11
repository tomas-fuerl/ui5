sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "hts.itq2017.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});