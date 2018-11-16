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
var InitializeComponent = (function (_super) {
    __extends(InitializeComponent, _super);
    function InitializeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitializeComponent.prototype.componentDidMount = function () {
        var props = this.props;
        props.actions && props.actions.initialProgress(65);
    };
    InitializeComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        var pending = prevProps.pending, progress = prevProps.progress;
        var props = this.props;
        if (props.pending && props.progress === 100) {
            props.actions.initialComplete(this.props.waitimes);
        }
    };
    InitializeComponent.prototype.render = function () {
        var props = this.props;
        var pending = props.pending, progress = props.progress, children = props.children, animation = props.animation;
        return pending ? (React.createElement("div", { className: "initial-pending", style: progress === 100 && animation ? { animation: animation } : {} },
            React.createElement("div", { className: "progress-span" },
                "Loading... ",
                progress,
                "%"),
            React.createElement("div", { className: "layout-progress-bar" },
                React.createElement("div", { className: "progress-bar-container" },
                    React.createElement("div", { className: "progress-bar-pending", style: { width: progress + "%" } }))))) : children;
    };
    InitializeComponent.defaultProps = {
        pending: false,
        progress: 15,
        animation: undefined,
        waitimes: 500,
        actions: {
            initialProgress: function () { },
            initialComplete: function () { }
        }
    };
    return InitializeComponent;
}(React.PureComponent));
exports.InitializeComponent = InitializeComponent;
