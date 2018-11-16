"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var createInitializeReducer = function () {
    var initState = {
        pending: true,
        progress: 15
    };
    return function (state, action) {
        if (state === void 0) { state = initState; }
        var _a;
        var handlers = (_a = {},
            _a[actions_1.INITIALIZE_COMPLETE] = function (state, action) {
                return __assign({}, state, { pending: false });
            },
            _a[actions_1.INITIALIZE_PENDING] = function (state, action) {
                return __assign({}, state, { progress: action.payload.pending });
            },
            _a);
        var handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    };
};
exports.default = createInitializeReducer();
