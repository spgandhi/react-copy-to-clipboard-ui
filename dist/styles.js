(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.styles = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		containerStyle: {
			display: 'inline-flex',
			padding: '2px 6px',
			border: '1px solid transparent',
			justifyContent: 'center',
			alignItems: 'center'
		},
		activeContainerStyle: {
			border: '1px dashed',
			borderRadius: 5
		},
		textStyle: {},
		copyBtnStyle: {
			padding: '0px 6px',
			marginLeft: 12,
			fontSize: 12,
			background: 'rgba(0,0,0,.1)',
			borderRadius: 5,
			opacity: 0,
			maxHeight: 20
		},
		activeCopyBtnStyle: {
			opacity: 1
		}
	};
});