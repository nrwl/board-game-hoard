import {
  generateFiles,
  readProjectConfiguration,
  Tree
} from '@nrwl/devkit';
import { join } from 'path';

export default async function(tree: Tree, schema: any) {
    console.debug('adding LICENSE.txt to library');

    generateFiles(
      tree,
      join(__dirname, 'files'),
      readProjectConfiguration(tree, schema.name).root,
      {}
    );

    return;
}
