import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { addDepsToPackageJson, updateJsonInTree } from '@nrwl/workspace';

export default function(schema: any): Rule {
  const dependencies = {};
  const devDependencies = {
    cowsay: '*'
  };
  const shouldRunInstallTask = true;

  return chain([
    addDepsToPackageJson(dependencies, devDependencies, shouldRunInstallTask),
    updateJsonInTree('package.json', json => {
      json.scripts.cowsay = 'cowsay';
      return json;
    })
  ]);
}
