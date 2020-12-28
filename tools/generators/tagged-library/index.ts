import { Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { SchematicOptions } from './schema';

function getTags(schema: SchematicOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

export default async function (tree: Tree, schema: SchematicOptions) {
  await wrapAngularDevkitSchematic('@nrwl/workspace', 'lib')(tree, {
    name: schema.name,
    tags: getTags(schema),
  });
}
