sap.ui.define([
	"sap/m/Text",
	"sap/m/Link"

], function (Text, Link) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

	new Link({
		text: "Google",
		href: "https://www.google.de"
	}).placeAt("content");

	new Text({
		text: "Hello World"
	}).placeAt("content");

});