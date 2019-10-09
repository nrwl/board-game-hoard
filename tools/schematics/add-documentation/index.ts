import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';
import { SchematicOptions } from './schema';
import { strings } from '@angular-devkit/core';

export default function(schema: SchematicOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('adding documentation file to lib');

    return chain([
      mergeWith(
        apply(url('./files'), [
          applyTemplates({
            projectName: schema.name,
            author: schema.author,
            favoriteColor: schema.favoriteColor,
            dasherize: strings.dasherize
          }),
          move(getProjectConfig(tree, schema.name).root)
        ])
      )
    ])(tree, context);
  };
}
