import { generateFiles, readProjectConfiguration, Tree } from '@nrwl/devkit';
import { stringUtils } from '@nrwl/workspace';
import { join } from 'path';
import { SchematicOptions } from './schema';

export default async function (host: Tree, options: SchematicOptions) {
  console.debug('adding documentation file to lib');

  generateFiles(
    host,
    join(__dirname, 'files'),
    readProjectConfiguration(host, options.name).root,
    {
      ...options,
      projectName: options.name,
      dasherize: stringUtils.dasherize,
      template: '',
    }
  );

  return;
}
