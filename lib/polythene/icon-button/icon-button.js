"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _polytheneIconIcon=require("polythene/icon/icon");var _polytheneIconIcon2=_interopRequireDefault(_polytheneIconIcon);var _polytheneButtonButton=require("polythene/button/button");var _polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton);require("polythene-theme/icon-button/icon-button");var createView=function createView(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];var content=undefined;if(opts.icon){content=_mithril2["default"].component(_polytheneIconIcon2["default"],opts.icon)}else if(opts.content){content=opts.content}opts.content=(0,_mithril2["default"])(".label",content);opts.parentClass=opts.parentClass||"icon-button";opts.wash=opts.wash!==undefined?opts.wash:false;return _mithril2["default"].component(_polytheneButtonButton2["default"],opts)};var component={view:function view(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];