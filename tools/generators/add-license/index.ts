import { Tree, readProjectConfiguration, generateFiles } from '@nrwl/devkit';
import { join } from 'path';

export default async function (host: Tree, schema: any) {
  console.log('adding LICENSE.txt to library');

  const filesPath = join(__dirname, 'files');
  const destinationPath = readProjectConfiguration(host, schema.name).root;
  generateFiles(host, filesPath, destinationPath, {});
}
