import { Tree, readProjectConfiguration, readJson } from '@nrwl/devkit';
import { join } from 'path';
import { rule as ratingFormatterV2 } from '../../eslint-rules/rating-formatter-v2';
import { Linter } from 'eslint';
import { parse } from '@typescript-eslint/parser';

export default async function (tree: Tree, schema: any) {
  const ruleName = 'rating-formatter-v2';
  const ruleImpl = ratingFormatterV2;
  await runLintRuleFix(tree, schema.name, ruleName, ruleImpl);
  await addESLintRuleToProject(tree, schema.name, ruleName);
}

function runLintRuleFix(
  tree: Tree,
  projectName: string,
  ruleName: string,
  ruleImpl: any
) {
  // iterate through every file in the project
  const sourceRoot = readProjectConfiguration(tree, projectName).sourceRoot;
  function runLintRuleFixOnDirectory(root) {
    tree.children(root).forEach((fileName) => {
      const childPath = join(root, fileName);
      if (!tree.isFile(childPath)) {
        runLintRuleFixOnDirectory(childPath);
        return;
      }
      // run the lint rule fixes on each file
      const fileContent = tree.read(childPath).toString();

      const linter = new Linter();
      linter.defineRule(ruleName, ruleImpl);
      const parserName = '@typescript-eslint/parser';
      linter.defineParser(parserName, {
        parse,
      });

      const results = linter.verifyAndFix(fileContent, {
        parser: parserName,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 2018,
          ecmaFeatures: {
            jsx: true,
          },
        },
        rules: { [ruleName]: 'error' },
      });

      // update the tree if the lint fix changed a file
      if (fileContent !== results.output) {
        tree.write(childPath, results.output);
      }
    });
  }
  runLintRuleFixOnDirectory(sourceRoot);
}

function addESLintRuleToProject(
  tree: Tree,
  projectName: string,
  localRuleName: string
) {
  const root = readProjectConfiguration(tree, projectName).root;
  if (tree.read(root + '/.eslintrc')) {
    const eslintJson = readJson(tree, root + '/.eslintrc');
    eslintJson.rules[`local-rules/${localRuleName}`] = 'error';
    tree.write(root + '/.eslintrc', JSON.stringify(eslintJson, undefined, 2));
  }
}
