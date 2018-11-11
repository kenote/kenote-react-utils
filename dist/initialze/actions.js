"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIALIZE_PENDING = '@@initialze/PENDING';
exports.INITIALIZE_COMPLETE = '@@initialze/COMPLETE';
exports.initialProgress = function (pending, tag) {
    if (tag === void 0) { tag = null; }
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: exports.INITIALIZE_PENDING,
                payload: { pending: pending, tag: tag }
            });
        }, 300);
    };
};
exports.initialComplete = function (tag) {
    if (tag === void 0) { tag = null; }
    return function (dispatch) {
        return setTimeout(function () {
            dispatch({
                type: exports.INITIALIZE_COMPLETE,
                payload: { tag: tag }
            });
        }, 500);
    };
};
