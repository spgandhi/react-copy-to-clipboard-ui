(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './styles'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./styles'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.styles);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _styles) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _styles2 = _interopRequireDefault(_styles);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MyComponent = function (_React$Component) {
        _inherits(MyComponent, _React$Component);

        function MyComponent(props) {
            _classCallCheck(this, MyComponent);

            var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

            _this.state = {
                isActive: false,
                btnLabel: _this.props.btnLabel
            };
            _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
            _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
            _this.copyToClipboard = _this.copyToClipboard.bind(_this);
            return _this;
        }

        _createClass(MyComponent, [{
            key: 'handleMouseEnter',
            value: function handleMouseEnter() {
                this.setState({ isActive: true });
                if (this.props.onMouseEnter) this.props.onMouseEnter();
            }
        }, {
            key: 'handleMouseLeave',
            value: function handleMouseLeave() {
                this.setState({ isActive: false });
                if (this.props.onMouseLeave) this.props.onMouseLeave();
            }
        }, {
            key: 'copyToClipboard',
            value: function copyToClipboard() {
                var _this2 = this;

                var el = document.createElement('textarea');
                el.value = this.props.copyText || this.props.children.toString();
                var copiedText = this.props.copyText || this.props.children.toString();
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);

                this.setState({ btnLabel: this.props.onCopyBtnLabel });

                if (this.props.onCopy) this.props.onCopy(copiedText);

                setTimeout(function () {
                    _this2.setState({ btnLabel: _this2.props.btnLabel });
                }, this.props.onCopyBtnLabelDuration);
            }
        }, {
            key: 'render',
            value: function render() {
                var _state = this.state,
                    isActive = _state.isActive,
                    btnLabel = _state.btnLabel;
                var _props = this.props,
                    containerStyle = _props.containerStyle,
                    activeContainerStyle = _props.activeContainerStyle,
                    textStyle = _props.textStyle,
                    activeTextStyle = _props.activeTextStyle,
                    btnStyle = _props.btnStyle;

                containerStyle = _extends({}, _styles2.default.containerStyle, containerStyle);
                textStyle = _extends({}, _styles2.default.textStyle, textStyle);
                var copyBtnStyle = _styles2.default.copyBtnStyle;

                if (isActive) {
                    containerStyle = _extends({}, containerStyle, _styles2.default.activeContainerStyle, activeContainerStyle);
                    copyBtnStyle = _extends({}, copyBtnStyle, _styles2.default.activeCopyBtnStyle, btnStyle);
                    textStyle = _extends({}, textStyle, activeTextStyle);
                }

                return _react2.default.createElement(
                    'div',
                    { style: _extends({}, containerStyle), onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
                    _react2.default.createElement(
                        'div',
                        { style: _extends({}, textStyle) },
                        this.props.children
                    ),
                    _react2.default.createElement(
                        'button',
                        { style: copyBtnStyle, onClick: this.copyToClipboard },
                        btnLabel
                    )
                );
            }
        }]);

        return MyComponent;
    }(_react2.default.Component);

    ;

    exports.default = MyComponent;


    MyComponent.defaultProps = {
        children: 'This is copyable text',
        copyText: null,

        btnLabel: 'copy',
        onCopyBtnLabel: 'copied',
        onCopyBtnLabelDuration: 3000,

        // Styles
        containerStyle: {},
        activeContainerStyle: {},
        textStyle: {},
        activeTextStyle: {},
        btnStyle: {},

        // Event Handlers
        onCopy: null,
        onMouseEnter: null,
        onMouseLeave: null
    };
});