"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetUrl = function (asset, context) {
    if (context === void 0) { context = ''; }
    return (/^(data\:)/.test(asset) ? "" : context).concat(asset);
};
exports.isActiveLink = function (linkname, pathname) {
    var pathMatch = pathname.match(/^(\/)([a-z\-]+)/);
    var linkMatch = linkname.match(/^(\/)([a-z\-]+)/);
    var pathKey = pathMatch && pathMatch[2] || '';
    var linkKey = linkMatch && linkMatch[2] || '';
    return pathKey.toLowerCase() === linkKey.toLowerCase();
};
