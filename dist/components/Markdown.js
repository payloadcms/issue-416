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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownField = void 0;
var react_1 = __importStar(require("react"));
var config_provider_1 = require("@payloadcms/config-provider");
var forms_1 = require("payload/components/forms");
var rich_markdown_editor_1 = __importDefault(require("rich-markdown-editor"));
// Make sure to never re-render the editor, since it tracks the value on its own.
var MemorizedEditor = react_1.default.memo(rich_markdown_editor_1.default, function (prev, next) { return prev.id === next.id; });
var MarkdownField = function (props) {
    var _a, _b;
    var path = props.path, admin = props.admin;
    var _c = (0, forms_1.useField)({ path: path }), value = _c.value, setValue = _c.setValue;
    var config = (0, config_provider_1.useConfig)();
    console.log(config);
    var onChange = (0, react_1.useCallback)(function (getValue) {
        var newValue = getValue().replace(/^\s*\\/gm, '');
        setValue(newValue);
    }, [path]);
    var topLevelStyle = __assign(__assign({}, ((_b = (_a = admin) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {})), { marginBottom: '60px' });
    return (react_1.default.createElement("div", { style: topLevelStyle, className: "field-type markdown" },
        react_1.default.createElement(MemorizedEditor, { id: "markdown-field-".concat(path.replace(/W/g, '-')), defaultValue: value, onChange: onChange })));
};
exports.MarkdownField = MarkdownField;
