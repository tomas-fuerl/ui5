sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("hts.itq2017.controller.App"
    , {      onShowHello : function () {
          // show a native JavaScript alert
          alert("Hello World");
       }
    });
 });