import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { rule as ratingFormatterV2 } from '../../eslint-rules/rating-formatter-v2';
import { getProjectConfig, updateJsonInTree } from '@nrwl/workspace';
import { Linter } from 'eslint';
import { parse } from '@typescript-eslint/parser';

export default function(schema: any): Rule {
  const ruleName = 'rating-formatter-v2';
  const ruleImpl = ratingFormatterV2;
  return chain([
    runLintRuleFix(schema.name, ruleName, ruleImpl),
    addESLintRuleToProject(schema.name, ruleName),
    // addTSLintRuleToProject
  ]);
}

function runLintRuleFix(projectName: string, ruleName: string, ruleImpl: any) {
  return (tree, context) => {
    // iterate through every file in the project
    const sourceRoot = getProjectConfig(tree, projectName).sourceRoot;
    tree.getDir(sourceRoot).visit((path, file) => {
      // run the lint rule fixes on each file
      const fileContent = file.content.toString();

      const linter = new Linter();
      linter.defineRule(ruleName, ruleImpl);
      const parserName = '@typescript-eslint/parser';
      linter.defineParser(parserName, {
        parse
      });

      const results = linter.verifyAndFix(fileContent, {
        parser: parserName,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 2018,
          ecmaFeatures: {
            jsx: true
          }
        },
        rules: { [ruleName]: 'error' }
      })

      // update the tree if the lint fix changed a file
      if( fileContent !== results.output) {
        tree.overwrite(path, results.output);
      }
    })
  }
}

function addESLintRuleToProject(projectName: string, localRuleName: string) {
  return (tree, context) => {
    const root = getProjectConfig(tree, projectName).root;
    if(tree.get(root + '/.eslintrc')) {
      return updateJsonInTree(root + '/.eslintrc', json => {
        json.rules[`local-rules/${localRuleName}`] = 'error';
        return json;
      })
    }
  }
}