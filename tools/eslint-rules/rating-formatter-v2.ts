import {
  Node,
  ImportDeclaration
} from '@typescript-eslint/typescript-estree/dist/ts-estree/ts-estree';

export const rule = {
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
  create: function(context) {
    return {
      ImportDeclaration: function(node) {
        const oldVersion = 'ratingFormat';
        const newVersion = 'ratingFormatV2';
        const path = '@bghoard/shared/util-formatters';
        if (isDisallowedImport(oldVersion, path, node)) {
          context.report({
            node,
            messageId: 'upgrade',
            fix: fixDisallowedImport(oldVersion, newVersion, path, node)
          });
        }
      }
    };
  }
};

function isDisallowedImport(
  oldVersion: string,
  path: string,
  node: any
): boolean {
  if (node.source.value === path) {
    return node.specifiers.some(specifier => {
      if (specifier.type === 'ImportSpecifier') {
        // disallow `import { oldVersion } from 'path'
        return specifier.imported.name === oldVersion;
      }
    });
  }
  return false;
}

function fixDisallowedImport(oldVersion, newVersion, path, node) {
  return fixer => {
    if (node.source.value === path) {
      let result;
      node.specifiers.forEach(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.imported.name === oldVersion
        ) {
            result = fixer.replaceText(specifier, `${newVersion} as ${specifier.local.name}`);
        }
      });
      return result;
    }
    return false;
  };
}

export default rule;
