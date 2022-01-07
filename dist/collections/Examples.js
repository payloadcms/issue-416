"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Markdown_1 = require("../components/Markdown");
var Examples = {
    slug: 'examples',
    admin: {
        useAsTitle: 'someField',
    },
    fields: [
        {
            name: 'someField',
            type: 'text',
        },
        {
            name: 'markdown',
            type: 'text',
            admin: { components: { Field: Markdown_1.MarkdownField } },
        }
    ],
};
exports.default = Examples;
