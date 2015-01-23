var isString = require("is_string"),
    helpers = require("./helpers"),
    resolveFile = require("./resolve_file"),
    resolveModule = require("./resolve_module");


module.exports = resolve;


function resolve(path, parentDirname, options) {
    options = options || {};

    options.exts = options.exts || ["js", "json"];
    options.encoding = options.encoding || "utf-8";
    options.builtin = options.builtin != null ? options.builtin : {};
    options.packageType = isString(options.packageType) ? !!options.packageType : "browser";
    options.throwError = options.throwError != null ? !!options.throwError : true;

    if (helpers.isNotRelative(path)) {
        return resolveModule(path, parentDirname, options);
    } else {
        return resolveFile(path, parentDirname, options);
    }
}

resolve.helpers = helpers;
