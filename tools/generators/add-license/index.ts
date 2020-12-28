import { chain, externalSchematic, Rule, SchematicContext, Tree, mergeWith, apply, url, move } from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';

export default function(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('adding LICENSE.txt to library');

    return chain([
      mergeWith(
        apply(url('./files'), [move(getProjectConfig(tree, schema.name).root)])
      )
    ])(tree, context);
  }
}
