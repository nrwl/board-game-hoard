"use strict";
exports.__esModule = true;
exports.rule = {
    name: 'rating-formatter-v2',
    meta: {
        type: 'problem',
        docs: {
            decsription: 'Migrate to ratingFormatV2',
            category: 'Possible Errors',
            url: 'http://example.com',
            recommended: 'error'
        },
        fixable: 'code',
        messages: {
            upgrade: 'Use ratingFormatV2 instead of ratingFormat'
        }
    },
    create: function (context) {
        return {
            ImportDeclaration: function (node) {
                var oldVersion = 'ratingFormat';
                var newVersion = 'ratingFormatV2';
                var path = '@bghoard/shared/util-formatters';
                if (isDisallowedImport(oldVersion, path, node)) {
                    context.report({
                        node: node,
                        messageId: 'upgrade',
                        fix: fixDisallowedImport(oldVersion, newVersion, path, node)
                    });
                }
            }
        };
    }
};
function isDisallowedImport(oldVersion, path, node) {
    if (node.source.value === path) {
        return node.specifiers.some(function (specifier) {
            if (specifier.type === 'ImportSpecifier') {
                // disallow `import { oldVersion } from 'path'
                return specifier.imported.name === oldVersion;
            }
        });
    }
    return false;
}
function fixDisallowedImport(oldVersion, newVersion, path, node) {
    return function (fixer) {
        if (node.source.value === path) {
            var result_1;
            node.specifiers.forEach(function (specifier) {
                if (specifier.type === 'ImportSpecifier' &&
                    specifier.imported.name === oldVersion) {
                    result_1 = fixer.replaceText(specifier, newVersion + " as " + specifier.local.name);
                }
            });
            return result_1;
        }
        return false;
    };
}
exports["default"] = exports.rule;
