import { Tree, readProjectConfiguration, generateFiles } from '@nrwl/devkit';
import { stringUtils } from '@nrwl/workspace';
import { join } from 'path';
import { GeneratorOptions } from './schema';

export default async function (host: Tree, schema: GeneratorOptions) {
  console.log('adding documentation to library');

  const filesPath = join(__dirname, 'files');
  const destinationPath = readProjectConfiguration(host, schema.name).root;
  generateFiles(host, filesPath, destinationPath, {
    projectName: schema.name,
    author: schema.author,
    favoriteColor: schema.favoriteColor,
    dasherize: stringUtils.dasherize,
    template: '',
  });
}
