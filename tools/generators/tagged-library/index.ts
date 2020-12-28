import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { SchematicOptions } from './schema';

function getTags(schema: SchematicOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

export default function(schema: SchematicOptions): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: schema.name,
      tags: getTags(schema),
    }),
  ]);
}
