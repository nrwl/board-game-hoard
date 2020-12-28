import { Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace';
import { SchematicOptions } from './schema';

function getTags(schema: SchematicOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

export default async function (tree: Tree, schema: SchematicOptions) {
  await libraryGenerator(tree, {
    name: schema.name,
    tags: getTags(schema),
  });
}
