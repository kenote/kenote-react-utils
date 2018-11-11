"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var actions_1 = require("./actions");
var InitializeComponent = (function (_super) {
    __extends(InitializeComponent, _super);
    function InitializeComponent(props) {
        return _super.call(this, props) || this;
    }
    InitializeComponent.prototype.componentDidMount = function () {
        var props = this.props;
        props.actions && props.actions.initialProgress(65);
    };
    InitializeComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        var pending = prevProps.pending, progress = prevProps.progress;
        var props = this.props;
        if (props.pending) {
            props.progress === 65 && props.actions.initialProgress(100);
            props.progress === 100 && props.actions.initialComplete();
        }
    };
    InitializeComponent.prototype.render = function () {
        var props = this.props;
        var pending = props.pending, progress = props.progress, children = props.children;
        return pending ? (React.createElement("div", { className: "initial-pending" },
            React.createElement("div", { className: "progress-span" },
                "Loading... ",
                progress,
                "%"),
            React.createElement("div", { className: "layout-progress-bar" },
                React.createElement("div", { className: "progress-bar-container" },
                    React.createElement("div", { className: "progress-bar-pending", style: { width: progress + "%" } }))))) : children;
    };
    return InitializeComponent;
}(React.PureComponent));
exports.InitializeComponent = InitializeComponent;
var stateToProps = function (state, picks) {
    if (picks === void 0) { picks = []; }
    var props = {};
    for (var _i = 0, picks_1 = picks; _i < picks_1.length; _i++) {
        var key = picks_1[_i];
        props[key] = state[key];
    }
    return props;
};
exports.connectInitialize = function (tagName, bindActionCreators) { return [
    function (state) { return stateToProps(state[tagName], ['pending', 'progress']); },
    function (dispatch) { return ({
        actions: bindActionCreators({ initialComplete: actions_1.initialComplete, initialProgress: actions_1.initialProgress }, dispatch)
    }); }
]; };
