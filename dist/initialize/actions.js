"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIALIZE_PENDING = '@@initialze/PENDING';
exports.INITIALIZE_COMPLETE = '@@initialze/COMPLETE';
exports.initialProgress = function (pending, times) {
    if (times === void 0) { times = 300; }
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: exports.INITIALIZE_PENDING,
                payload: { pending: pending }
            });
        }, times);
    };
};
exports.initialComplete = function (times) {
    if (times === void 0) { times = 500; }
    return function (dispatch) {
        return setTimeout(function () {
            dispatch({
                type: exports.INITIALIZE_COMPLETE
            });
        }, times);
    };
};
